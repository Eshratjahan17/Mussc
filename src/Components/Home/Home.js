import React from "react";
import About from "./About Us/About";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Events></Events>
      <Footer></Footer>
    </div>
  );
};

export default Home;
