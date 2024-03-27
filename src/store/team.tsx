import { PromiseState, RootStore, Store } from '@dappworks/kit';
import { api } from '@/lib/trpc';
import { useEffect } from 'react';
import { JoinedTeamsType, TeamUserType } from '@/server/routers/team';
import { UserStore } from './user';
import { StoragePlugin } from '@dappworks/kit/experimental';

export default class TeamStore implements Store {
  sid = 'TeamStore';
  autoObservable?: boolean = true;

  teams = new PromiseState<any, JoinedTeamsType[]>({
    defaultValue: [],
    //@ts-ignore
    currentIndex: StoragePlugin.Get({ key: 'current-team', value: 0, engine: StoragePlugin.engines.localStorage }),
    onSelect: (val) => {
      this.teams._onSelect(val);
    },
    async function() {
      const teams = await api.team.joinedTeams.query();
      return teams;
    },
  })
    .on('data', (teams) => {
      console.log(teams);
    })
    .on('select', (index) => {
      console.log(index);
    });

  selectTeam = new PromiseState({
    debug: {
      name: 'Select Team',
      input: {
        index: 0,
      },
    },
    function: async ({ index }) => {
      this.teams.onSelect(index);
      return null;
    },
  });

  teamUsers = new PromiseState<any, TeamUserType[]>({
    defaultValue: [],
    function: async () => {
      const teamStore = RootStore.Get(TeamStore);
      const teamId = teamStore.currentTeam?.team.id;
      if (!teamId) return [];
      const res = await api.team.teamUsers.query({ teamId });
      return res;
    },
  });

  get currentTeam(): JoinedTeamsType {
    return this.teams.current;
  }

  createTeam = new PromiseState({
    successMsg: 'Create team success',
    async function(name: string) {
      const res = await api.team.createTeam.mutate({
        name,
      });
      if (res.ok) {
        const teamStore = RootStore.Get(TeamStore);
        teamStore.teams.call();
      }
      return res;
    },
  });

  addMember = new PromiseState({
    successMsg: 'Add member success',
    async function(userId: string) {
      const teamStore = RootStore.Get(TeamStore);
      const res = await api.team.addTeamUser.mutate({
        userId,
        role: 'member',
        teamId: teamStore.currentTeam?.team.id,
      });
      if (res.ok) {
        teamStore.teamUsers.call();
      }
      return res;
    },
  });

  useTeams() {
    useEffect(() => {
      UserStore.wait().then(() => {
        this.teams.call();
      });
    }, []);
  }

  useTeamUsers() {
    // this.teams.use('update', () => {
    //   this.teamUsers.call();
    // });
    useEffect(() => {
      this.teamUsers.call();
      return () => {
        this.teams.event.removeAllListeners('update');
      };
    }, []);
  }
}
