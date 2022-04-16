import React from "react";
import image from "../../../images/images1.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container container">
      <div className="name-container">
        <h1>Hire The Right Tutor Today!</h1>
      </div>
      <div className="images">
        <img src={image} className="w-100 rounded" alt="..." />
      </div>
    </div>
  );
};

export default Banner;
