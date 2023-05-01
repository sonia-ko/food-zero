import React from "react";
import classes from "./ColumnWithImage.module.css";
import Typography from "../../general/Typography/Typography";
import HeadingWithText from "../../general/HeadingWithText/HeadingWithText";

interface ColumnWithImageProps {
  title: string;
  text: string;
  image: string;
  imgTop?: boolean;
  alignContent?: "center" | "start";
}

const ColumnWithImage: React.FC<ColumnWithImageProps> = ({
  title,
  text,
  image,
  imgTop = true,
  alignContent = "start",
}) => {
  return (
    <div
      className={`${classes.container} ${
        imgTop ? classes.topImg : classes.bottomImg
      }`}
    >
      <HeadingWithText text={text} title={title} />
      <img src={image} alt={title} />
    </div>
  );
};

export default ColumnWithImage;
