import React from 'react';
import classes from './HomeMainFood.module.css';

import dish from '../../../assets/home/seafood.png';
import spices from '../../../assets/home/spices.png';

const HomeMainFood: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={`container ${classes.innerContainer}`}>
        <div className={classes.dishSection}>
          <img className='fullWidthImage' src={dish} alt='Seafood dish' />
          <h3 className={classes.title}>Start to plan your diet today</h3>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
        </div>
        <div className={classes.spicesSection}>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            congue arcu
          </p>
          <img className='fullWidthImage' src={spices} alt='Spices' />
        </div>
      </div>
    </div>
  );
};

export default HomeMainFood;
