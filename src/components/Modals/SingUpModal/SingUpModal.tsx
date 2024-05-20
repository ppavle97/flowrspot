import React, { useState } from "react";
import { ModalLayout } from "../ModalLayout";
import {
  StyledError,
  StyledModalForm,
  StyledModalHeading,
  StyledModalInlineInputContainer,
  StyledModalSubmit,
} from "../Modal.styled";
import { ModalInput } from "../ModalInput";
import { validateSignUpFields } from "./validation";
import { formatDate } from "./helpers";

export const SingUpModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationError = validateSignUpFields(
      firstName,
      lastName,
      dateOfBirth,
      email,
      password
    );
    if (validationError) {
      setError(validationError);
    } else {
      const formattedDate = formatDate(dateOfBirth);
      console.log("Data");
      console.log({
        firstName,
        lastName,
        dateOfBirth: formattedDate,
        email,
        password,
      });
      // signup logic
    }
  };

  return (
    <ModalLayout closeText="I don't want to register">
      <StyledModalHeading>Create an Account</StyledModalHeading>
      <StyledModalForm>
        <StyledModalInlineInputContainer>
          <ModalInput
            state={firstName}
            setState={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            label="First Name"
            type="text"
          />
          <ModalInput
            state={lastName}
            setState={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
            label="Last Name"
            type="text"
          />
        </StyledModalInlineInputContainer>
        <ModalInput
          state={dateOfBirth}
          setState={(date: Date) => setDateOfBirth(date?.toISOString())}
          label="Date of Birth"
          type="date"
        />
        <ModalInput
          state={email}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          label="Email"
          type="text"
        />
        <ModalInput
          state={password}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          label="Password"
          type="password"
        />
        {error && <StyledError>{error}</StyledError>}

        <StyledModalSubmit onClick={onSubmit}>Create Account</StyledModalSubmit>
      </StyledModalForm>
    </ModalLayout>
  );
};
