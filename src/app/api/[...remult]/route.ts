import { remultNextApp } from 'remult/remult-next';
import { createPostgresDataProvider } from 'remult/postgres';
import { Team } from '@/remult/entities/team';
import { User } from '@/remult/entities/user';
import { TeamUser } from '@/remult/entities/teamUser';
import { TeamUserController } from '@/remult/controllers/teamUserController';
import { getUserOnServer } from '@/lib/auth';

const api = remultNextApp({
  dataProvider: createPostgresDataProvider({
    connectionString: process.env['DATABASE_URL']!,
    configuration: {
      ssl: true,
    },
  }),
  entities: [User, Team, TeamUser],
  controllers: [TeamUserController],
  getUser: getUserOnServer,
});

export const { POST, PUT, DELETE, GET } = api;
