import React from "react";
import {FaEnvelope,FaFacebook,FaLinkedinIn,FaInstagram} from "react-icons/fa";


const Topbar = () => {
  return (
    <div className="bg-primary px-10 py-3 flex justify-between">
      <div className="flex items-center ">
        <FaEnvelope className="text-white mr-2 text-sm" />
        <a className="text-white text-sm" href="mailto:mussc@metrouni.edu.bd">mussc@metrouni.edu.bd</a>
      </div>
      <div className="flex items-center ">
      <a href="https://www.facebook.com/musocialservicesclub" className="text-white text-sm mr-2" >
          <FaFacebook></FaFacebook>
        </a>
        <a className="text-white text-sm mr-2" href="https://www.linkedin.com/in/mu-social-services-club-125bb526a/">
          <FaLinkedinIn></FaLinkedinIn> 
        </a>
       
        <a className="text-white text-sm mr-2" href="">
          <FaInstagram></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
