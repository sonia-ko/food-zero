import React from 'react';
import classes from './HamburgerMenuIcon.module.css';

interface HamburgerMenuIconProps {
  onClick: () => void;
}
const HamburgerMenuIcon: React.FC<HamburgerMenuIconProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.container}>
      <div className={classes.menuPart}></div>
      <div className={classes.menuPart}></div>
      <div className={classes.menuPart}></div>
    </button>
  );
};

export default HamburgerMenuIcon;
