import React from "react";
import { StyledLayout } from "./Layout.styled";
import { LayoutProps } from "./types";
import { Navigation } from "../Navigation";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Navigation />
      {children}
    </StyledLayout>
  );
};
