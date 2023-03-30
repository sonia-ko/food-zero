import React from "react";
import classes from "./DatePicker.module.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerInputProps {
  changeDate: (date: Date | null) => void;
  reservationDate: Date | null;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
  changeDate,
  reservationDate,
}) => {
  const handleDateChange = (date: Date | null) => {
    changeDate(date);
  };

  return (
    <div className={classes.datePickerContainer}>
      <LocalizationProvider
        className={classes.inputContainer}
        dateAdapter={AdapterDayjs}
      >
        <DatePicker
          className={classes.datePicker}
          value={reservationDate}
          onChange={handleDateChange}
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
  );
};

export default DatePickerInput;
