import React from "react";
import { ModalLayoutProps } from "./types";
import { StyledModalLayout } from "../Modal.styled";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/features/modal/modalSlice";

export const ModalLayout = ({ children, closeText }: ModalLayoutProps) => {
  const dispatch = useDispatch();

  return (
    <StyledModalLayout>
      <div className="content">{children}</div>
      <button onClick={() => dispatch(setModal(null))} className="close-btn">
        {closeText}
      </button>
    </StyledModalLayout>
  );
};
