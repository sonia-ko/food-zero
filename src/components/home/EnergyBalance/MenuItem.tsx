import React from 'react';
import classes from './MenuItem.module.css';

import arrow from '../../../assets/general/arrow-right-black.png';

interface MenuItemProps {
  itemName: string;
  handleClick: () => void;
  imgSrc: string;
  imgAlt?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  itemName,
  handleClick,
  imgSrc,
  imgAlt = 'Menu Item',
}) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imgSrc} alt={imgAlt} />

      <button
        type='button'
        className={classes.button}
        onClick={() => {
          console.log('button clicked');
        }}
      >
        <span className={classes.itemName}>{itemName}</span>
        <img
          className={classes.arrow}
          src={arrow}
          alt='an arrow to follow the link'
        />
      </button>
    </div>
  );
};

export default MenuItem;
