import React from "react";
import img from "../../images/img2.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="about-content container">
        <div className="name-content">
          <h1>I am a junior web developer</h1>
          <div>
            <p className="pt-3">
              <b>Goal</b>: I'm learning Fontend Development at Programming Hero.
              Learning React-JS, Firebase, JavaScript, HTML, CSS etc. I am a
              fast learner, explorer and hard worker. And, I want to be a
              Full-Stack Web Developer. I also want to achieve my goal. For this
              I am doing a lot of hard work in Programming. I enjoy working with
              include ReactJS and JavaScript. In the future I will learn more
              Programming Language.
            </p>
          </div>
          <button className="btn btn-primary mt-3">Check My Profile</button>
        </div>
        <div className="images-content">
          <img src={img} height="350px" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default About;
