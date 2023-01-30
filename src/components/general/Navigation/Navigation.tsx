import React from 'react';
import { Link } from 'react-router-dom';

import { websiteNavigation } from '../../../static/websiteData';

import classes from './Navigation.module.css';
import {
  phoneNumber,
  email,
  address,
  city,
  state,
  zipCode,
} from '../../../static/restaurantData';
import SocialIconsContainer from '../SocialIconsContainer/SocialIconsContainer';

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
        <div className={classes.buttonContainer}>
          <button className={classes.button} onClick={onNavigationClose}>
            <img
              className={classes.closeBtnIcon}
              src={closeMenuBtn}
              alt='Close Menu'
            />
          </button>
        </div>
        <nav className={classes.navigationContainer}>
          <ul className={classes.navigationList}>
            {websiteNavigation.map((item) => {
              return (
                <li
                  key={`navigation-${item.title}`}
                  className={classes.listItem}
                >
                  <Link onClick={onNavigationClose} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={classes.contactsContainer}>
          <h3 className={`${classes.contactTitle} text-medium`}>Contact</h3>
          <p className={classes.contacts}>
            <span className='pt-medium'>{phoneNumber}</span>
            <span className='pb-small'>{email}</span>

            <span>{address}</span>
            <span className='pb-small'>
              {city}, {state}, {zipCode}
            </span>
          </p>
          <SocialIconsContainer />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
