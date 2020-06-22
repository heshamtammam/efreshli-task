import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import {
  setAccessoriesImgSelected,
  removeAccessoriesImgSelected,
} from "../../redux/actions";

const StyledWrapper = styled.div({
  borderRadius: 5,
  backgroundColor: "#fff",
  padding: "30px 25px 30px",
  boxShadow: "0 2px 3px 0 rgba(0,0,0,.2)",
  textAlign: "center",
  height: 300,
  marginBottom: 20,

  ".StyledPhoto": {
    maxHeight: 200,
    maxWidth: "100%",
  },
});

const PartialCard = ({ id, src }) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const isExist = useSelector(
    (state) => state.selected.selectedAccessories
  ).filter((item) => item.src === src);
  return (
    <div className="col-sm-6">
      <StyledWrapper>
        <div
          style={{
            minHeight: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={src} alt={id} className="StyledPhoto" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "60%",
            margin: "15px auto 0",
          }}
        >
          <svg
            className="bi bi-heart-fill "
            width="28px"
            height="28px"
            viewBox="0 0 16 16"
            fill={clicked ? "#ef4e22" : "#d6deea"}
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setClicked(true);
              if (!isExist.length) {
                dispatch(setAccessoriesImgSelected({ id, src }));
              }
            }}
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
          <svg
            className="bi bi-x"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            fill="#d6deea"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setClicked(false);
              dispatch(removeAccessoriesImgSelected(src));
            }}
          >
            <path
              fillRule="evenodd"
              d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
            />
          </svg>
        </div>
      </StyledWrapper>
    </div>
  );
};

export default PartialCard;
