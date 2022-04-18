import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./services.css";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("tutor.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <>
      <div id="services" className="container services">
        <h2 className="text-primary text-center py-4">Tuition Types</h2>

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
