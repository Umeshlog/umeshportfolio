import React from "react";
// import { useRef } from "react/cjs/react.production.min";
// import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contacts = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_8xgk0bt",
//         "template_28exubp",
//         form.current,
//         "w0wRFSsBUG8Xz4kQN"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94 " }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form >
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" className="button" value="send" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
