import React from "react";
import classes from "./HomeMenuItem.module.css";

interface HomeMenuItemProps {
  price: number;
  mealName: string;
  mealdescription: string;
}

const HomeMenuItem: React.FC<HomeMenuItemProps> = ({
  price,
  mealName,
  mealdescription,
}) => {
  return (
    <div className={classes.pricesItem}>
      <p className={classes.price}>${price}</p>
      <p className={classes.mealName}>{mealName}</p>
      <p className={classes.mealDescription}>{mealdescription}</p>
    </div>
  );
};

export default HomeMenuItem;
