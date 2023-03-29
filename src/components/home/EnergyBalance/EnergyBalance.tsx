import React from "react";
import classes from "./EnergyBalance.module.css";

import CourseCard from "./CourseCard";
import starters from "../../../assets/home/starters.png";
import mains from "../../../assets/home/mains.png";
import soups from "../../../assets/home/soups.png";

const EnergyBalance: React.FC = () => {
  return (
    <div className="container">
      <div className={classes.container}>
        <h2 className={classes.title}>Calories Energy Balance</h2>
        <p className={classes.pararaph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className={classes.imagesContainer}>
          <CourseCard
            handleClick={() => {
              console.log("clicked");
            }}
            imgSrc={starters}
            itemName="Starters"
            imgAlt="Starters"
          />

          <CourseCard
            handleClick={() => {
              console.log("clicked");
            }}
            imgSrc={mains}
            itemName="Mains"
            imgAlt="mains"
          />

          <CourseCard
            handleClick={() => {
              console.log("clicked");
            }}
            imgSrc={soups}
            itemName="Soups"
            imgAlt="soups"
          />
        </div>
      </div>
    </div>
  );
};

export default EnergyBalance;
