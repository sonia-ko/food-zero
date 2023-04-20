import React from "react";
import classes from "./TwoColumnsBlockWithImages.module.css";

interface TwoColumnsBlockWithImagesProps {
  image: string;
  bgImage?: string;
  altImage: string;
  children: string | JSX.Element | JSX.Element[];
  imgPosition?: string;
  alignItems?: "center" | "end";
}

const TwoColumnsBlockWithImages: React.FC<TwoColumnsBlockWithImagesProps> = ({
  image,
  bgImage = "",
  children,
  altImage,
  imgPosition = "left",
  alignItems = "center",
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`${classes.container}`}
    >
      <div
        className={`${classes.containerInner} container ${
          classes["align-" + alignItems]
        }`}
      >
        <img
          className={`${classes.img} ${
            imgPosition === "right" && classes.imgRight
          }`}
          src={image}
          alt={altImage}
        />
        <div className={classes.content}>{children}</div>
      </div>
    </section>
  );
};

export default TwoColumnsBlockWithImages;
