import styled from "@emotion/styled";
import { calcRem, colors } from "../../theme";

export const StyledNotFound = styled("div")({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& p": {
    fontSize: calcRem(30),
    color: colors.gunmetal,
  },
  "& button": {
    fontSize: calcRem(20),
    color: colors.white,
    backgroundColor: colors.lightCoral,
    border: "none",
    borderRadius: calcRem(10),
    padding: `${calcRem(10)} ${calcRem(20)}`,
    "&:hover": {
      cursor: "pointer",
    },
  },
});
