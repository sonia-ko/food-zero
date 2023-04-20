import React from "react";
import classes from "./WillBeSoon.module.css";
import Button from "../../general/Button/Button";
import { useNavigate } from "react-router-dom";

interface WillBeSoonProps {
  pageName: string;
}
const WillBeSoon: React.FC<WillBeSoonProps> = ({ pageName }) => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.container}`}>
      <div className={classes.innerContainer}>
        <p className={classes.text}>Page {pageName} will be there soon! </p>
        <Button
          onClick={() => navigate("/")}
          btnCentered
          btnText="Back to home"
          btnStyle="green"
        />
      </div>
    </div>
  );
};

export default WillBeSoon;
