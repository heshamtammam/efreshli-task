import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import Jumbotron from "../../components/jumbotron";

const StyledTitle = styled.h3({
  color: "black",
  fontSize: 20,
  lineHeight: "40px",
  borderRadius: "15px 15px 1px 1px",
  fontWeight: "bold",
});

const StyledImg = styled.img({
  maxHeight: 200,
  maxWidth: "100%",
});

function Step5() {
  const mainImages = useSelector((state) => state.selected.selectedImages);
  const accessoriesImg = useSelector(
    (state) => state.selected.selectedAccessories
  );
  return (
    <>
      <Jumbotron
        percent="100"
        title="Are you currently working on a home design project?"
        subTitle="Select an option below"
      />
      <div style={{ marginBottom: "80px" }} className="container text-center">
        <div className="row">
          <div className="col-md-12 py-3">
            <StyledTitle>Main Style</StyledTitle>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {mainImages ? (
                mainImages.map((img) => (
                  <div className="col-md-4 mb-2">
                    <StyledImg
                      className="img-thumbnail"
                      src={img.src}
                      key={img.id}
                    />
                  </div>
                ))
              ) : (
                <p>something wrong happen</p>
              )}
            </div>
          </div>
          <div className="col-md-12 py-3">
            <StyledTitle>Accessories</StyledTitle>
            <div className="row" style={{ display: "flex" }}>
              {accessoriesImg.length ? (
                accessoriesImg.map((img) => (
                  <div className="col-md-4 mb-2">
                    <div
                      className=" shadow-sm p-3 mb-5 bg-white rounded"
                      style={{
                        minHeight: 230,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <StyledImg src={img.src} key={img.id} />
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ margin: "0 auto" }}>
                  You don't choose any accessories
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step5;
