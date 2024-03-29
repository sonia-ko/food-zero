import React from "react";
import classes from "./Home.module.css";
import EnergyBalance from "../../components/home/EnergyBalance/EnergyBalance";
import HomeMenu from "../../components/home/HomeMenu/HomeMenu";
import HomeMainFood from "../../components/home/HomeMainFood/HomeMainFood";
import HomeFeedbacks from "../../components/home/HomeFeedbacks/HomeFeedbacks";
import HomeCook from "../../components/home/HomeCook/HomeCook";
import HomeBanner from "../../components/home/HomeBanner/HomeBanner";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import TopDishes from "../../components/home/TopDishes/TopDishes";
import OurFeatures from "../../components/home/OurFeautures/OurFeatures";

//comment
const Home: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <HomeMainFood />
      <HomeMenu />
      <HomeCook />
      <OurFeatures />
      <TopDishes />
      <ReservationsForm />
      <EnergyBalance />
      <HomeFeedbacks />
    </>
  );
};

export default Home;
