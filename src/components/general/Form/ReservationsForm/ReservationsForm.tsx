import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "./ReservationsForm.module.css";

import {
  availableHours,
  numberOfPersonsAvailable,
} from "../../../../static/restaurantData";

import Button from "../../Button/Button";
import SubmissionConfirmation from "../SuccessMessage/SubmissionConfirmation";
import Select from "../Select/Select";
import DatePickerInput from "../DatePicker/DatePicker";

import { setReservations } from "../../../../store/reducers/reservationsSlice";

const ReservationsForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formOpened, setFormOpened] = useState(true);
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
    event.preventDefault();
    setFormOpened(false);
    console.log({
      time: selectedTime,
      numGuests: selectedNumberGuests,
      date: reservationDate?.toISOString(),
    });
    console.log(typeof reservationDate);
    const data = {
      date: reservationDate?.toISOString(),
      time: selectedTime,
      numOfPersons: selectedNumberGuests,
      additionalInfo: {
        firstName: "Added",
        lastName: "Now",
        email: "john.snow@gmail.com",
        phone: "+888 888 888",
      },
    };
    dispatch(setReservations(data));
  };

  const makeNewReservation = () => {
    setFormOpened(true);
  };
  return (
    <div className={classes.container}>
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

export default ReservationsForm;
