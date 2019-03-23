import React from 'react';

const MenuCard = ({ name, image, price }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}</p>
    <div className="action" />
    {/* <button type="button" onClick={onShowMoreInfo}>
      Больще информации
    </button>
    <button type="button" onClick={onDelete}>
      Удалить
    </button> */}
  </div>
);
export default MenuCard;
