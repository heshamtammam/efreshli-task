import React, { useState } from "react";
import styled from "@emotion/styled";

const CheckedSign = styled.span({
  position: "absolute",
  transform: "translate(-50%,-50%)",
  top: "50%",
  left: "50%",
  background: "white",
  borderRadius: "50%",
});

const BigPhoto = ({ src }) => {
  const [clicked, setClicked] = useState(false);

  const clickedStyle = {
    border: "2px solid #ef4e22",
    opacity: "0.6",
  };
  return (
    <div
      className="col-md-6"
      style={{ position: "relative", marginBottom: "25px" }}
    >
      <img
        src={src}
        alt=""
        className="img-thumbnail"
        style={clicked ? clickedStyle : null}
        onClick={() => setClicked(!clicked)}
      />
      {clicked && (
        <CheckedSign>
          <svg
            class="bi bi-check-circle-fill"
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            fill="#ef4e22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        </CheckedSign>
      )}
    </div>
  );
};

export default BigPhoto;
