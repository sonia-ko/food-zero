import React from "react";
import classes from "./Banner.module.css";
import OpenHours from "./OpenHours";

interface BannerProps {
  image: string;
  title: string;
  description: string;
  showedOpenHours?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  image,
  title,
  description,
  showedOpenHours = false,
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className={classes.container}
    >
      <div className={`${classes.innerContainer} container`}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.paragraph}>{description}</p>
      </div>
      {showedOpenHours && <OpenHours />}
    </section>
  );
};

export default Banner;
