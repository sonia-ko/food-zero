import React from "react";
import classes from "./SubmissionConfirmation.module.css";
import Button from "../../Button/Button";

interface SubmissionConfirmationProps {
  message: string;
  status: "success" | "error";
  makeNewReservation: () => void;
}

const SubmissionConfirmation: React.FC<SubmissionConfirmationProps> = ({
  message,
  status,
  makeNewReservation,
}) => {
  return (
    <>
      <p className={classes.paragraph}>{message}</p>
      <Button
        onClick={makeNewReservation}
        btnCentered={true}
        btnStyle="green"
        btnText={status === "success" ? "Got it!" : "Try again"}
      />
    </>
  );
};

export default SubmissionConfirmation;
