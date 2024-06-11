import { StyledNotFound } from "./PageNotFound.styled";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFound>
      <p>Page not found!</p>
      <button onClick={() => navigate("/")}>Go to home!</button>
    </StyledNotFound>
  );
};
