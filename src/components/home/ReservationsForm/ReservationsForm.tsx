import React from 'react';
import { useState } from 'react';
import classes from './ReservationsForm.module.css';
import TextField from '@mui/material/TextField';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { inherits } from 'util';

const ReservationsForm: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('00:00 am');
  const [selectedNumberGuests, setSelectedNumberGuests] = useState(1);
  const [reservationDate, setReservationDate] = React.useState<Date | null>(
    new Date(2022, 3, 7),
  );

  const availableHours = [
    '09:00 am',
    '10:00 am',
    '11:00 am',
    '01:00 pm',
    '02:00 pm',
    '03:00 pm',
    '04:00 pm',
    '05:00 pm',
    '06:00 pm',
    '07:00 pm',
    '08:00 pm',
    '09:00 pm',
  ];

  const numberOfPersonsAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumberGuests(Number(event.target.value));
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Make a Reservation</h2>
      <p className={classes.paragraph}>Get in touch with restaurant</p>
      <form className={classes.form} action='#'>
        {/* <input type='date' /> */}
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
                  border: '2px solid black',
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
          >
            {availableHours.map((el) => {
              return <option value={el}>{el}</option>;
            })}
          </select>
        </div>
        <div className={classes.inputContainer}>
          <select
            onChange={handleGuestsChange}
            className={classes.selectBox}
            name='sort By'
            id='sortBy'
            value={selectedNumberGuests}
          >
            {numberOfPersonsAvailable.map((el) => {
              return <option value={el}>{el} person</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default ReservationsForm;
