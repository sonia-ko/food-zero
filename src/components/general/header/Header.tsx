import React from 'react';
import classes from './Header.module.css';
import HamburgerMenuIcon from '../HamburgerMenuIcon/HamburgerMenuIcon';
import Logo from '../../../assets/general/logo.png';
import Button from '../Button/Button';

interface HeaderProps {
  onMenuOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  return (
    <div className={`  ${classes.container}`}>
      <div className={classes.innerContainer}>
        <div className={classes.headerPart}>
          <img src={Logo} className={classes.logo} alt='Food Zero' />
          <HamburgerMenuIcon onClick={onMenuOpen} />
        </div>
        <div className={classes.headerPart}>
          <div className={classes.phone}>+86 852 346 000</div>
          <Button btnText='Reservations' btnStyle='white' onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Header;
