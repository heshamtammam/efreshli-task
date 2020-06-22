import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledHeader = styled.div({
  textAlign: "center",
  background: "#ef4e22",
  fontSize: 18,
  fontWeight: "bold",
  color: "white",
  lineHeight: "40px",
  marginBottom: 20,
  a: {
    textDecoration: "none",
    color: "#fff",
  },
});
const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">Efreshli Task</Link>
    </StyledHeader>
  );
};

export default Header;
