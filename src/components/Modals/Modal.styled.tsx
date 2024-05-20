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

  "& .content": {
    width: calcRem(440),
    minHeight: calcRem(200),
    background: colors.white,
    borderRadius: calcRem(10),
    padding:calcRem(30),
    boxSizing: "border-box",
  },
});
