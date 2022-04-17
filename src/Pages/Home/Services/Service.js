import React from "react";
import "./service.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, name, img, info } = service;
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="g-5 pb-5 col-sm-12 col-md-6 col-lg-6">
      <div className="card card-content">
        <img
          src={img}
          className="card-img-top w-25 mx-auto justify-center"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{info}</p>
          <Button
            onClick={() => navigateToServiceDetail(id)}
            href="#"
            className="btn btn-primary"
          >
            Selection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
