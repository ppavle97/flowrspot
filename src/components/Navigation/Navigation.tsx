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
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/features/modal/modalSlice";
import { RootState } from "../../store";
import profileHolder from "./assets/profile-holder.svg";
import { useAppSelector } from "../../store/hooks";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
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
            <StyledMenuButton onClick={() => dispatch(setModal("login"))} login>
              Login
            </StyledMenuButton>
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
        className="hamburger-menu"
      />
    </StyledNavigation>
  );
};
