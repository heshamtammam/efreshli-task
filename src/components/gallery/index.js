import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const images = useSelector((state) => state.selected.selectedImages);
  return (
    <div className="container mb-2">
      {images.length ? (
        <>
          <div className="row">
            <div className="col-12">
              <img
                className="img-fluid"
                src={images[0].src}
                alt={images[0].id}
              />
            </div>
          </div>
          <div className="d-none d-md-block d-lg-block mt-3">
            <div className="row">
              <div className="col-4">
                <img
                  style={{ width: "100%", opacity: "0.25" }}
                  src={images[0].src}
                  alt={images[0].id}
                />
              </div>
              <div className="col-4">
                <img
                  style={{ width: "100%", opacity: "0.25" }}
                  src={images[1].src}
                  alt={images[1].id}
                />
              </div>
              <div className="col-4">
                <img
                  style={{ width: "100%", opacity: "0.25" }}
                  src={images[2].src}
                  alt={images[2].id}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>something wrong happen</p>
      )}
    </div>
  );
};

export default Gallery;
