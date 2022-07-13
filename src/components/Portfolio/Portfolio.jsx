import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";

import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import flipcardclone from "../../img/flipcardclone.png";
import ownpro from "../../img/ownpro.png";
import portfolio from "../../img/portfolio.png";
import moderncrud from "../../img/moderncrud.png";
import googlesearch from "../../img/googlesearch.png";
import crudapp from "../../img/crudapp.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portifolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span style={{ color: darkMode ? "var(--orange)" : "" }}>Portfolio</span>
      <span
        style={{ color: darkMode ? "blue" : "var(--orange)", fontSize: "15px" }}
      >
        Please Click Images And Open Projects
      </span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="http://umeshfromflipkart.herokuapp.com/" target="_blank">
            <img src={flipcardclone} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mernstackappbyumesh.herokuapp.com/" target="_blank">
            <img src={ownpro} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://epic-noether-b758f7.netlify.app/" target="_blank">
            <img src={googlesearch} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://peaceful-heisenberg-6abd8d.netlify.app/"
            target="_blank"
          >
            <img src={moderncrud} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://stoic-haibt-2a9fe5.netlify.app/" target="_blank">
            <img src={crudapp} alt="" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={Hoc} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
