import React from "react";
import classes from "./Reservation.module.css";
import getDateFunction from "../../../helpers/getDateFunction";
import Typography from "../../general/Typography/Typography";

interface ReservationProps {
  date: string;
  numOfPersons: string;
  time: string;
}
const Reservation: React.FC<ReservationProps> = ({
  date,
  numOfPersons,
  time,
}) => {
  const dateObg = getDateFunction(new Date(date));
  console.log(dateObg);
  console.log();
  return (
    <li
      className={classes.container}
      key={date + Math.floor(Math.random() * (100 - 1 + 1) + 1)}
    >
      <span>
        <b>Date:</b> {dateObg}{" "}
      </span>
      <span>Number of guests: {numOfPersons}</span>
      <span>Time: {time}</span>
    </li>
  );
};

export default Reservation;
