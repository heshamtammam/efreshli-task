import React from "react";

import "./percent-circle.css";

const PercentCircle = ({ percent }) => {
  return (
    <>
      <div className="wrapper">
        <div className={`c100 p${percent} blue`}>
          <span>{percent}%</span>

          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PercentCircle;
