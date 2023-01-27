import React from 'react';
import classes from './SocialIconsContainer.module.css';

import IconYouTube from '../Icons/IconYouTube';
import IconTwitter from '../Icons/IconTwitter';
import IconFacebook from '../Icons/IconFacebook';
import IconInstagram from '../Icons/IconInstagram';

const SocialIconsContainer: React.FC = () => {
  return (
    <div className={classes.icons}>
      <IconInstagram />
      <IconTwitter />
      <IconFacebook />
      <IconYouTube />
    </div>
  );
};

export default SocialIconsContainer;
