import React, { useContext, useEffect } from "react";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ToysIcon from "@mui/icons-material/Toys";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CarContext } from "../../Context/CarContext";
import useWindowDimensions from "../../useWindowDimensions/useWindowDimensions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import HomeBookOpen from "./HomeBookOpen";

export default function HomeBookCar() {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOfDate, setDropOfDate] = useState("");
  const { isSearchClicked, setSearchClicked } = useContext(CarContext);
  const [openErrorCard, setOpenErrorCard] = useState(false);
  const { carArr } = useContext(CarContext);
  const { width } = useWindowDimensions();
  const [imgLink, setImgLink] = useState("");
  const [isReserveClicked, setReserveClicked] = useState(false);
  useEffect(() => {
    // This block will run whenever isSearchClicked is updated
    if (isSearchClicked) {
      carArr.forEach((item) => {
        item.forEach((item1) => {
          if (item1.name === carType) {
            setImgLink(item1.img);
          }
        });
      });

      console.log(imgLink);
      setOpenErrorCard(false);
    }
  }, [isSearchClicked, carArr, carType, imgLink]);
  function handleReserve() {
    setReserveClicked(true);
    setSearchClicked(false);
  }
  return (
    <div className="home-book-container">
      <HomeBookOpen
        pickUpDate={pickUpDate}
        dropOfDate={dropOfDate}
        pickUp={pickUp}
        dropOf={dropOf}
        carType={carType}
        imgLink={imgLink}
        handleReserve={handleReserve}
      />
      <div className="home-book-box">
        <h2>Book a car</h2>
        {openErrorCard && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">You have to fill all box !</Alert>
          </Stack>
        )}
        {isReserveClicked && (
          <Stack sx={{ width: "100%", display: "flex" }} spacing={2}>
            <Alert sx={{ fontSize: "20px" }} severity="success">
              Check your email to confirm an order.
            </Alert>
          </Stack>
        )}
        <div className="book-boxs">
          <div className="book-box">
            <div className="book-text">
              <ToysIcon />
              <span>
                Select Your Car Type
                <span>*</span>
              </span>
            </div>

            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <InputLabel id="demo-select-small-label">
                Select Your Car Type
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={carType}
                label="Car Type"
                onChange={(e) => {
                  setCarType(() => e.target.value);
                  setSearchClicked(false);
                  console.log(carType);
                }}
              >
                <MenuItem value="">
                  <em>Select your car type</em>
                </MenuItem>
                <MenuItem value="Audi A1 S-Line">Audi A-1 S-Line</MenuItem>
                <MenuItem value="VW Golf 6">VW Golf 6</MenuItem>
                <MenuItem value="Toyota Camry">Toyota Camry</MenuItem>
                <MenuItem value="BMW 320 ModernLine">
                  BMW 320 ModernLine
                </MenuItem>
                <MenuItem value="Mercedes-Benz GLK">Mercedes-Benz GLK</MenuItem>
                <MenuItem value="VW Passat CC">VW Passat CC</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="book-box">
            <div className="book-text">
              <LocationOnIcon />
              <span>
                Pick-up
                <span>*</span>
              </span>
            </div>

            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <InputLabel id="demo-select-small-label">
                Select pick up location
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={pickUp}
                label="Pick Up"
                onChange={(e) => {
                  setPickUp(e.target.value);
                  setSearchClicked(false);
                }}
              >
                <MenuItem value="">
                  <em>Select pick up location</em>
                </MenuItem>
                <MenuItem value="Belgrade">Belgrade</MenuItem>
                <MenuItem value="Novi Sad">Novi Sad</MenuItem>
                <MenuItem value="Nis">Nis</MenuItem>
                <MenuItem value="Krajugevac">Kragujevac</MenuItem>
                <MenuItem value="Subotica">Subotica</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="book-box">
            <div className="book-text">
              <LocationOnIcon />
              <span>
                Drop-of
                <span>*</span>
              </span>
            </div>

            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
              <InputLabel id="demo-select-small-label">
                Select drop off location
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={dropOf}
                label="Drop Of"
                onChange={(e) => {
                  setDropOf(e.target.value);
                  setSearchClicked(false);
                }}
              >
                <MenuItem value="">
                  <em>Select pick up location</em>
                </MenuItem>
                <MenuItem value="Novi Sad">Novi Sad</MenuItem>
                <MenuItem value="Belgrade">Belgrade</MenuItem>
                <MenuItem value="Nis">Nis</MenuItem>
                <MenuItem value="Krajugevac">Kragujevac</MenuItem>
                <MenuItem value="Subotica">Subotica</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="book-box">
            <div className="book-text">
              <DateRangeIcon />
              <span>
                Pick-up
                <span>*</span>
              </span>
            </div>
            <div className="date-box">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  sx={{ ml: 1, width: "100%" }}
                  components={["DateTimePicker"]}
                >
                  <DateTimePicker
                    sx={{
                      ml: 1,
                      minWidth: 200,
                      width: `95%`,
                      height: `100%`,
                    }}
                    onChange={(e) => {
                      const val = e.format();
                      setPickUpDate(val);
                      setSearchClicked(false);
                    }}
                    label="mm / dd / yy"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="book-box">
            <div className="book-text">
              <DateRangeIcon />
              <span>
                Drop-of
                <span>*</span>
              </span>
            </div>
            <div className="date-box">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  sx={{ ml: 1, width: "100%" }}
                  components={["DateTimePicker"]}
                >
                  <DateTimePicker
                    sx={{ ml: 1, minWidth: 250, width: `95%` }}
                    onChange={(e) => {
                      const val = e.format();
                      setDropOfDate(val);
                      setSearchClicked(false);
                    }}
                    label="mm / dd / yy"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="book-box button">
            <button
              className="book-btn"
              onClick={() => {
                if (
                  pickUp !== "" &&
                  dropOf !== "" &&
                  carType !== "" &&
                  dropOfDate !== "" &&
                  pickUpDate !== ""
                ) {
                  setSearchClicked((prevVal) => !prevVal);
                  setOpenErrorCard(false);
                } else {
                  setOpenErrorCard(true);
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
