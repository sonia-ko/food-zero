import React from "react";
import Banner from "../../components/general/Banner/Banner";
import bg from "../../assets/contact/contacts-bg.png";

const Contact: React.FC = () => {
  return (
    <section>
      <Banner
        showedOpenHours={true}
        image={bg}
        title="Get in Touch"
        description="The freshest ingredients for you every day"
      />
    </section>
  );
};

export default Contact;
