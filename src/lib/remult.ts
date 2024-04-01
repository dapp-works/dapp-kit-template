import { remultNextApp } from 'remult/remult-next';
import { createPostgresDataProvider } from 'remult/postgres';
import { Team } from '@/remult/entities/team';
import { User } from '@/remult/entities/user';
import { TeamUser } from '@/remult/entities/teamUser';
import { TeamUserController } from '@/remult/controllers/teamUserController';

export const remultServer = remultNextApp({
  dataProvider: createPostgresDataProvider({
    connectionString: process.env['DATABASE_URL']!,
    configuration: {
      ssl: true,
    },
  }),
  entities: [User, Team, TeamUser],
  controllers: [TeamUserController],
});
