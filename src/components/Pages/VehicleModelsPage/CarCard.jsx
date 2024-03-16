import React from "react";
import ToysIcon from "@mui/icons-material/Toys";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function CarCard({
  name,
  price,
  img,
  model,
  mark,
  year,
  doors,
  air,
  transmission,
  fuel,
}) {
  const [value, setValue] = React.useState(4);
  return (
    <div className="card-box">
      <img src={img} alt="carphoto"></img>
      <div className="boxz">
        <h2>{name}</h2>
        <h2>${price}</h2>
      </div>
      <div className="boxz">
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={value} readOnly />
        </Box>
        <p>per day</p>
      </div>
      <div className="boxz">
        <p>
          <ToysIcon /> <span>{model}</span>
        </p>
        <p>
          <span>{doors}</span> <ToysIcon />
        </p>
      </div>
      <div className="boxz">
        <p>
          <ToysIcon /> <span>{transmission}</span>
        </p>
        <p>
          <span>{fuel}</span> <ToysIcon />
        </p>
      </div>
      <hr></hr>
      <div className="go-home">
        <Link to="/">Book Ride</Link>
      </div>
    </div>
  );
}

export default CarCard;
