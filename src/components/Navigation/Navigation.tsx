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

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNavigation menuOpen={menuOpen}>
      <img src={logo} alt="FlowerSpot Logo" className="navigation-logo" />
      <StyledMenu menuOpen={menuOpen}>
        <StyledMenuItem>Flowers</StyledMenuItem>
        <StyledMenuItem>Latest Sightings</StyledMenuItem>
        <StyledMenuItem>Favorites</StyledMenuItem>
        <StyledMenuButton onClick={() => alert("On Click Login")} login>
          Login
        </StyledMenuButton>
        <StyledMenuButton onClick={() => alert("On Click New Account")}>
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
