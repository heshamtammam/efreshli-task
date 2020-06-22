import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "../../components/jumbotron";
import { getAccessories } from "../../redux/actions";
import PartialCard from "../../components/partial-card";
import Gallery from "../../components/gallery";

function Step2() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/heshamtammam/f21837b54fa3988f34fd22316bcff43b/raw/4217e9a40b01a927f5d9859f12cee30b8a4e6111/accessories.json"
      )
      .then((res) => {
        dispatch(getAccessories(res.data.data));
      });
  }, [dispatch]);

  const images = useSelector((state) => state.images.accessories);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Jumbotron
        percent="25"
        title="You’re drawn to
traditional and comfortable spaces"
        subTitle="Here are a few popular products inspired by your room choice.Tell us what you love and what you don’t. Unsure? Leave it blank."
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
                  <PartialCard src={image.url} id={image.id} key={image.id} />
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

export default Step2;
