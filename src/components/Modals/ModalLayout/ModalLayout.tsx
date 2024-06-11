import React from "react";
import { ModalLayoutProps } from "./types";
import { StyledModalLayout } from "../Modal.styled";
import { setModal } from "../../../store/features/modal/modalSlice";
import { useAppDispatch } from "../../../store/hooks";

export const ModalLayout = ({
  children,
  closeText,
  size,
}: ModalLayoutProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledModalLayout size={size}>
      <div className="content">{children}</div>
      <button onClick={() => dispatch(setModal(null))} className="close-btn">
        {closeText}
      </button>
    </StyledModalLayout>
  );
};
