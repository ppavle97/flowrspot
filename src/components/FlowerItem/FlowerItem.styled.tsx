import styled from "@emotion/styled";
import { StyledFlowerItemProps } from "./types";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledFlowerItem = styled("div")<StyledFlowerItemProps>(
  ({ favourite, profile_picture }) => [
    {
      backgroundImage: `url(${profile_picture})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      textAlign: "center",
      boxSizing: "border-box",
      height: calcRem(400),
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",

      [breakpointMax("md")]: {
        height: calcRem(300),
      },
      [breakpointMax("sm")]: {
        height: calcRem(230),
      },

      "& .favourite": {
        width: calcRem(40),
        height: calcRem(40),
        backgroundColor: favourite ? colors.lightCoral : colors.white,
        borderRadius: "100px",
        position: "absolute",
        top: calcRem(20),
        right: calcRem(20),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": { cursor: "pointer" },

        [breakpointMax("md")]: {
          width: calcRem(30),
          height: calcRem(30),
          top: calcRem(15),
          right: calcRem(15),
        },
        [breakpointMax("sm")]: {
          width: calcRem(25),
          height: calcRem(25),
          top: calcRem(10),
          right: calcRem(10),
        },

        "& img": {
          width: calcRem(20),
          [breakpointMax("md")]: {
            width: calcRem(15),
          },
          [breakpointMax("sm")]: {
            width: calcRem(12),
          },
        },
      },
      "& .content": {
        paddingBottom: calcRem(10),

        "& h3": {
          color: colors.white,
          fontSize: calcRem(20),
          margin: 0,
          [breakpointMax("sm")]: {
            fontSize: calcRem(16),
          },
        },

        "& .latin": {
          color: colors.white,
          fontSize: calcRem(12),
          fontStyle: "italic",
          marginTop: calcRem(5),
          opacity: 0.7,
          [breakpointMax("sm")]: {
            fontSize: calcRem(10),
          },
        },

        "& .sightings": {
          color: colors.white,
          fontSize: calcRem(12),
          backgroundColor: favourite ? colors.lightCoral : "rgba(0,0,0,.3)",
          width: calcRem(110),
          margin: `${calcRem(20)} auto 0`,
          height: calcRem(35),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: calcRem(30),
          [breakpointMax("sm")]: {
            fontSize: calcRem(10),
          },
        },
      },
    },
  ]
);
