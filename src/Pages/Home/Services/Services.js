import React from "react";
import Service from "./Service";
import "./services.css";

const services = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
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
