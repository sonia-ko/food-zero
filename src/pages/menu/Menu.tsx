import React from "react";
import ReservationsForm from "../../components/home/ReservationsForm/ReservationsForm";
import WillBeSoon from "../../components/general/WillBeSoon/WillBeSoon";

const Menu: React.FC = () => {
  return (
    <section>
      <WillBeSoon pageName="Menu" />
      <ReservationsForm />
    </section>
  );
};

export default Menu;
