import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="home-conernt">
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
