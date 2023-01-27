import React from 'react';
import classes from './Copyright.module.css';

import { copyrightText } from '../../../static/websiteData';
import IconYouTube from '../Icons/IconYouTube';
import IconTwitter from '../Icons/IconTwitter';
import IconFacebook from '../Icons/IconFacebook';
import IconInstagram from '../Icons/IconInstagram';

const Copyright: React.FC = () => {
  return (
    <div className={`${classes.container}`}>
      <div className={`container ${classes.innerContainer}`}>
        <p className={classes.text}>{copyrightText}</p>
        <div className={classes.icons}>
          <IconInstagram />
          <IconTwitter />
          <IconFacebook />
          <IconYouTube />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
