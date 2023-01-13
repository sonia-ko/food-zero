import React from 'react';
import classes from './DishPicture.module.css';

interface DishPictureProps {
  imageSrc: string;
  imageAlt?: string;
  text?: string;
}

const DishPicture: React.FC<DishPictureProps> = ({
  imageSrc,
  text = 'Fashion',
  imageAlt = 'Photo of the dish',
}) => {
  return (
    <div className={classes.container}>
      <img className={classes.picture} src={imageSrc} alt={imageAlt} />
      <div className={classes.textBox}>{text}</div>
    </div>
  );
};

export default DishPicture;
