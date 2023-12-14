import { makeAutoObservable } from 'mobx';
import { User } from 'next-auth';
import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { api } from '@/lib/trpc';
import { RootStore, Store, rootStore } from '@dappworks/kit';
import { useRouter } from 'next/router';

export class UserStore implements User, Store {
  sid = 'user';
  id: string = '';
  name?: string = '';
  email?: string = '';
  image?: string = '';
  token: string = '';
  loginType: string = '';
  isSuperAdmin: boolean = false;

  get event() {
    return RootStore.init().events;
  }

  wait() {
    return new Promise<UserStore>((res, rej) => {
      if (this.id && this.token) {
        res(this);
      }

      //@ts-ignore
      this.event.once('user:ready', (user) => {
        res(this);
      });
    });
  }

  static wait() {
    return RootStore.Get(UserStore).wait();
  }

  get isLogin() {
    return !!this.token;
  }

  set(args: Partial<UserStore>) {
    Object.assign(this, args);
    //@ts-ignore
    this.event.emit('user:ready', this);
  }

  logout() {
    this.set({
      id: '',
      name: '',
      email: '',
      image: '',
      token: '',
      loginType: '',
      isSuperAdmin: false,
    });
    signOut()
  }

  constructor() {
    makeAutoObservable(this);
  }

  use() {
    const { data: session } = useSession();
    useEffect(() => {
      const userStore = rootStore.get(UserStore);
      if (!userStore.isLogin && session) {
        //@ts-ignore
        userStore.set(session.user);
      }
    }, [session]);
  }
}
