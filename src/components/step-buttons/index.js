import React from "react";
import styled from "@emotion/styled";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const location = useLocation();
  const history = useHistory();

  const mainSleceted = useSelector((state) => state.selected.selectedImages);

  return (
    <StyledWrapper>
      {location.pathname !== "/" && (
        <button
          className="float-left"
          style={{
            color: "#a2a7b1",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            border: "none",
            background: "none",
          }}
          onClick={() => {
            if (location.pathname === "/step2") {
              history.push("/");
            } else {
              history.push(
                `/step${
                  location.pathname.substr(location.pathname.length - 1) - 1
                }`
              );
            }
          }}
        >
          <svg
            className="bi bi-arrow-left-short"
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            fill="#a2a7b1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.854 4.646a.5.5 0 0 1 0 .708L5.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.5 8a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          BACK
        </button>
      )}
      {location.pathname === "/" ? (
        <StyledContinueBtn
          className=" float-right"
          disabled={mainSleceted.length < 3}
          onClick={() => history.push("/step2")}
        >
          {`(${mainSleceted.length}/3)`} Continue
        </StyledContinueBtn>
      ) : (
        <StyledContinueBtn
          className=" float-right"
          onClick={() => {
            history.push(
              `/step${
                parseInt(
                  location.pathname.substr(location.pathname.length - 1)
                ) + 1
              }`
            );
          }}
        >
          Continue
        </StyledContinueBtn>
      )}
    </StyledWrapper>
  );
};

export default StepButtons;
