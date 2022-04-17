import React from "react";
import Service from "./Service";
import "./services.css";
import images1 from "../../../images/groupclass.png";
import images2 from "../../../images/hometutor.png";
import images3 from "../../../images/onlinetutor.png";
import images4 from "../../../images/package.png";

const services = [
  {
    id: 1,
    name: "Home Tutoring",
    price: 1200,
    info: "It's a unique opportunity to learn in the home with your expected tutor in different categories. Everything is in favor of your need.",
    img: images1,
  },
  {
    id: 2,
    name: "Online Tutoring",
    price: 700,
    info: "Connect with the best tutors from anywhere and take online classes by using different tools. Make your life more easier with this process.",
    img: images2,
  },
  {
    id: 3,
    name: "Group Tutoring",
    price: 500,
    info: "A group of students can full fill their hunger for learning at an affordable money range. Get ready for the competitive world!",
    img: images3,
  },
  {
    id: 4,
    name: "Package Tutoring",
    price: 1000,
    info: "Choose the tutor from a variety of categories and start learning for the specific one. And explore yourself in a newer version of you.",
    img: images4,
  },
];

const Services = () => {
  return (
    <>
      <div id="services" className="container services">
        <h2 className="text-primary text-center pt-5">
          Tuition Types: {services.length}
        </h2>

        <div className="row">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
