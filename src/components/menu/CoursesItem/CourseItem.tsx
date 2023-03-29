import { MenuItemProps } from "../../general/MenuItem/MenuItem";
import classes from "./CourseItem.module.css";
import MenuItem from "../../general/MenuItem/MenuItem";

export interface CourseMenuItemProps {
  title: string;
  description: string;
  backgroundImg: string;
  backgroundPosition?: string;
  courseImage: string;
  items: MenuItemProps[];
  imagePosition?: string;
}

const CourseMenuItem: React.FC<CourseMenuItemProps> = ({
  title,
  description,
  backgroundImg,
  backgroundPosition = "center",
  courseImage,
  imagePosition = "left",
  items,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPositionY: "top",
        backgroundPositionX: backgroundPosition,
      }}
      className={`${classes.container}  `}
    >
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      <div className={`container ${classes.card}`}>
        <img
          className={`${imagePosition === "right" && classes.imgRight} ${
            classes.img
          }`}
          src={courseImage}
          alt={title}
        />
        <div className={classes.dishes}>
          {items.map((el) => {
            return (
              <MenuItem
                key={el.mealName}
                mealdescription={el.mealdescription}
                price={el.price}
                mealName={el.mealName}
                width="full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseMenuItem;
