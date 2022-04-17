import React from "react";
import image from "../../../images/image2.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container container">
      <div className="name-container">
        <h1>I am a professional Tutor!</h1>
        <div>
          <p className="pt-3">
            Hey! Are you looking for good Tutor ? So i think you've right to the
            place.
          </p>
          <small>
            I teachng, bengali ' english ' arabic ' subjects, Now you can hire
            me
          </small>
        </div>
      </div>
      <div className="images">
        <img src={image} className="w-100 rounded" alt="..." />
      </div>
    </div>
  );
};

export default Banner;
