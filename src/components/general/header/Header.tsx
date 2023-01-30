import React from 'react';
import classes from './Header.module.css';
import HamburgerMenuIcon from '../HamburgerMenuIcon/HamburgerMenuIcon';
import Logo from '../../../assets/general/logo.png';
import Button from '../Button/Button';

import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onMenuOpen: () => void;
  displayHeader: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuOpen, displayHeader }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservations');
  };

  return (
    <div className={` ${displayHeader ? '' : 'hidden'}  ${classes.container}`}>
      <div className={classes.innerContainer}>
        <div className={classes.headerPart}>
          <img src={Logo} className={classes.logo} alt='Food Zero' />
          <HamburgerMenuIcon onClick={onMenuOpen} />
        </div>
        <div className={classes.headerPart}>
          <a href='tel:+86852346000' className={classes.phone}>
            +86 852 346 000
          </a>
          <Button
            btnText='Reservations'
            btnStyle='white'
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
