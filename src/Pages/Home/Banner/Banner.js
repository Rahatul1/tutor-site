import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/image2.jpg";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-container container d-sm">
      <div className="images">
        <img src={image} className="rounded" alt="..." />
      </div>
      <div className="name-container">
        <h1>I am a professional Tutor!</h1>
        <div>
          <p className="pt-3">
            Hey! Are you looking for good Tutor ? So i think you've right to the
            place.
          </p>
          <small>
            I am teaching, bengali ' english ' arabic ' subjects. Admission Test
            , Language Learning , Test Preparasion , Now you can hire me.
          </small>
        </div>
        <button className="btn btn-primary mt-3">
          <Link className="text-white text-decoration-none" to="/about">
            About Me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
