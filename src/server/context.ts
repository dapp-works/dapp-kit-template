import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from './prisma';
import { NextApiRequest } from 'next';
import { helper } from '@/dappkit/lib/helper';
import { userService } from './service/user';

interface CreateContextOptions extends trpcNext.CreateNextContextOptions {
  // session: Session | null
}

export const getUserFromHeader = async (req: NextApiRequest) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.replace('Bearer ', '');
      const tokenData = await helper.decode(token);

      const exp = new Date(tokenData.exp * 1000);
      if (exp.getTime() < Date.now()) {
        return null;
      }

      const user = await userService.jwtTokenLoader.load(tokenData.sub);
      return user;
    } catch (error) {
      return null;
    }
  }
  return null;
};

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner({ req, res }: CreateContextOptions) {
  const user = await getUserFromHeader(req);
  return { prisma, req, res, user };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(opts: trpcNext.CreateNextContextOptions): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/caching

  const ctx = await createContextInner(opts);
  return ctx;
}
