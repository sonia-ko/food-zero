import React from "react";
import classes from "./CourseCard.module.css";

import arrow from "../../../assets/general/arrow-right-black.png";

interface CourseCardProps {
  itemName: string;
  handleClick: () => void;
  imgSrc: string;
  imgAlt?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  itemName,
  handleClick,
  imgSrc,
  imgAlt = "Menu Item",
}) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={imgSrc} alt={imgAlt} />

      <button
        type="button"
        className={classes.button}
        onClick={() => {
          console.log("button clicked");
        }}
      >
        <span className={classes.itemName}>{itemName}</span>
        <img
          className={classes.arrow}
          src={arrow}
          alt="an arrow to follow the link"
        />
      </button>
    </div>
  );
};

export default CourseCard;
