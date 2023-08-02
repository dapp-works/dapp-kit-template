import DataLoader from 'dataloader';
import TTLCache from '@isaacs/ttlcache';
import { prisma } from '@/server/prisma';
// TODO: replace cache to redis

export const userService = {
  jwtTokenLoader: new DataLoader<string, any, any>(
    async (tokens: string[]) => {
      const users = await prisma.user.findMany({
        where: { id: { in: tokens } },
        select: { id: true, name: true, email: true, image: true },
      });
      return users;
    },
    {
      cache: true,
      cacheMap: new TTLCache({ max: 10000, ttl: 1000 * 60 }),
    },
  ),
  joinedTeamIdsLoader: new DataLoader<string, number[], any>(
    async (userIds: string[]) => {
      const res = await prisma.team_user.findMany({
        where: {
          userId: { in: userIds },
        },
        select: {
          userId: true,
          teamId: true,
        },
      });
      return userIds.map((id) => res.filter((item) => item.userId === id).map((item) => item.teamId));
    },
    {
      cache: true,
      cacheMap: new TTLCache({ max: 10000, ttl: 1000 * 60 }),
    },
  ),
  checkTeamPermission: async (userId: string, teamId: number) => {
    const teamIds = await userService.joinedTeamIdsLoader.load(userId);
    return !!teamIds.find((id) => id === teamId);
  },
};
