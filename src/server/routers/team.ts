import { authProcedure, router } from '../trpc';
import { TRPCError, inferProcedureOutput } from '@trpc/server';
import { z } from 'zod';

export const teamRouter = router({
  joinedTeams: authProcedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.team_user.findMany({
      where: {
        userId: {
          equals: ctx.user.id,
        },
      },
      select: {
        team: {
          select: {
            id: true,
            name: true,
            plan: true,
          },
        },
        role: true,
      },
    });
    return res;
  }),
  teamUsers: authProcedure
    .input(
      z.object({
        teamId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const res = await ctx.prisma.team_user.findMany({
        where: {
          teamId: {
            equals: input.teamId,
          },
        },
        select: {
          id: true,
          role: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
            },
          },
        },
      });
      return res.map((item) => {
        return {
          ...item.user,
          teamUserId: item.id,
          role: item.role,
        };
      });
    }),
  createTeam: authProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.$transaction(async (tx) => {
        const res = await tx.team.create({
          data: {
            name: input.name,
            creatorId: ctx.user.id,
          },
        });
        await tx.team_user.create({
          data: {
            teamId: res.id,
            userId: ctx.user.id,
            role: 'owner',
          },
        });
      });
      return {
        ok: true,
      };
    }),
  addTeamUser: authProcedure
    .input(
      z.object({
        teamId: z.number(),
        userId: z.string(),
        role: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.id === input.userId) {
        return {
          ok: true,
        };
      }

      const user = await ctx.prisma.team_user.findFirst({
        where: {
          teamId: {
            equals: input.teamId,
          },
          userId: {
            equals: input.userId,
          },
        },
      });

      if (user) {
        return {
          ok: true,
        };
      }

      await ctx.prisma.team_user.create({
        data: {
          teamId: input.teamId,
          userId: input.userId,
          role: input.role,
        },
      });

      return {
        ok: true,
      };
    }),
  deleteTeamUser: authProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { id } = input;
      const teamUser = await ctx.prisma.team_user.findFirst({
        where: {
          id,
        },
        select: {
          userId: true,
        },
      });
      if (ctx.user.id === teamUser?.userId) {
        return {
          ok: false,
          msg: 'You cannot delete yourself',
        };
      }
      await ctx.prisma.team_user.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
      };
    }),
});

export type TeamRouter = typeof teamRouter;
export type JoinedTeamsType = inferProcedureOutput<TeamRouter['joinedTeams']>[0];
export type TeamUserType = inferProcedureOutput<TeamRouter['teamUsers']>[0];
