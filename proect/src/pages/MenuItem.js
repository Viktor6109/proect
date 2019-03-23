import React from 'react';
import MenuItemContainer from '../modules/menu/MenuItemContainer';

const MenuItemPage = ({ match }) => (
  <div>
    <MenuItemContainer id={match.params.id} />
  </div>
);
export default MenuItemPage;
