import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from '@/server/prisma';
import { helper } from '@/dappkit/lib/helper';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        url: 'https://github.com/login/oauth/authorize',
        params: { scope: 'read:user user:email' },
      },
      // checks: ['none'],
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        try {
          const _user = await prisma.user.findFirst({
            where: {
              id: {
                equals: user.id,
              },
            },
            select: {
              id: true,
            },
          });

          if (_user) {
            // user exists, update
            await prisma.user.update({
              where: {
                id: user.id,
              },
              data: {
                name: user.name,
                email: user.email,
                image: user.image,
              },
            });
          } else {
            // user does not exist, create
            await prisma.user.create({
              data: {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
                loginType: 'github',
              },
            });
          }

          const team = await prisma.team.findFirst({
            where: {
              creatorId: {
                equals: user.id,
              },
            },
            select: {
              id: true,
            },
          });

          if (!team) {
            await prisma.$transaction(async (tx) => {
              const res = await tx.team.create({
                data: {
                  name: `${user.name}'s Team`,
                  creatorId: user.id,
                },
              });
              await tx.team_user.create({
                data: {
                  teamId: res.id,
                  userId: user.id,
                  role: 'owner',
                },
              });
            });
          }
          return true;
        } catch (error) {
          return false;
        }
      }
      return false;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        const iat = Date.now() / 1000;
        const exp = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;
        token.token = await helper.encode({
          sub: user.id,
          name: user.name,
          iat,
          exp,
        });
      }
      return token;
    },
    async session({ session, user, token }) {
      // @ts-ignore
      session.user.id = token.sub;
      // @ts-ignore
      session.user.token = token.token;
      return session;
    },
  },
});
