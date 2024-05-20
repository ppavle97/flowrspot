import styled from "@emotion/styled";
import { calcRem, colors } from "../../theme";

export const StyledModalLayout = styled("div")({
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  right: 0,
  background: "rgba(0,0,0,.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  "& .content": {
    width: calcRem(440),
    minHeight: calcRem(200),
    background: colors.white,
    borderRadius: calcRem(10),
    padding: calcRem(30),
    boxSizing: "border-box",
  },
  "& .close-btn": {
    background: "none",
    border: "none",
    color: colors.white,
    opacity: 0.5,
    marginTop: calcRem(15),
    fontSize: calcRem(13),
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const StyledModalHeading = styled("h3")({
  fontSize: calcRem(20),
  fontWeight: "500",
  textAlign: "center",
  color: colors.gunmetal,
  marginTop: "0",
});

export const StyledModalForm = styled("form")({
  width: "100%",
  marginTop: calcRem(30),
});
export const StyledModalInlineInputContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: calcRem(10),
});

export const StyledModalInput = styled("div")({
  background: colors.paleGray,
  border: `solid 1px ${colors.lightGray}`,
  borderRadius: calcRem(5),
  padding: `${calcRem(10)} 0px`,
  margin: `${calcRem(10)} 0`,

  "& p": {
    color: colors.cadetGray,
    fontSize: calcRem(12),
    margin: `0 ${calcRem(10)}`,
  },
  "& input": {
    color: colors.gunmetal,
    fontSize: calcRem(15),
    margin: `${calcRem(7)} ${calcRem(10)} 0`,
    border: "none",
    backgroundColor: "transparent",
    "&:focus": { outline: "none" },
  },
});
export const StyledModalSubmit = styled("button")({
  width: "100%",
  height: calcRem(50),
  border: "none",
  borderRadius: calcRem(5),
  backgroundColor: colors.lightCoral,
  color: colors.white,
  fontSize: calcRem(14),
  fontWeight: "700",
  marginTop: calcRem(20),
  "&:hover": { cursor: "pointer" },
});

export const StyledError = styled("p")({
  color: colors.red,
  fontSize: calcRem(14),
  textAlign: "center",
});
