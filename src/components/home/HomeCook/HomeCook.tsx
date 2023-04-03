import React from "react";
import classes from "./HomeCook.module.css";

import cook from "../../../assets/home/cooking.png";
import leaf1 from "../../../assets/home/leaf.png";
import leaf2 from "../../../assets/home/leaf-left.png";

const HomeCook: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={`container ${classes.innerContainer}`}>
        <div className={classes.columnLeft}>
          <img className={classes.leafLeft} src={leaf2} alt="Leaf" />
          <img className={classes.cookImg} src={cook} alt="Cook" />
        </div>
        <div className={classes.columnRight}>
          <h2>Excellent cook</h2>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </p>
          <img className={classes.leafRight} src={leaf1} alt="Leaf" />
        </div>
      </div>
    </section>
  );
};

export default HomeCook;
