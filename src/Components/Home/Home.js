import React from "react";
import About from "./About Us/About";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PhotoGallary from "./PhotoGallary/PhotoGallary";
import Topbar from "./Topbar/Topbar";

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Events></Events>
      <PhotoGallary></PhotoGallary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
