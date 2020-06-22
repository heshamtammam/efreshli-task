import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "../../components/jumbotron";
import { getAccessories } from "../../redux/actions";
import PartialCard from "../../components/partial-card";
import Gallery from "../../components/gallery";
function Step4() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/heshamtammam/d14d45823f478886ff20d81b9ce94684/raw/6003d14543384f3f679a875ca9eb1e0ed9836caa/accessories-three.json"
      )
      .then((res) => {
        dispatch(getAccessories(res.data.data));
      });
  }, [dispatch]);

  const images = useSelector((state) => state.images.accessories);
  return (
    <div style={{ marginBottom: "50px" }}>
      <Jumbotron
        percent="75"
        title="Modern and dramatic spaces
seem to catch your eye as well"
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

export default Step4;
