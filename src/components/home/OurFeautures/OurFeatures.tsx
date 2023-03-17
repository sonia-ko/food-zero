import React from "react";
import classes from "./OurFeatures.module.css";
import Feature from "./Feature";

import lemonIcon from "../../../assets/home/lemon.png";
import carrotIcon from "../../../assets/home/carrot.png";
import fishIcon from "../../../assets/home/fish.png";

const OurFeatures: React.FC = () => {
  return (
    <div className="container">
      <div className={classes.container}>
        <Feature
          iconSrc={fishIcon}
          iconAlt="Fish icon"
          heading="Premium Quality"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
        />
        <Feature
          iconSrc={carrotIcon}
          iconAlt="Carrot icon"
          heading="Seasonal Vegetables"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
        />
        <Feature
          iconSrc={lemonIcon}
          iconAlt="Lemon icon"
          heading="The Freshest Fruits"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
        />
      </div>
    </div>
  );
};

export default OurFeatures;
