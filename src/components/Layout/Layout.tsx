import React from "react";
import { StyledLayout } from "./Layout.styled";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <p>Hello from Layout</p>
      {children}
    </StyledLayout>
  );
};
