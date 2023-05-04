import React from "react";
import classes from "./Reservation.module.css";
import getDateFunction from "../../../helpers/getDateFunction";
import Typography from "../../general/Typography/Typography";
import Button from "../../general/Button/Button";

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
      <Typography fontColor="primary" classN={classes.date} fontSize="md">
        <>
          <b>Date:</b> {dateObg}{" "}
        </>
      </Typography>
      <Typography fontColor="gray" fontSize="sm">
        <>Number of guests: {numOfPersons}</>
      </Typography>
      <Typography fontColor="gray" fontSize="sm">
        <>Time: {time}</>
      </Typography>
      <Button
        btnText="Cancel reservation"
        onClick={() => {}}
        btnStyle="transparent-bordered"
        btnCentered={false}
      />
    </li>
  );
};

export default Reservation;
