import React, { useState } from "react";
import {
  StyledNavigation,
  StyledMenu,
  StyledMenuItem,
  StyledMenuButton,
} from "./Navigation.styled";
import logo from "./assets/logo.svg";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";
import { useDispatch } from "react-redux";
import { setModal } from "../../store/features/modal/modalSlice";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <img src={logo} alt="FlowerSpot Logo" className="navigation-logo" />
      <StyledMenu menuOpen={menuOpen}>
        <StyledMenuItem>Flowers</StyledMenuItem>
        <StyledMenuItem>Latest Sightings</StyledMenuItem>
        <StyledMenuItem>Favorites</StyledMenuItem>
        <StyledMenuButton onClick={() => dispatch(setModal("login"))} login>
          Login
        </StyledMenuButton>
        <StyledMenuButton onClick={() => dispatch(setModal("signup"))}>
          New Account
        </StyledMenuButton>
      </StyledMenu>
      <img
        src={menuOpen ? close : hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        alt="FlowerSpot Menu"
        className="hamburger-menu"
      />
    </StyledNavigation>
  );
};
