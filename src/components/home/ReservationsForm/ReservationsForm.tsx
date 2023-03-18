import React from "react";
import { useState } from "react";
import classes from "./ReservationsForm.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { inherits } from "util";
import { availableHours } from "../../../static/restaurantData";
import Button from "../../general/Button/Button";

import { Theme } from "@mui/material/styles";
import createStyles from "@mui/material/styles";
import makeStyles from "@mui/material/styles";

import arrow from "../../../assets/general/arrow-down-gray.png";

const ReservationsForm: React.FC = () => {
  const [formOpened, setFormOpened] = useState(true);
  const [selectedTime, setSelectedTime] = useState("00:00 am");
  const [selectedNumberGuests, setSelectedNumberGuests] = useState(1);
  const [reservationDate, setReservationDate] = React.useState<Date | null>(
    new Date(2022, 3, 7)
  );

  const numberOfPersonsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumberGuests(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("button clicked");
    event.preventDefault();
    setFormOpened(false);
    console.log(selectedTime, selectedNumberGuests, reservationDate);
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
                <div className={classes.datePickerContainer}>
                  <LocalizationProvider
                    className={classes.inputContainer}
                    dateAdapter={AdapterDayjs}
                  >
                    <DatePicker
                      className={classes.datePicker}
                      value={reservationDate}
                      onChange={(newValue) => setReservationDate(newValue)}
                      renderInput={(params: any) => (
                        <TextField
                          sx={{
                            ".MuiInputBase-input": {
                              fontFamily: "Lato, sans-serif;",
                              lineHeight: "21px",
                              borderColor: "#b5b8af",
                            },
                          }}
                          margin="none"
                          style={{
                            width: "100%",
                            borderRadius: "0",
                          }}
                          className={classes.inputDate}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className={classes.inputContainer}>
                  <select
                    onChange={handleTimeChange}
                    className={classes.selectBox}
                    value={selectedTime}
                    style={{ backgroundImage: `url("${arrow}")` }}
                  >
                    {availableHours.map((el) => {
                      return (
                        <option key={`time-${el}`} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={classes.inputContainer}>
                  <select
                    style={{ backgroundImage: `url("${arrow}")` }}
                    onChange={handleGuestsChange}
                    className={classes.selectBox}
                    value={selectedNumberGuests}
                  >
                    {numberOfPersonsAvailable.map((el) => {
                      return (
                        <option key={`persons ${el}`} value={el}>
                          {el} person
                        </option>
                      );
                    })}
                  </select>
                </div>
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
          <>
            <p className={classes.paragraph}>
              Thank you for submitting the form! We will get back to you soon!
            </p>
            <Button
              onClick={makeNewReservation}
              btnCentered={true}
              btnStyle="green"
              btnText="Make a new reservation"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationsForm;
