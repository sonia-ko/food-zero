import React from "react";
import classes from "./Button.module.css";

import arrowAfterIcon from "../../../assets/general/icon-arrow-right.png";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  btnStyle: "white" | "green" | "transparent" | "lightgreen" | "black";
  arrowAfter?: boolean;
  btnCentered?: boolean;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick,
  btnStyle,
  arrowAfter = false,
  btnCentered = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${btnCentered ? classes.centered : ""} ${classes[btnStyle]}`}
    >
      <span className={classes.btnText}>{btnText}</span>
      {arrowAfter ? (
        <img
          className={classes.arrowImg}
          src={arrowAfterIcon}
          alt="Arrow to follow the link"
        />
      ) : null}
    </button>
  );
};

export default Button;
