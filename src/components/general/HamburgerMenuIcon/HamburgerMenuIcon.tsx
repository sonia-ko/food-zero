import React from 'react';
import classes from './HamburgerMenuIcon.module.css';

const HamburgerMenuIcon: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.menuPart}></div>
      <div className={classes.menuPart}></div>
      <div className={classes.menuPart}></div>
    </div>
  );
};

export default HamburgerMenuIcon;
