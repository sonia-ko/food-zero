import React from "react";

import bg from "../../assets/about/about-bg.png";
import Banner from "../../components/general/Banner/Banner";

const About: React.FC = () => {
  return (
    <div>
      <Banner
        image={bg}
        title="Who We Are"
        description="The most important thing for us is to give you the comfortable dining experience"
      />
    </div>
  );
};

export default About;
