import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import "./home.css";

const Home = () => {
  return (
    <div className="home-conernt">
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
