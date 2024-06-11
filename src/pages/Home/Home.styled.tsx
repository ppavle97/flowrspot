import styled from "@emotion/styled";
import { breakpointMax, calcRem, colors } from "../../theme";

export const StyledFlowerList = styled("div")({
  minHeight: "50vh",
  marginTop: calcRem(50),
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: calcRem(20),
  padding: `0 ${calcRem(20)}`,
  boxSizing: "border-box",
  [breakpointMax("md")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [breakpointMax("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "& .loading": {
    color: colors.cadetGray,
    fontSize: calcRem(18),
    textAlign: "center",
  },
  "& .error": {
    color: colors.red,
    fontSize: calcRem(18),
    textAlign: "center",
  },
});
