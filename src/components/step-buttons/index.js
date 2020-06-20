import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div({
  background: "#fff",
  padding: "10px 20px",
  overflow: "hidden",
  borderTop: "1px solid #e5e4de",
  position: "fixed",
  bottom: 0,
  width: "100%",
});

const StyledContinueBtn = styled.button({
  border: "none",
  borderRadius: "50px",
  height: "32px",
  width: "140px",
  fontSize: "14px",
  background: "#ef4e22",
  color: "#fff",

  "&:focus": {
    outline: "none",
  },
  "&:disabled": {
    background: "#888d8d",
    cursor: "not-allowed",
  },
});
const StepButtons = () => {
  return (
    <StyledWrapper>
      <a
        className="float-left"
        style={{
          color: "#a2a7b1",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <svg
          class="bi bi-arrow-left-short"
          width="20px"
          height="20px"
          viewBox="0 0 16 16"
          fill="#a2a7b1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        BACK
      </a>
      <StyledContinueBtn className=" float-right">Continue</StyledContinueBtn>
    </StyledWrapper>
  );
};

export default StepButtons;
