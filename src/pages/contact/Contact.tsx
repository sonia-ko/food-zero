import React from "react";
import Banner from "../../components/general/Banner/Banner";
import TwoColumnsBlock from "../../components/general/TwoColumnsBlock/TwoColumnsBlock";
import bg from "../../assets/contact/contacts-bg.png";
import garden from "../../assets/contact/garden.png";
import orange from "../../assets/contact/orange.png";
import Typography from "../../components/general/Typography/Typography";
import table from "../../assets/contact/table.png";
import Button from "../../components/general/Button/Button";
import RegistrationForm from "../../components/general/Form/RegistrationForm/RegistrationForm";

const Contact: React.FC = () => {
  return (
    <div>
      <Banner
        showedOpenHours={true}
        image={bg}
        title="Get in Touch"
        description="The freshest ingredients for you every day"
      />

      <TwoColumnsBlock
        alignItems="end"
        altImage="A table"
        bgImage={orange}
        image={table}
      >
        <Typography
          fontFamily="secondary"
          fontSize="md"
          fontColor="primary"
          bold={true}
        >
          <>
            We can be contacted via email{" "}
            <a className="text-light" href="mailto:info@foodzero.com">
              info@foodzero.com
            </a>{" "}
            or telephone on{" "}
            <a className="text-light" href="tel:86852346000">
              +86 852 346 000
            </a>
          </>
        </Typography>
      </TwoColumnsBlock>

      <TwoColumnsBlock imgPosition="right" altImage="A table" image={garden}>
        <Typography
          fontFamily="secondary"
          fontSize="md"
          fontColor="primary"
          bold={true}
        >
          <>We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</>
        </Typography>
        <br />
        <Button
          onClick={() => {}}
          btnCentered={false}
          btnText="View in maps"
          btnStyle="black"
        />
      </TwoColumnsBlock>

      <RegistrationForm />
    </div>
  );
};

export default Contact;
