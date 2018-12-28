import React from 'react';
import Logo from '../Logo/Logo';
import Navigatiom from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import appLogo from '../../img/logo.png';
import s from './AppHeader.module.css';
import avatar from '../../img/avatar.jpg';

const navItems = ['menu', 'about', 'contact', 'deliver'];

const AppHeader = () => (
  <header className={s.header}>
    <div className={s.Logo}>
      <Logo image={appLogo} width={80} height={80} />
    </div>
    <div>
      <Navigatiom items={navItems} />
    </div>
    <div className={s.usermenu}>
      <UserMenu avatar={avatar} name="Petja" />
    </div>
  </header>
);

export default AppHeader;
