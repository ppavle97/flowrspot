import React from "react";
import { ModalLayout } from "../ModalLayout";
import {
  StyledModalSuccessBtn,
  StyledModalSuccessDescription,
  StyledModalSuccessHeading,
} from "../Modal.styled";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/features/modal/modalSlice";

export const SuccessSingUp = () => {
  const dispatch = useDispatch();

  return (
    <ModalLayout>
      <StyledModalSuccessHeading>Congratulations!</StyledModalSuccessHeading>
      <StyledModalSuccessDescription>
        You have successfully signed up for FlowrSpot!
      </StyledModalSuccessDescription>
      <StyledModalSuccessBtn onClick={() => dispatch(setModal("login"))}>
        OK
      </StyledModalSuccessBtn>
    </ModalLayout>
  );
};
