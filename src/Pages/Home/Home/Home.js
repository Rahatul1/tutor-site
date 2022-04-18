import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Cetegoris from "../../Home/Categories/Categories";
import "./home.css";

const Home = () => {
  return (
    <div className="home-conernt">
      <Banner></Banner>
      <Services></Services>
      <Cetegoris></Cetegoris>
      <Footer></Footer>
    </div>
  );
};

export default Home;
