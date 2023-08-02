import { TRPCError, inferProcedureOutput } from '@trpc/server';
import { authProcedure, router } from '../trpc';
import { z } from 'zod';
import { userService } from '../service/user';
import generateApiKey from 'generate-api-key';

export const userRouter = router({
  getUsersByEmail: authProcedure
    .input(
      z.object({
        email: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.user.findMany({
        where: {
          email: {
            equals: input.email,
          },
        },
        select: {
          id: true,
          email: true,
        },
      });
      return res;
    }),
  apiKeys: authProcedure
    .input(
      z.object({
        teamId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const inTeam = await userService.checkTeamPermission(ctx.user.id, input.teamId);
      if (!inTeam) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }
      const apiKeys = await ctx.prisma.api_key.findMany({
        where: {
          teamId: {
            equals: input.teamId,
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      });
      return apiKeys;
    }),
  createAPIKey: authProcedure
    .input(
      z.object({
        name: z.string().max(100),
        teamId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const inTeam = await userService.checkTeamPermission(ctx.user.id, input.teamId);
      if (!inTeam) {
        throw new TRPCError({ code: 'FORBIDDEN' });
      }

      const apiKey = generateApiKey({
        method: 'bytes',
        prefix: 'mc',
      }) as string;

      await ctx.prisma.api_key.create({
        data: {
          key: apiKey,
          name: input.name,
          creatorId: ctx.user.id,
          teamId: input.teamId,
        },
      });
      return {
        ok: true,
      };
    }),
  deleteAPIKey: authProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .output(z.any())
    .mutation(async ({ ctx, input }) => {
      const res = await ctx.prisma.api_key.findUnique({
        where: {
          id: input.id,
        },
        select: {
          teamId: true,
        },
      });
      if (res) {
        const inTeam = await userService.checkTeamPermission(ctx.user.id, res.teamId);
        if (!inTeam) {
          throw new TRPCError({ code: 'FORBIDDEN' });
        }
      } else {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }
      await ctx.prisma.api_key.delete({
        where: {
          id: input.id,
        },
      });
      return {
        ok: true,
      };
    }),
});

export type UserRouter = typeof userRouter;
export type UsersByEmailType = inferProcedureOutput<UserRouter['getUsersByEmail']>[0];
export type APIKeyType = inferProcedureOutput<UserRouter['apiKeys']>[0];