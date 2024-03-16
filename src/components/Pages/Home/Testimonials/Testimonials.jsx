import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
export default function Testimonials() {
  return (
    <section className="testi-container">
      <div className="testi-box">
        <div className="testi-text">
          <h4>Reviewed by People</h4>
          <h2>Client's Testimonials</h2>
          <p>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="testi-comments">
          <div className="comment-box">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="comment-avatar">
              <Stack className="stack" direction="row" spacing={2}>
                <Avatar
                  style={{ height: "70px", width: "70px" }}
                  alt="Remy Sharp"
                  src="../images/testimonials/pfp1.jpg"
                />
                <div className="name">
                  <h5>Parry Hotter</h5>
                  <p>Belgrade</p>
                </div>
              </Stack>

              <svg
                style={{ color: "#ff4d30" }}
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-quote"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
          </div>
          <div className="comment-box">
            <p>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="comment-avatar">
              <Stack className="stack" direction="row" spacing={2}>
                <Avatar
                  style={{ height: "70px", width: "70px" }}
                  alt="Remy Sharp"
                  src="../images/testimonials/pfp2.jpg"
                />
                <div className="name">
                  <h5>Parry Hotter</h5>
                  <p>Belgrade</p>
                </div>
              </Stack>

              <svg
                style={{ color: "#ff4d30" }}
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-quote"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
