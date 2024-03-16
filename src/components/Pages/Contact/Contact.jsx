import React from "react";
import Banner from "../../Banner";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

export default function Contact() {
  return (
    <section className="contact-container">
      <Banner h1="Contact" h2="Home / Contact" />
      <div className="contact-box">
        <div className="contact-text">
          <h1>Need additional information?</h1>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className="contact-icons">
            <h4>
              <span>
                <LocalPhoneOutlinedIcon />
              </span>{" "}
              (123) 456-7869
            </h4>
            <h4>
              <span>
                <EmailIcon />
              </span>{" "}
              carrental@carmail.com
            </h4>
            <h4>
              <span>
                <NearMeOutlinedIcon />
              </span>{" "}
              Belgrade, Serbia
            </h4>
          </div>
        </div>
        <div className="form-box">
          <div className="input-area">
            <h2>Full Name *</h2>
            <input placeholder="E.g : 'Joe Shmoe"></input>
          </div>
          <div className="input-area">
            <h2>Email *</h2>
            <input placeholder="youremail@example.com"></input>
          </div>
          <div className="input-area text-area">
            <h2>Tell us about it *</h2>
            <textarea placeholder="Write Here..."></textarea>
          </div>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            <DraftsOutlinedIcon /> <span>Send Message</span>
          </button>
        </div>
      </div>
    </section>
  );
}
