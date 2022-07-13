import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import Facebook from "../../img/Facebook.png";
import Instagram from "../../img/instagram.png";

import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>umeshpatel271201@gmail.com</span>
        <span>Contact No. 9340131116</span>
        <div className="f-icons">
          <FaInstagram style={{ width: "50px", height: " 50px" }} />
          <FaFacebook style={{ width: "50px", height: " 50px" }} />
          <FaGithub style={{ width: "50px", height: " 50px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
