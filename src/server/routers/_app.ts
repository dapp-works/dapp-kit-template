import { t } from '../trpc';
import { teamRouter } from './team';
import { userRouter } from './user';

export const appRouter = t.router({
  user: userRouter,
  team: teamRouter,
});
//@ts-ignore
export const caller = appRouter.createCaller({});
export type AppRouter = typeof appRouter;
