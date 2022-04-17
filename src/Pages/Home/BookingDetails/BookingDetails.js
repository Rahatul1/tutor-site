import React from "react";
import { Link, useParams } from "react-router-dom";

const BookingDetails = () => {
  const { serviceId } = useParams();
  return (
    <div className="text-center">
      <h2>BookingDetails: {serviceId}</h2>
      <Link to="/booking">
        <button className="btn btn-primary">Proceed Check out</button>
      </Link>
    </div>
  );
};

export default BookingDetails;
