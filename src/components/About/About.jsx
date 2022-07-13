import React from "react";
import umesh2 from "../../img/umesh2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
const About = () => {
  return (
    <div class="container border" id="About">
      <span className="a-he">About Me</span>
      <div class="row border">
        <div
          class="col-sm-12 col-lg-6"
          style={{ border: "2px solid var(--orange)" }}
        >
          <img
            src={umesh2}
            alt=""
            style={{
              height: "370px",
              width: "370px",
              marginTop: "20px",
              marginRight: 0,
            }}
          />
        </div>
        <div
          class="col-sm-12 col-lg-6 "
          style={{ border: "2px solid var(--orange)" }}
        >
          <div style={{ lineHeight: 1.7, paddingTop: "15px" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            porro sed ipsa officia velit, excepturi sunt ea, harum minus alias
            maxime quasi consequatur fugiat iusto fuga quo? Dolor eum dolore
            mollitia consectetur placeat? Blanditiis deleniti facilis ducimus
            alias laudantium illum suscipit, architecto consequuntur dignissimos
            rem non enim, vitae, nulla exercitationem. deleniti facilis ducimus
            alias laudantium illum suscipit, architecto consequuntur dignissimos
            rem non enim, vitae, nulla exercitationem. rem non enim, vitae,
            nulla exercitationem. deleniti facilis ducimus alias laudantium
            illum suscipit, architecto consequuntur dignissimos rem non enim,
            vitae, nulla exercitationem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
