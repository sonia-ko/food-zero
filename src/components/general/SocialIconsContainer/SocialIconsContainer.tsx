import React from 'react';
import classes from './SocialIconsContainer.module.css';

import IconYouTube from '../Icons/IconYouTube';
import IconTwitter from '../Icons/IconTwitter';
import IconFacebook from '../Icons/IconFacebook';
import IconInstagram from '../Icons/IconInstagram';

const SocialIconsContainer: React.FC = () => {
  return (
    <div className={classes.icons}>
      <a rel='noreferrer' target='_blank' href='https://instagram.com/'>
        <IconInstagram />
      </a>
      <a rel='noreferrer' target='_blank' href='https://twitter.com/'>
        <IconTwitter />
      </a>
      <a rel='noreferrer' target='_blank' href='https://facebook.com/'>
        <IconFacebook />
      </a>
      <a rel='noreferrer' target='_blank' href='https://youtube.com/'>
        <IconYouTube />
      </a>
    </div>
  );
};

export default SocialIconsContainer;
