import React from 'react';

const MenuItemView = ({ ...item }) => (
  <div>
    <div>Menu Item ID: {item.id}</div>
    <img
      className="img"
      src={item.image}
      width={450}
      height={450}
      alt="блюдо"
    />
    <div>Название: {item.name}</div>
    <p>Описание: {item.description}</p>
    <p>Инградиенты: {item.ingredients}</p>
    <p>Цена: {item.price}</p>
  </div>
);

export default MenuItemView;
