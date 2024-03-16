import React, { useContext } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CarContext } from "../../Context/CarContext";
import InfoIcon from "@mui/icons-material/Info";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function HomeBookOpen({
  pickUpDate,
  dropOfDate,
  pickUp,
  dropOf,
  carType,
  imgLink,
  handleReserve,
}) {
  const { isSearchClicked, setSearchClicked } = useContext(CarContext);
  return (
    <>
      {isSearchClicked && (
        <div className="book-open-page">
          <div className="header">
            <span>COMPLETE RESERVATION</span>{" "}
            <button onClick={() => setSearchClicked((prevVal) => !prevVal)}>
              <CloseIcon />
            </button>
          </div>
          <div className="width-80">
            <div className="text">
              <p className="orange-text">
                <span>
                  <InfoIcon />
                </span>{" "}
                Upon completing this reservation enquiry, you will receive:
              </p>
              <p className="low-opa-text">
                Your rental voucher to produce on arrival at the rental desk and
                a toll-free customer support number.
              </p>
            </div>
            <div className="car-info">
              <div className="left-side-info">
                <h2>Location & Date</h2>
                <div className="left-side-info-box">
                  <p>
                    <span>
                      <LocationOnIcon />
                    </span>
                    Pick-Up Date & Time
                  </p>
                  <div className="time-picker">
                    <p>{pickUpDate}</p>
                  </div>
                </div>
                <div className="left-side-info-box">
                  <p>
                    <span>
                      <LocationOnIcon />
                    </span>
                    Drop-Off Date & Time
                  </p>
                  <div className="time-picker">
                    <p>{dropOfDate}</p>
                  </div>
                </div>
                <div className="left-side-info-box">
                  <p>
                    <span>
                      <LocationOnIcon />
                    </span>
                    Pick-Up Location
                  </p>
                  <div className="time-picker">
                    <p>{pickUp}</p>
                  </div>
                </div>
                <div className="left-side-info-box">
                  <p>
                    <span>
                      <LocationOnIcon />
                    </span>
                    Drop-Off Location
                  </p>
                  <div className="time-picker">
                    <p>{dropOf}</p>
                  </div>
                </div>
              </div>
              <div className="right-side">
                <h3>
                  Car - <span>{carType}</span>
                </h3>
                <img src={imgLink}></img>
              </div>
            </div>
            <hr></hr>
            <div className="personal-info">
              <h2>PERSONAL INFORMATIONS</h2>
              <div className="personal-info-box">
                <div className="info-box">
                  <p>
                    First Name<span>*</span>
                  </p>
                  <input
                    placeholder="Enter your first name"
                    type="text"
                  ></input>
                  <p>This field is required</p>
                </div>
                <div className="info-box">
                  <p>
                    Last Name<span>*</span>
                  </p>
                  <input placeholder="Enter your last name" type="text"></input>
                  <p>This field is required</p>
                </div>
              </div>
              <div className="personal-info-box">
                <div className="info-box">
                  <p>
                    Phone Number<span>*</span>
                  </p>
                  <input
                    placeholder="Enter your phone number"
                    type="text"
                  ></input>
                  <p>This field is required</p>
                </div>
                <div className="info-box">
                  <p>
                    Age<span>*</span>
                  </p>
                  <input placeholder="18" type="text"></input>
                  <p>This field is required</p>
                </div>
              </div>
              <div className="personal-info-box big-box">
                <div className="info-box big">
                  <p>
                    Email<span>*</span>
                  </p>
                  <input
                    placeholder="Enter your email address"
                    type="text"
                  ></input>
                  <p>This field is required</p>
                </div>
              </div>
              <div className="personal-info-box big-box">
                <div className="info-box big">
                  <p>
                    Address<span>*</span>
                  </p>
                  <input
                    placeholder="Enter your street address"
                    type="text"
                  ></input>
                  <p>This field is required</p>
                </div>
              </div>
              <div className="personal-info-box">
                <div className="info-box">
                  <p>
                    City<span>*</span>
                  </p>
                  <input placeholder="Enter your city" type="text"></input>
                  <p>This field is required</p>
                </div>
                <div className="info-box">
                  <p>
                    Zip Code<span>*</span>
                  </p>
                  <input placeholder="Enter your zip code" type="text"></input>
                  <p>This field is required</p>
                </div>
              </div>
              <div className="latest-box">
                <Checkbox {...label} />
                <span>Please send me latest news and updates</span>
              </div>
            </div>
            <div className="reserve-box">
              <button onClick={() => handleReserve()}>Reserve Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
