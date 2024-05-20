import React from "react";
import { StyledModalInput } from "../Modal.styled";
import { ModalInputProps } from "./types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ModalInput = ({
  label,
  state,
  setState,
  type,
}: ModalInputProps) => {
  return (
    <StyledModalInput>
      <p>{label}</p>
      {type === "date" ? (
        <DatePicker
          selected={state}
          onChange={setState}
          dateFormat="MM/dd/yyyy"
          placeholderText="Select Date"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
        />
      ) : (
        <input
          value={state}
          onChange={setState}
          type={type}
          placeholder="Type here..."
        />
      )}
    </StyledModalInput>
  );
};
