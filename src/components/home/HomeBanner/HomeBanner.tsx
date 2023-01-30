import React from 'react';

import classes from './HomeBanner.module.css';

import mainPicture from '../../../assets/home/plate-with-meal.png';
import smallPicture1 from '../../../assets/home/spices1.png';
import smallPicture2 from '../../../assets/home/spices2.png';
import smallPicture3 from '../../../assets/home/spices3.png';

const HomeBanner: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={`container ${classes.innerContainer}`}>
        <h1 className={classes.mobileHeading}>
          Healthy Eating is important part of lifestyle
        </h1>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>
            Healthy Eating is important part of lifestyle
          </h1>
          <p className={classes.homeParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
          <p className={classes.scrollParagraph}>Scroll</p>
        </div>
        <img
          src={mainPicture}
          className={classes.mainPicture}
          alt='Delicious meal'
        />
        <div className={classes.images}>
          <img className={classes.spicesImg} src={smallPicture1} alt='Spices' />
          <img className={classes.spicesImg} src={smallPicture2} alt='Spices' />
          <img className={classes.spicesImg} src={smallPicture3} alt='Spices' />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
