import React from 'react';

import Logo from '../Logo/Logo';
import Navigatiom from '../Navigation/Navigation';
import UserMenu from '../../modules/user/UserMenu/UserMenu';

import appLogo from './assets/logo.png';
import avatar from './assets/avatar.jpg';
import navItems from '../../configs/main-nav';

import s from './AppHeader.module.css';

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
