import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";
import {
  StyledMenuButtonProps,
  StyledMenuProps,
  StyledNavigationProps,
} from "./types";

export const StyledNavigation = styled("div")<StyledNavigationProps>(
  ({ menuOpen }) => [
    {
      display: "flex",
      justifyContent: "space-between",
      padding: `${calcRem(20)} ${calcRem(30)} `,
      fontFamily: "Montserrat",
      boxSizing: "border-box",

      [breakpointMax("lg")]: {
        height: menuOpen ? "100vh" : "",
        width: "100%",
        position: menuOpen ? "fixed" : "relative",
        backgroundColor: "white",
        top: 0,
        padding: `${calcRem(20)} ${calcRem(30)} `,
      },

      "& .navigation-logo": {
        height: calcRem(30),
        margin: "auto 0",
        [breakpointMax("lg")]: {
          margin: "0",
        },
      },
      "& .hamburger-menu": {
        display: "none",
        width: calcRem(30),
        height: calcRem(30),
        [breakpointMax("lg")]: {
          display: "block",
        },
      },
    },
  ]
);
export const StyledMenu = styled("div")<StyledMenuProps>(({ menuOpen }) => [
  {
    display: "flex",
    [breakpointMax("lg")]: {
      display: menuOpen ? "flex" : "none",
      position: "absolute",
      left: 0,
      top: "10vh",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "50vh",
    },
  },
]);

export const StyledMenuItem = styled("p")({
  margin: `auto ${calcRem(20)}`,
  color: colors.gunmetal,
  fontSize: calcRem(14),
  fontWeight: "500",
  [breakpointMax("lg")]: {
    margin: `${calcRem(20)} ${calcRem(20)}`,
  },
});

export const StyledMenuButton = styled("button")<StyledMenuButtonProps>(
  ({ login }) => [
    {
      margin: `auto ${calcRem(20)}`,
      fontSize: calcRem(14),
      fontWeight: "500",
      color: login ? colors.lightCoral : colors.white,
      backgroundColor: login ? "transparent" : colors.lightCoral,
      padding: login ? "none" : `${calcRem(10)} ${calcRem(20)}`,
      border: "none",
      borderRadius: "100px",
      "&:hover": {
        cursor: "pointer",
      },
      [breakpointMax("lg")]: {
        margin: `${calcRem(20)} ${calcRem(20)}`,
        maxWidth: calcRem(100),
      },
    },
  ]
);
