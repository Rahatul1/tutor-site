import React from "react";
import img from "../../images/img1.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about-content p-5">
      <div
        className="card mx-auto justify-center align-items-center rounded border shadow "
        style={{ width: "18rem" }}
      >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rahat Ul</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Check My Profile</button>
        </div>
      </div>
    </div>
  );
};

export default About;
