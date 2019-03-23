import React from 'react';
import { Link } from 'react-router-dom';
import MenuCard from './MenuCard';
import routes from '../../configs/routes';

import s from './menuGrid.module.css';

const MenuGrid = ({ items }) => (
  <ul className={s.menuGrid}>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`${routes.MENU}/${item.id}`}>
          <MenuCard {...item} />
        </Link>
      </li>
    ))}
  </ul>
);
export default MenuGrid;
