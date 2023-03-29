import React from "react";
import classes from "./HomeMenu.module.css";

import background from "../../../assets/home/leaves.png";
import MenuItem from "../../general/MenuItem/MenuItem";

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
          <MenuItem
            mealdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price={20}
            mealName="Deep Sea Snow White Cod Fillet"
          />

          <MenuItem
            mealdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price={22}
            mealName="Steak With Rosemary Butter"
          />

          <MenuItem
            mealdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price={18}
            mealName="Cucumber Salad"
          />

          <MenuItem
            mealdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price={90}
            mealName="Natural Wine Pairing"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
