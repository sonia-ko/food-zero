import React from "react";
import classes from "./Footer.module.css";
import {
  phoneNumber,
  email,
  address,
  city,
  state,
  zipCode,
} from "../../../static/restaurantData";
import Button from "../Button/Button";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("SUbmitted");
};
const Footer: React.FC = () => {
  return (
    <footer className={`${classes.container}`}>
      <div className={`container ${classes.innerContainer}`}>
        <div className={classes.companyName}>
          Food <br /> Zero
        </div>
        <ul className={classes.companyInfo}>
          Contact
          <li className={`${classes.listItem} pt-medium`}>{phoneNumber}</li>
          <li className={`${classes.listItem} pb-small`}>{email}</li>
          <li className={classes.listItem}>{address}</li>
          <li className={classes.listItem}>
            {city}, {state}, {zipCode}
          </li>
        </ul>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <p className={classes.formTitle}>Never Miss a Recipe</p>
          <div className={classes.formInnerContainer}>
            <input
              placeholder="Email Address"
              className={classes.input}
              type="email"
            />
            <Button
              btnStyle="lightgreen"
              btnText="Subscribe"
              onClick={() => {
                console.log("clicked");
              }}
              type="submit"
            />
          </div>
          <p className={classes.formDescription}>
            Join our subscribers and get best recipe delivered each week!
          </p>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
