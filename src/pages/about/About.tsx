import React from "react";

import bg from "../../assets/about/about-bg.png";
import Banner from "../../components/general/Banner/Banner";
import TwoColumnsBlock from "../../components/general/TwoColumnsBlock/TwoColumnsBlock";
import cookImg from "../../assets/about/cook.png";
import tomatoBg from "../../assets/about/tomato.png";
import Typography from "../../components/general/Typography/Typography";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import { topEmployees } from "../../static/restaurantData";
import DescriptionsBlock from "../../components/general/DescriptionsBlock/DescriptionsBlock";

const About: React.FC = () => {
  return (
    <div>
      <Banner
        textPosition="right"
        image={bg}
        title="Who We Are"
        description="The most important thing for us is to give you the comfortable dining experience"
      />
      <TwoColumnsBlock
        alignItems="end"
        imgPosition="right"
        altImage="cook"
        bgImage={tomatoBg}
        image={cookImg}
      >
        <h2 className="mb-sm">Our Story</h2>
        <Typography
          fontFamily="primary"
          fontColor="primary"
          fontSize="md"
          bold={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc.
        </Typography>
      </TwoColumnsBlock>

      <section>
        {topEmployees.map((el, i) => {
          return (
            <DescriptionsBlock
              description={el.description}
              image={el.image}
              key={el.title}
              subtitle={el.name}
              title={el.title}
              style={i % 2 == 0 ? "imgLeft" : "imgRight"}
            />
          );
        })}
      </section>
      <ReservationsForm />
    </div>
  );
};

export default About;
