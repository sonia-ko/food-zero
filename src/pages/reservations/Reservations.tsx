import React from "react";
import Banner from "../../components/sections/Banner/Banner";
import dish from "../../assets/reservations/dish.png";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import ReservationsContainer from "../../components/reservations/ReservationsContainer/ReservationsContainer";

const Reservations: React.FC = () => {
  return (
    <>
      <Banner
        description="Make a new reservation with us"
        title="Your reservations"
        image={dish}
        bannerSize="sm"
      />
      <ReservationsContainer />
      <ReservationsForm />
    </>
  );
};

export default Reservations;
