import React from "react";
import classes from "./Input.module.css";

interface InputProps {
  inputType: string;
  onChange: (value: string) => void;
  value: string;
  placeHholder: string;
}

const Input: React.FC<InputProps> = ({
  inputType,
  onChange,
  value,
  placeHholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className={classes.input}>
      <input
        onChange={handleChange}
        value={value}
        type={inputType}
        placeholder={placeHholder}
      />
    </div>
  );
};

export default Input;
