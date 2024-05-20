import React, { useState, useEffect } from "react";
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
import { signupUser } from "../../../store/features/user/userActions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setModal } from "../../../store/features/modal/modalSlice";

export const SingUpModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);
  const user = useAppSelector((state) => state.user.user);

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
      setInputError(validationError);
    } else {
      const formattedDate = formatDate(dateOfBirth);
      dispatch(
        signupUser({
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
          date_of_birth: formattedDate,
        })
      );
    }
  };

  useEffect(() => {
    if (user) dispatch(setModal("success_singup"));
  }, [user]);

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
        {inputError && <StyledError>{inputError}</StyledError>}
        {error && <StyledError>{error}</StyledError>}

        <StyledModalSubmit onClick={onSubmit}>Create Account</StyledModalSubmit>
      </StyledModalForm>
    </ModalLayout>
  );
};
