import React from 'react';
import classes from './Copyright.module.css';

import { copyrightText } from '../../../static/websiteData';

import SocialIconsContainer from '../SocialIconsContainer/SocialIconsContainer';

const Copyright: React.FC = () => {
  return (
    <div className={`${classes.container}`}>
      <div className={`container ${classes.innerContainer}`}>
        <p className={classes.text}>{copyrightText}</p>
        <SocialIconsContainer />
      </div>
    </div>
  );
};

export default Copyright;
