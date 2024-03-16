import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailIcon from "@mui/icons-material/Mail";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="banner2-box">
        <img src="images/banners/book-banner.png"></img>
        <div className="banner2-text">
          <h2>Book a car by getting in touch with us</h2>
          <h2>
            <LocalPhoneIcon /> <span>(123) 456-7869</span>
          </h2>
        </div>
      </div>
      <div className="footer-box">
        <div className="first box">
          <h2>
            <b>CAR</b> Rental
          </h2>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="numbers">
            <p>
              <span>
                <PhoneInTalkIcon />
              </span>{" "}
              (123) -456-789
            </p>
            <p>
              <span>
                <MailIcon />
              </span>{" "}
              carrental@gmail.com
            </p>
            <p>
              Design by <span>Oguz Orcin Cinar</span>
            </p>
          </div>
        </div>
        <div className="second box">
          <h2>COMPANY</h2>
          <p>New York</p>
          <p>Careers</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>How we work</p>
        </div>
        <div className="third box">
          <h2>WORKING HOURS</h2>
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div className="last box">
          <h2>SUBSCRIPTION</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input></input>
          <button>Submit</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
