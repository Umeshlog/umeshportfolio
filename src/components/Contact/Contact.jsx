import React, { useState } from "react";
// import { useRef } from "react/cjs/react.production.min";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xgk0bt",
        // "template_28exubp",
        "template_5pq77v9",
        // form.current,
        e.target,
        "w0wRFSsBUG8Xz4kQN"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(done);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94 " }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            // name="user_name"
            name="name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            // name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" className="button" value="send" />
          <span style={{ cursor: "pointer" }}>
            {done && "Thanks for contactin me "}
          </span>

          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
