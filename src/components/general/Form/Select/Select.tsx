import React from "react";
import classes from "./Select.module.css";
import arrow from "../../../../assets/general/arrow-down-gray.png";

interface SelectProps {
  onChangeSelect: (value: string) => void;
  value: string;
  options: string[];
  title: string;
}

const Select: React.FC<SelectProps> = ({
  onChangeSelect,
  value,
  options,
  title,
}) => {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChangeSelect(event.target.value);
  }
  return (
    <select
      style={{ backgroundImage: `url("${arrow}")` }}
      onChange={handleChange}
      className={classes.selectBox}
      value={value}
    >
      {options.map((el) => {
        return (
          <option key={`${title}-${el}`} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
