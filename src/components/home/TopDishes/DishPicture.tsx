import React from 'react';
import classes from './Feature.module.css';

interface FeatureProps {
  iconSrc: string;
  iconAlt?: string;
  heading?: string;
  text?: string;
}

const Feature: React.FC<FeatureProps> = ({
  iconSrc,
  heading,
  text,
  iconAlt,
}) => {
  return (
    <div className={classes.container}>
      <img
        className={classes.icon}
        src={iconSrc}
        alt={iconAlt ? iconAlt : 'Our features icon'}
      />
      {heading ? <p className={classes.heading}>{heading}</p> : null}
      {text ? <p className={classes.text}>{text}</p> : null}
    </div>
  );
};

export default Feature;
