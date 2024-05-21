import React from "react";
import { ModalLayout } from "../ModalLayout";
import {
  StyledModalSuccessBtn,
  StyledModalSuccessBtnContainer,
  StyledModalSuccessDescription,
  StyledModalSuccessHeading,
} from "../Modal.styled";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/features/modal/modalSlice";
import { SuccessAuthModalProps } from "./types";

export const SuccessAuthModal = ({
  description,
  type,
}: SuccessAuthModalProps) => {
  const dispatch = useDispatch();

  return (
    <ModalLayout>
      <StyledModalSuccessHeading>Congratulations!</StyledModalSuccessHeading>
      <StyledModalSuccessDescription>
        {description}
      </StyledModalSuccessDescription>

      {type == "singup" ? (
        <StyledModalSuccessBtn onClick={() => dispatch(setModal(null))}>
          OK
        </StyledModalSuccessBtn>
      ) : (
        <StyledModalSuccessBtnContainer>
          <StyledModalSuccessBtn onClick={() => dispatch(setModal(null))}>
            OK
          </StyledModalSuccessBtn>
          <StyledModalSuccessBtn onClick={() => dispatch(setModal("profile"))}>
            PROFILE
          </StyledModalSuccessBtn>
        </StyledModalSuccessBtnContainer>
      )}
    </ModalLayout>
  );
};
