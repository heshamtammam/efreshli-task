import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div({});

const PercentCircle = ({ percent }) => {
  return <StyledWrapper>percent : {percent}</StyledWrapper>;
};

export default PercentCircle;
