import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
const Teastimonial = () => {
  const clients = [
    {
      img: profilepic1,
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus quibusdam pariatur quae a, praesentium dolorem fugiat, harum earum odit impedit nisi sed exercitationem! Non magni molestias aliquid praesentium harum?",
    },
    {
      img: profilepic2,
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus quibusdam pariatur quae a, praesentium dolorem fugiat, harum earum odit impedit nisi sed exercitationem! Non magni molestias aliquid praesentium harum?",
    },
    {
      img: profilepic3,
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus quibusdam pariatur quae a, praesentium dolorem fugiat, harum earum odit impedit nisi sed exercitationem! Non magni molestias aliquid praesentium harum?",
    },
    {
      img: profilepic4,
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. At repellendus quibusdam pariatur quae a, praesentium dolorem fugiat, harum earum odit impedit nisi sed exercitationem! Non magni molestias aliquid praesentium harum?",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span> From me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={{ Pagination }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Teastimonial;
