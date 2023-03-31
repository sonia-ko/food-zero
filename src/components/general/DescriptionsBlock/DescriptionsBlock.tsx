import React from "react";
import classes from "./DescriptionsBlock.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface DescriptionsBlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
const DescriptionsBlock: React.FC<DescriptionsBlockProps> = ({
  title,
  subtitle,
  description,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.container}`}>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default DescriptionsBlock;
