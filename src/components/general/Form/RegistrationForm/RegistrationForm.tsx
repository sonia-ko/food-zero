import React from "react";
import { useState } from "react";
import classes from "./RegistrationForm.module.css";
import {
  availableHours,
  numberOfPersonsAvailable,
} from "../../../../static/restaurantData";
import Button from "../../Button/Button";
import SubmissionConfirmation from "../SuccessMessage/SubmissionConfirmation";
import Select from "../Select/Select";
import DatePickerInput from "../DatePicker/DatePicker";
import Input from "../Input/Input";
import mint from "../../../../assets/contact/mint.png";

const RegistrationForm: React.FC = () => {
  const [formOpened, setFormOpened] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTime, setSelectedTime] = useState("00:00 am");
  const [selectedNumberGuests, setSelectedNumberGuests] = useState("1 person");
  const [reservationDate, setReservationDate] = React.useState<Date | null>(
    new Date(2022, 3, 7)
  );

  const handleTimeChange = (value: string) => {
    setSelectedTime(value);
  };

  const handleGuestsChange = (value: string) => {
    setSelectedNumberGuests(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("button clicked");
    event.preventDefault();
    setFormOpened(false);
    console.log({
      time: selectedTime,
      numGuests: selectedNumberGuests,
      date: reservationDate,
    });
  };

  const makeNewReservation = () => {
    setFormOpened(true);
  };
  return (
    <div
      style={{ backgroundImage: `url(${mint})` }}
      className={classes.container}
    >
      <div className={`container ${classes.innerContainer}`}>
        <h2 className={classes.title}>Make a Reservation</h2>
        {formOpened ? (
          <>
            <p className={classes.paragraph}>Get in touch with restaurant</p>
            <form
              onSubmit={handleSubmit}
              className={classes.formContainer}
              action="#"
            >
              <div className={classes.form}>
                <Input
                  onChange={(value: string) => {
                    setFirstName(value);
                  }}
                  value={firstName}
                  inputType="text"
                  placeHholder="First Name"
                />

                <Input
                  onChange={(value: string) => {
                    setLastName(value);
                  }}
                  value={lastName}
                  inputType="text"
                  placeHholder="Last Name"
                />

                <Input
                  onChange={(value: string) => {
                    setEmail(value);
                  }}
                  value={email}
                  inputType="email"
                  placeHholder="Email"
                />

                <Input
                  onChange={(value: string) => {
                    setPhone(value);
                  }}
                  value={phone}
                  inputType="phone"
                  placeHholder="Phone"
                />

                <DatePickerInput
                  changeDate={(newValue) => setReservationDate(newValue)}
                  reservationDate={reservationDate}
                />
                <Select
                  value={selectedTime}
                  options={availableHours}
                  title="reservation-time"
                  onChangeSelect={handleTimeChange}
                />
                <Select
                  title="number-of-persons"
                  options={numberOfPersonsAvailable}
                  onChangeSelect={handleGuestsChange}
                  value={selectedNumberGuests}
                />
              </div>

              <Button
                type="submit"
                onClick={() => {}}
                btnCentered={true}
                btnStyle="green"
                btnText="Book Now"
              />
            </form>
          </>
        ) : (
          <SubmissionConfirmation
            makeNewReservation={makeNewReservation}
            status="success"
            message="Thank you for submitting the form! We will get back to you soon!"
          />
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
