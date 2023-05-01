import React from "react";

//components
import Banner from "../../components/sections/Banner/Banner";
import TwoColumnsBlock from "../../components/sections/TwoColumnsBlock/TwoColumnsBlock";
import Typography from "../../components/general/Typography/Typography";
import ReservationsForm from "../../components/general/Form/ReservationsForm/ReservationsForm";
import DescriptionsBlock from "../../components/general/DescriptionsBlock/DescriptionsBlock";
import VideoSection from "../../components/sections/VideoSection/VideoSection";
import HeadingWithText from "../../components/general/HeadingWithText/HeadingWithText";
import ColumnsWithImagesBlock from "../../components/sections/ColumnsWithImagesBlock/ColumnsWithImagesBlock";

// images
import bg from "../../assets/about/about-bg.png";
import cookImg from "../../assets/about/cook.png";
import rosemary from "../../assets/about/rosemary.png";
import rosemaryBgLeft from "../../assets/about/rosemary-bg-left.png";
import meat from "../../assets/about/meat.png";
import grill from "../../assets/about/grill.png";
import tomatoBg from "../../assets/about/tomato.png";
import cooking from "../../assets/about/cooking.png";

//static data
import { topEmployees } from "../../static/restaurantData";

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
        <HeadingWithText
          title="Our Story"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
          id penatibus imperdiet. Turpis egestas ultricies purus auctor
          tincidunt lacus nunc."
        />
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
        <VideoSection
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          title="It looks delicious"
          video="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        />
      </section>
      <div
        style={{ backgroundImage: `url(${rosemary})` }}
        className={classes.sectionBg}
      >
        <h2 className="text-black my-large text-centered">
          Sophisticated Process
        </h2>
        <TwoColumnsBlock
          alignItems="center"
          imgPosition="left"
          altImage="cook"
          image={cooking}
        >
          <HeadingWithText
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam."
            title="01.Slice"
          />
        </TwoColumnsBlock>
      </div>
      <ColumnsWithImagesBlock
        bgImage={rosemaryBgLeft}
        columns={[
          {
            title: "02.Pickled",
            img: meat,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
          },
          {
            title: "03.Bake",
            img: grill,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. ",
          },
        ]}
      />

      <ReservationsForm />
    </div>
  );
};

export default About;
