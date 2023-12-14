import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, Image, Avatar, Button, Divider, NavbarMenu, PopoverTrigger, PopoverContent, Popover } from '@nextui-org/react';
import { RootStore, rootStore } from '@dappworks/kit';
import { UserStore } from '@/store/user';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Project } from '@/store/project';
import { _ } from '@/lib/lodash'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const AppNavbar = observer(() => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const userStore = RootStore.Get(UserStore);
  const project = RootStore.Get(Project);
  const router = useRouter();
  userStore.use();
  const menuItems = [];
  // const wallet = RootStore.Get(WalletStore)
  // wallet.use()
  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} className='bg-background flex justify-unset'>
      <NavbarContent style={{ flex: 10 }}>
        <div className='mr-auto hidden sm:block'>Logo</div>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
      </NavbarContent>


      <div className='hidden md:flex items-center justify-center gap-4'>
        <NavbarContent className="sm:flex ml-auto" justify="end">
          {
            project.topNavList.map((item, index) => {
              return (
                <NavbarItem key={`${item}-${index}`}>
                  <Link href={item.url} >
                    {item.title}
                  </Link>
                </NavbarItem>
              )
            })}
        </NavbarContent>

        <NavbarContent className='ml-auto'>
          <NavbarItem className="hidden lg:flex">
            <ConnectButton />
            {/* {
            userStore.isLogin ?
              <>
                <Popover placement="bottom" showArrow={true}>
                  <PopoverTrigger>
                    <Avatar className="w-8 h-8" src={userStore.image} name={userStore.name} />
                  </PopoverTrigger>
                  <PopoverContent className='bg-card'>
                    <div className="px-1 py-2">
                      <div className='text-primary text-xl'>{userStore.name}</div>
                      <div className='mt-3'>{userStore.email}</div>
                      <Button className='mt-3' color='primary' onClick={e => {
                        userStore.logout();
                        router.push('/login');
                      }}>Logout</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </> :
              <Button onClick={e => {
                console.log('next.signIn.github');
                rootStore.events.emit('next.signIn.github');
              }} href="#">Login</Button>
          } */}
          </NavbarItem>
        </NavbarContent>
      </div>

      <div className='block md:hidden'>
        <ConnectButton accountStatus={'address'} />
      </div>



      <NavbarMenu>
        {[...project.topNavList].map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link target={item.target} color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'} className="w-full" href={item.url as string} >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
})

export default AppNavbar