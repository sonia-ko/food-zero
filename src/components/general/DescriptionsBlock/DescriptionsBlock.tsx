import React from "react";
import classes from "./DescriptionsBlock.module.css";
import Typography from "../Typography/Typography";

interface DescriptionsBlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  style: "imgRight" | "imgLeft";
}

const DescriptionsBlock: React.FC<DescriptionsBlockProps> = ({
  title,
  subtitle,
  description,
  image,
  style,
}) => {
  console.log(style);
  return (
    <div className={`${classes.container} container`}>
      <div
        className={`${classes.innerContainer} ${
          style === "imgLeft" ? classes.imgLeft : classes.imgRight
        }  `}
      >
        <div className={classes.content}>
          <h3 className={classes.title}>{title}</h3>
          <Typography align="center" classN={classes.subtitle} fontSize="sm">
            {subtitle}
          </Typography>
          <img src={image} alt={title} />
        </div>
        <Typography classN={classes.description} fontSize="sm">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default DescriptionsBlock;
