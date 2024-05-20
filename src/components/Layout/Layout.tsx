import React from "react";
import { StyledLayout } from "./Layout.styled";
import { LayoutProps } from "./types";
import { Navigation } from "../Navigation";
import { LoginModal } from "../Modals/LoginModal";
import { ModalContainer } from "../Modals";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Navigation />
      {/* {children} */}
      <ModalContainer />
    </StyledLayout>
  );
};
