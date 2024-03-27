import React from 'react';
import {
  Image,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  Popover,
  Avatar,
  PopoverTrigger,
  PopoverContent,
  Button,
  NavbarBrand,
  Divider,
} from '@nextui-org/react';
import { RootStore, rootStore } from '@dappworks/kit';
import { UserStore } from '@/store/user';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { Project } from '@/store/project';
import { _ } from '@/lib/lodash';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import TeamStore from '@/store/team';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';

const AppNavbar = observer(() => {
  const userStore = RootStore.Get(UserStore);
  const project = RootStore.Get(Project);

  userStore.use();

  const menuItems = [];

  return (
    <Navbar maxWidth="full" className="border-none dark:bg-[#20202B]/80 shadow-sm">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="lg:hidden" />
        <NavbarBrand className="hidden lg:flex">
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {project.topNavList.map((item, index) => {
          return (
            <NavbarItem key={`${item}-${index}`}>
              <Link href={item.url}>{item.title}</Link>
            </NavbarItem>
          );
        })}
        <NavbarItem className="hidden lg:flex">
          <UserInfo />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <ConnectButton />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-4">
        {[...project.topNavList].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link target={item.target} color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'} className="w-full" href={item.url as string}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <UserInfo />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <ConnectButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
});

const Logo = () => {
  return <Image src="/verified.svg" width={40} height={40} alt="Logo" />;
};

const UserInfo = observer(() => {
  const user = RootStore.Get(UserStore);
  const team = RootStore.Get(TeamStore);
  const { teams, currentTeam } = team;

  if (!user.isLogin) {
    return (
      <Button
        color="primary"
        size="sm"
        onClick={(e) => {
          rootStore.events.emit('next.signIn.github');
        }}
      >
        Sign In with Github
      </Button>
    );
  }
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Avatar className="w-8 h-8 cursor-pointer" src={user.image} name={user.name} />
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div>
          <div className="">{user.email}</div>
          <Divider className="my-2" />
          <div className="">Teams</div>
          {teams.value?.map((item, index) => (
            <div
              key={item.team.id}
              className={cn('w-full flex items-center justify-between cursor-pointer my-2', {
                'bg-accent': item.team.id === currentTeam?.team.id,
              })}
              onClick={() => {
                team.teams.onSelect(index);
              }}
            >
              <span>{item.team.name}</span>
            </div>
          ))}
          <Divider className="my-2" />
          <Button
            className="mt-3 w-full"
            size="sm"
            color="primary"
            onClick={(e) => {
              signOut();
            }}
          >
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
});

export default AppNavbar;
