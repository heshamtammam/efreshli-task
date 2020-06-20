import React from "react";
import PercentCircle from "./percent-circle";
import styled from "@emotion/styled";

const StyledTitle = styled.h2({
  fontSize: 22,
  lineHeight: "28px",
  letterSpacing: -0.92,
  textShadow: "0 2px 30px hsla(0,0%,100%,.5)",
  color: "#222120",
  fontWeight: "400",
  marginBottom: 10,
});

const Jumbotron = ({ percent, title, subTitle }) => {
  return (
    <div className="text-center">
      <PercentCircle percent={percent} />
      <StyledTitle>{title}</StyledTitle>
      <p className="text-muted">{subTitle}</p>
    </div>
  );
};

export default Jumbotron;
