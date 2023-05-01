import React from "react";
import Typography from "../../general/Typography/Typography";

interface HeadingWithTextProps {
  title: string;
  text: string;
}

const HeadingWithText: React.FC<HeadingWithTextProps> = ({ title, text }) => {
  return (
    <>
      <Typography
        fontFamily="secondary"
        fontColor="black"
        fontSize="xl"
        bold={true}
      >
        {title}
      </Typography>
      <Typography
        fontFamily="primary"
        fontColor="gray"
        fontSize="sm"
        bold={false}
      >
        {text}
      </Typography>
    </>
  );
};

export default HeadingWithText;
