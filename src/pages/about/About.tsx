import React from "react";

import bg from "../../assets/about/about-bg.png";
import Banner from "../../components/general/Banner/Banner";
import TwoColumnsBlock from "../../components/general/TwoColumnsBlock/TwoColumnsBlock";
import cookImg from "../../assets/about/cook.png";
import rosemary from "../../assets/about/rosemary.png";
import tomatoBg from "../../assets/about/tomato.png";
import cooking from "../../assets/about/cooking.png";
import Typography from "../../components/general/Typography/Typography";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import { topEmployees } from "../../static/restaurantData";
import DescriptionsBlock from "../../components/general/DescriptionsBlock/DescriptionsBlock";
import VideoSection from "../../components/general/VideoSection/VideoSection";

import classes from "./About.module.css";

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
      <section>
        <VideoSection />
      </section>
      <section
        style={{ backgroundImage: `url(${rosemary})` }}
        className={classes.sectionBg}
      >
        <h2 className="text-black text-centered">Sophisticated Process</h2>
        <TwoColumnsBlock
          alignItems="center"
          imgPosition="left"
          altImage="cook"
          image={cooking}
        >
          <Typography
            fontFamily="secondary"
            fontColor="black"
            fontSize="xl"
            bold={true}
          >
            01.Slice
          </Typography>
          <Typography
            fontFamily="primary"
            fontColor="primary"
            fontSize="sm"
            bold={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
          </Typography>
        </TwoColumnsBlock>
      </section>
      <ReservationsForm />
    </div>
  );
};

export default About;
