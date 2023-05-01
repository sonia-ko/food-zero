import React from "react";
import { useState, useEffect } from "react";
import classes from "./ColumnsWithImagesBlock.module.css";
import ColumnWithImage from "./ColumnWithImage";

interface ColumnProp {
  title: string;
  img: string;
  text: string;
}

interface ColumnsWithImagesBlockProps {
  bgImage?: string;
  columns: ColumnProp[];
}

const ColumnsWithImagesBlock: React.FC<ColumnsWithImagesBlockProps> = ({
  bgImage = "",
  columns,
}) => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  console.log(vw);
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`${classes.innerContainer} container`}>
        {columns.map((column, i) => {
          const order = i % 2 ? i - 1 : i + 1;
          return (
            <div
              key={column.title}
              style={{ order: `${isMobile ? "initial" : order}` }}
              className={classes.columnContainer}
            >
              <ColumnWithImage
                text={column.text}
                image={column.img}
                title={column.title}
                imgTop={i % 2 ? false : true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnsWithImagesBlock;
