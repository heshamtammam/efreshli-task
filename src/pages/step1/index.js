import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Jumbotron from "../../components/jumbotron";
import BigPhoto from "./big-photo";
import { getBigImages } from "../../redux/actions";

function Step1() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/heshamtammam/c5c5a28c4ac01e779431e7d6d6e1b5c7/raw/7d23c084c4e1b179a366f08ea146f0735871197e/big-photos.json"
      )
      .then((res) => {
        dispatch(getBigImages(res.data.data));
      });
  }, [dispatch]);

  const images = useSelector((state) => state.images.bigImages);

  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="container">
        <Jumbotron
          percent="0"
          title="We’ll ask a few questions to get you a personalized look that you’ll love!"
          subTitle="Start by simply selecting the 3 rooms below that appeal most to you"
        />
        <div className="row">
          {images ? (
            images.map((image) => (
              <BigPhoto src={image.url} id={image.id} key={image.id} />
            ))
          ) : (
            <p>sorry something wrong happen</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step1;
