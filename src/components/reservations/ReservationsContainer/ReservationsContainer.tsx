import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Reservation from "../Reservation/Reservation";
import classes from "./ReservationsContainer.module.css";

const ReservationsContainer: React.FC = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.reservations
  );

  console.log(reservations);
  return (
    <div className="container">
      <ol className={classes.container}>
        {reservations.map((reservation) => {
          return (
            <Reservation
              date={reservation.date}
              numOfPersons={reservation.numOfPersons}
              time={reservation.time}
              key={
                reservation.date + Math.floor(Math.random() * (100 - 1 + 1) + 1)
              }
            />
          );
        })}
      </ol>
    </div>
  );
};

export default ReservationsContainer;
