import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./umesh_patel-6.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transitions = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. vitae
          eveniet. <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <a href={Resume} download>
          {/* resume file add karana servvices folder me */}
          <button className="button s-button">Download CV</button>
        </a>
        {/* <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div> */}
        <div
          className=" blur s-blur1"
          style={{
            background: "#C1F5FF",
          }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transitions}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Figma, Sketch ,Photoshop, Adobe,Adobe xd"
          />
        </motion.div>
        {/* second card */}
        <motion.div style={{ top: "12rem", left: "-2rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "Html, Css,JavaScript,React Figma, Sketch ,Photoshop, Adobe,Adobe xd"
            }
          />
        </motion.div>
        {/* Third card */}
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25rem" }}
          transition={transitions}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia odio vel nisi aperiam assumenda architecto"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
