import React from "react";
import classes from "./MenuItem.module.css";

export interface MenuItemProps {
  price: number;
  mealName: string;
  mealdescription: string;
  width?: "full" | "default";
}

const MenuItem: React.FC<MenuItemProps> = ({
  price,
  mealName,
  mealdescription = "default",
  width,
}) => {
  return (
    <div
      className={width === "full" ? classes.pricesItemFull : classes.pricesItem}
    >
      <p className={classes.price}>${price}</p>
      <p className={classes.mealName}>{mealName}</p>
      <p className={classes.mealDescription}>{mealdescription}</p>
    </div>
  );
};

export default MenuItem;
