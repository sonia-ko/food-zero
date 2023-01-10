import React from 'react';
import classes from './HomeMenu.module.css';

import background from '../../../assets/home/leaves.png';

const HomeMenu: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url("${background}")`,
      }}
      className={classes.container}
    >
      <div className={`container ${classes.innerContainer}`}>
        <div className={classes.headingSection}>
          <h2>Our Menu</h2>
          <p className={classes.paragraph}>
            This is a section of your menu. Give your section a brief
            description
          </p>
        </div>

        <div className={classes.pricesSection}>
          <div className={classes.pricesItem}>
            <p className={classes.price}>$20</p>
            <p className={classes.mealName}>Deep Sea Snow White Cod Fillet</p>
            <p className={classes.mealDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={classes.pricesItem}>
            <p className={classes.price}>$22</p>
            <p className={classes.mealName}>Steak With Rosemary Butter</p>
            <p className={classes.mealDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={classes.pricesItem}>
            <p className={classes.price}>$18</p>
            <p className={classes.mealName}>Cucumber Salad</p>
            <p className={classes.mealDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className={classes.pricesItem}>
            <p className={classes.price}>$90</p>
            <p className={classes.mealName}>Natural Wine Pairing</p>
            <p className={classes.mealDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
