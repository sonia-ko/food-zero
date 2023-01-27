import React from 'react';
import classes from './Navigation.module.css';
import {
  phoneNumber,
  email,
  address,
  city,
  state,
  zipCode,
} from '../../../static/restaurantData';

import background from '../../../assets/general/menu-background.png';
import closeMenuBtn from '../../../assets/general/close-menu-btn.png';

interface NavigationProps {
  onNavigationClose: () => void;
}
const Navigation: React.FC<NavigationProps> = ({ onNavigationClose }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={classes.container}
    >
      <div className={classes.innerContainer}>
        <div>
          <button onClick={onNavigationClose}>
            <img src={closeMenuBtn} alt='Close Menu' />
          </button>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <h3>Contact</h3>
          <p>
            <span>{phoneNumber}</span>
            <span>{email}</span>
            <span>{address}</span>
            <span>{address}</span>
            <span>
              {city}, {state}, {zipCode}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
