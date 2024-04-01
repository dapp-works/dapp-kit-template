import { getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { helper } from '@/lib/helper';
import { UserInfo, remult } from 'remult';
import { User } from '@/remult/entities/user';
import { Team } from '@/remult/entities/team';
import { TeamUser } from '@/remult/entities/teamUser';
import { remultServer } from './remult';

const handleAuthorize = async (userInfo: User) => {
  return remultServer.withRemult(async () => {
    try {
      const userRepo = remult.repo(User);
      await userRepo.save(userInfo);
      const teamRepo = remult.repo(Team);
      let team = await teamRepo.findFirst({
        creatorId: userInfo.id,
      });
      if (!team) {
        team = await teamRepo.insert({
          name: `${userInfo.name}'s Team`,
          creatorId: userInfo.id,
        });
        const teamUserRepo = remult.repo(TeamUser);
        await teamUserRepo.insert({
          teamId: team.id,
          userId: userInfo.id,
          role: 'owner',
        });
      }
      return true;
    } catch (error) {
      return false;
    }
  });
};

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        url: 'https://github.com/login/oauth/authorize',
        params: { scope: 'read:user user:email' },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user && account && profile) {
        const loginType = account.provider;
        const ok = await handleAuthorize({
          id: user.id,
          name: user.name || '',
          email: user.email || '',
          image: user.image || '',
          loginType,
          role: 'user',
        });
        return ok;
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
          name: user.name!,
          iat,
          exp,
        });
      }
      return token;
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          token: token.token,
        },
      };
    },
  },
};

export const getUserOnServer = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    const user = {
      id: session.user.id,
      name: session.user.name,
      roles: [],
    } as UserInfo;
    return user;
  }
};
