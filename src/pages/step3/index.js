import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "../../components/jumbotron";
import { getAccessories } from "../../redux/actions";
import PartialCard from "../../components/partial-card";
import Gallery from "../../components/gallery";

function Step3() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/heshamtammam/5bea91b8fb67eefba8b959bae4b9a5d9/raw/1b7a5433619eb7e19c692961e6a86e7cb34d9bfb/accessories-tow.json"
      )
      .then((res) => {
        dispatch(getAccessories(res.data.data));
      });
  }, [dispatch]);

  const images = useSelector((state) => state.images.accessories);

  return (
    <div style={{ marginBottom: "50px" }}>
      <Jumbotron
        percent="50"
        title="You also like
classic and formal spaces"
        subTitle="Here are a few popular products inspired by your room choice.
        Tell us what you love and what you don’t. Unsure? Leave it blank."
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Gallery />
          </div>
          <div className="col-md-6">
            <div className="row">
              {images ? (
                images.map((image) => (
                  <PartialCard src={image.url} alt={image.id} key={image.id} />
                ))
              ) : (
                <p>sorry something wrong happen</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step3;
