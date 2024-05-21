import React, { useEffect } from "react";
import { StyledLayout } from "./Layout.styled";
import { LayoutProps } from "./types";
import { Navigation } from "../Navigation";
import { ModalContainer } from "../Modals";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCurrentUser } from "../../store/features/user/userActions";

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(fetchCurrentUser());
  }, [dispatch, isLoggedIn]);

  return (
    <StyledLayout>
      <Navigation />
      {children}
      <ModalContainer />
    </StyledLayout>
  );
};
