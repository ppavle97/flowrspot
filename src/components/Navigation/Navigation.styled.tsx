import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";
import { StyledMenuProps, StyledNavigationProps } from "./types";

export const StyledNavigation = styled("div")<StyledNavigationProps>(
  ({ menuOpen }) => [
    {
      display: "flex",
      justifyContent: "space-between",
      padding: `${calcRem(20)} ${calcRem(30)} `,
      fontFamily: "Montserrat",
      boxSizing: "border-box",
      zIndex: 10,
      [breakpointMax("md")]: {
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
        [breakpointMax("md")]: {
          margin: "0",
        },
      },
      "& .menu-toggler": {
        display: "none",
        width: calcRem(30),
        height: calcRem(30),
        [breakpointMax("md")]: {
          display: "block",
        },
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ]
);
export const StyledMenu = styled("div")<StyledMenuProps>(({ menuOpen }) => [
  {
    display: "flex",
    [breakpointMax("md")]: {
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
  [breakpointMax("md")]: {
    margin: `${calcRem(20)} ${calcRem(20)}`,
  },

  "&.login": {
    color: colors.lightCoral,
    fontWeight: "500",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
export const StyledMenuButton = styled("p")({
  margin: `auto ${calcRem(20)}`,
  fontSize: calcRem(14),
  fontWeight: "500",
  color: colors.white,
  backgroundColor: colors.lightCoral,
  padding: `${calcRem(10)} ${calcRem(20)}`,
  border: "none",
  borderRadius: "100px",
  "&:hover": {
    cursor: "pointer",
  },
  [breakpointMax("md")]: {
    margin: `${calcRem(20)} ${calcRem(20)}`,
    maxWidth: calcRem(100),
    padding: `${calcRem(15)} ${calcRem(20)}`,
  },
});

export const StyledMenuUser = styled("div")({
  display: "flex",
  alignItems: "center",
  [breakpointMax("md")]: {
    margin: `${calcRem(0)} ${calcRem(20)}`,
  },
  "&:hover": {
    cursor: "pointer",
  },
  "& p": {
    fontSize: calcRem(13),
    color: colors.gunmetal,
  },
  "& img": {
    width: calcRem(40),
    marginLeft: calcRem(20),
  },
});
