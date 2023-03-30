import React from "react";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import bannerImg from "../../assets/menu/menu-page.png";
import Banner from "../../components/general/Banner/Banner";
import avocado from "../../assets/menu/avocado-bg.png";
import blueberry from "../../assets/menu/blueberry-bg.png";
import drinks from "../../assets/menu/drinks-example.png";
import mains from "../../assets/menu/mains-example.png";
import starters from "../../assets/menu/starters-example.png";
import MenuContainer from "../../components/menu/MenuContainer/MenuContainer";

const menuItems = [
  {
    title: "Starters",
    description:
      "This is a section of your menu. Give your section a brief description",
    backgroundImg: blueberry,
    imagePosition: "left",
    backgroundPosition: "right",
    courseImage: starters,
    items: [
      {
        price: 20,
        mealName: "Grilled Okra and Tomatoes ",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 18,
        mealName: "Cucumber Salad",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 12,
        mealName: " Basil Pancakes ",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  {
    title: "Mains",
    description:
      "This is a section of your menu. Give your section a brief description",
    backgroundImg: "",
    imagePosition: "right",
    backgroundPosition: "",
    courseImage: mains,
    items: [
      {
        price: 20,
        mealName: "Deep Sea Snow White Cod Fillet",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 22,
        mealName: "Steak With Rosemary Butter",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 20,
        mealName: "Steaks with Grilled Kimchi",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
  {
    title: "Pastries & Drinks",
    description:
      "This is a section of your menu. Give your section a brief description",
    backgroundImg: avocado,
    imagePosition: "left",
    backgroundPosition: "center",
    courseImage: drinks,
    items: [
      {
        price: 158,
        mealName: "Wine Pairing",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 168,
        mealName: "Natural Wine Pairing",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
      {
        price: 90,
        mealName: "Whisky Flyer",
        mealdescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      },
    ],
  },
];
const Menu: React.FC = () => {
  return (
    <section>
      <Banner
        description="The freshest ingredients for you every day"
        title="View Our New Menu"
        image={bannerImg}
      />
      <MenuContainer items={menuItems} />
      <ReservationsForm />
    </section>
  );
};

export default Menu;
