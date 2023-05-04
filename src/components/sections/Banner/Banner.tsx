import React from "react";
import OpenHours from "./OpenHours";
import classes from "./Banner.module.css";

interface BannerProps {
  image: string;
  title: string;
  description: string;
  showedOpenHours?: boolean;
  textPosition?: "right" | "left";
  bannerSize?: "md" | "sm";
}

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  description,
  showedOpenHours = false,
  textPosition = "left",
  bannerSize = "md",
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={`${classes.container} ${
        bannerSize === "sm" ? classes.containerMd : ""
      }`}
    >
      <div
        className={`${
          textPosition === "right" ? classes.textRight : classes.textLeft
        } ${classes.innerContainer} container`}
      >
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.paragraph}>{description}</p>
      </div>
      {showedOpenHours && <OpenHours />}
    </section>
  );
};

export default Banner;
