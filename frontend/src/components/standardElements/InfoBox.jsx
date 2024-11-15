import React from "react";

const InfoBox = ({ title, data }) => {
  return (
    <div className="fullLine">
      <div className="labelBox">{title}</div>
      <div className="labelBox">{data}</div>
    </div>
  );
};

export default InfoBox;
