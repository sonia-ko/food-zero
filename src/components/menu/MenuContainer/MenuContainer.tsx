import React from "react";
import classes from "./MenuContainer.module.css";

import { CourseMenuItemProps } from "../CoursesItem/CourseItem";
import CourseMenuItem from "../CoursesItem/CourseItem";

interface MenuContainerProps {
  items: CourseMenuItemProps[];
}

// title: string;
// description: string;
// backgroundImg: string;
// backgroundPosition?: "center" | "right";
// courseImage: string;
// items: MenuItemProps[];

const MenuContainer: React.FC<MenuContainerProps> = ({ items }) => {
  return (
    <section>
      {items.map((item) => {
        return (
          <CourseMenuItem
            key={item.title}
            imagePosition={item.imagePosition}
            items={item.items}
            courseImage={item.courseImage}
            backgroundPosition={item.backgroundPosition}
            backgroundImg={item.backgroundImg}
            description={item.description}
            title={item.title}
          />
        );
      })}
    </section>
  );
};

export default MenuContainer;
