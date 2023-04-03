import React from "react";
import classes from "./Typography.module.css";

interface TypographyProps {
  text?: string;
  bold?: boolean;
  fontSize: "xs" | "sm" | "md" | "lg" | "xl";
  fontColor?: "primary" | "secondary" | "white" | "green";
  fontFamily?: "primary" | "secondary";
  children: string | JSX.Element | JSX.Element[];
  classN?: string;
  align?: "left" | "center" | "right";
}

const Typography: React.FC<TypographyProps> = ({
  text = "",
  bold = false,
  fontSize,
  classN,
  fontColor = "primary",
  fontFamily = "primary",
  children,
  align = "left",
}) => {
  return (
    <p
      className={`
      ${classN}
      ${classes["align-" + align]}
      ${classes["family-" + fontFamily]} ${bold && classes.bold} 
      ${classes["color-" + fontColor]} ${classes[fontSize]}    `}
    >
      {children}
    </p>
  );
};

export default Typography;
