import React, { useState } from "react";
import {
  StyledNavigation,
  StyledMenu,
  StyledMenuItem,
  StyledMenuButton,
  StyledMenuUser,
} from "./Navigation.styled";
import logo from "./assets/logo.svg";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";
import { setModal } from "../../store/features/modal/modalSlice";
import profileHolder from "./assets/profile-holder.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const user = useAppSelector((state) => state.user.user);

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <img src={logo} alt="FlowerSpot Logo" className="navigation-logo" />
      <StyledMenu menuOpen={menuOpen}>
        <StyledMenuItem>Flowers</StyledMenuItem>
        <StyledMenuItem>Latest Sightings</StyledMenuItem>
        <StyledMenuItem>Favorites</StyledMenuItem>

        {isLoggedIn ? (
          <StyledMenuUser onClick={() => dispatch(setModal("profile"))}>
            <p>
              {user?.first_name} {user?.last_name}
            </p>
            <img src={profileHolder} alt="FlowrSpot Profile User" />
          </StyledMenuUser>
        ) : (
          <>
            <StyledMenuItem
              className="login"
              onClick={() => dispatch(setModal("login"))}
            >
              Login
            </StyledMenuItem>

            <StyledMenuButton onClick={() => dispatch(setModal("signup"))}>
              New Account
            </StyledMenuButton>
          </>
        )}
      </StyledMenu>
      <img
        src={menuOpen ? close : hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        alt="FlowerSpot Menu"
        className="menu-toggler"
      />
    </StyledNavigation>
  );
};
