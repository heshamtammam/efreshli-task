import React from "react";
import Jumbotron from "../../components/jumbotron";
import BigPhoto from "./big-photo";

function Step1() {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Jumbotron
        percent="30"
        title="We’ll ask a few questions to get you a personalized look that you’ll love!"
        subTitle="Start by simply selecting the 3 rooms below that appeal most to you"
      />
      <div className="container">
        <div className="row">
          <BigPhoto src="https://s3-us-west-2.amazonaws.com/modsy/images/Image-012.jpg" />
          <BigPhoto src="https://s3-us-west-2.amazonaws.com/modsy/images/Image-012.jpg" />
          <BigPhoto src="https://s3-us-west-2.amazonaws.com/modsy/images/Image-012.jpg" />
          <BigPhoto src="https://s3-us-west-2.amazonaws.com/modsy/images/Image-012.jpg" />
          <BigPhoto src="https://s3-us-west-2.amazonaws.com/modsy/images/Image-012.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Step1;
