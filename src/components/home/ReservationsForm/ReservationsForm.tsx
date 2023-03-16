import React from 'react';
import { useState } from 'react';
import classes from './ReservationsForm.module.css';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { inherits } from 'util';
import { availableHours } from '../../../static/restaurantData';
import Button from '../../general/Button/Button';

import arrow from '../../../assets/general/arrow-down-gray.png';

const ReservationsForm: React.FC = () => {
  const [formOpened, setFormOpened] = useState(true);
  const [selectedTime, setSelectedTime] = useState('00:00 am');
  const [selectedNumberGuests, setSelectedNumberGuests] = useState(1);
  const [reservationDate, setReservationDate] = React.useState<Date | null>(
    new Date(2022, 3, 7),
  );

  const numberOfPersonsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumberGuests(Number(event.target.value));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFormOpened(false);
    console.log(selectedTime, selectedNumberGuests, reservationDate);
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
              action='#'
            >
              {/* <input type='date' /> */}
              <div className={classes.form}>
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
                        margin='none'
                        style={{
                          width: '30%',
                          // border: '2px solid black',
                          // minHeight: '200px',
                          borderRadius: '0',
                        }}
                        className={classes.inputDate}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
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
                onClick={() => {}}
                btnCentered={true}
                btnStyle='green'
                btnText='Book Now'
              />
            </form>
          </>
        ) : (
          <>
            <p className={classes.paragraph}>
              Thank you for submitting the form! We will get back to you soon!
            </p>
            <Button
              onClick={() => {}}
              btnCentered={true}
              btnStyle='green'
              btnText='Make a new reservation'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationsForm;
