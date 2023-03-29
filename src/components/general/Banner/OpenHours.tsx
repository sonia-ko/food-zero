import React from "react";
import classes from "./OpenHours.module.css";

const OpenHours: React.FC = () => {
  return (
    <div className={`${classes.container} `}>
      <div className={classes.openDays}>
        <p className={`text-medium ${classes.heading}`}>Open Time</p>
        <p>Sunday - Friday</p>
      </div>
      <div className={`${classes.closedHours} text-sm`}>
        <div>
          <p>Brunch</p>
          <p>11:00–12:00</p>
        </div>
        <div>
          <p>Lunch</p>
          <p>13:00–17:00</p>
        </div>
        <div>
          <p>Dinner</p>
          <p>18:00–20:00</p>
        </div>
      </div>
    </div>
  );
};

export default OpenHours;
