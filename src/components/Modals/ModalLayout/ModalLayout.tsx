import React from "react";
import { ModalLayoutProps } from "./types";
import { StyledModalLayout } from "../Modal.styled";

export const ModalLayout = ({ children }: ModalLayoutProps) => {
  return (
    <StyledModalLayout>
      <div className="content">{children}</div>
    </StyledModalLayout>
  );
};
