import styled from "@emotion/styled";
import { StyledFlowerItemProps } from "./types";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledFlowerItem = styled("div")<StyledFlowerItemProps>(
  ({ favourite, backgroundImg }) => [
    {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      textAlign: "center",
      boxSizing: "border-box",
      height: calcRem(400),
      [breakpointMax("md")]: {
        height: calcRem(300),
      },
      [breakpointMax("sm")]: {
        height: calcRem(230),
      },
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",

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

        "& .description": {
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