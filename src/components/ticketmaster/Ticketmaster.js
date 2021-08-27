import React, { useState, useEffect } from "react";
import Ticketcards from "./Ticketcards";
import { Row, Container } from "reactstrap";

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";
const key = "eASoc2QfDtfVH27OgEytDVmfPMzrJJyg";

const Ticketmaster = () => {
  const [event, setEvent] = useState("");
  // const [venue, setVenue] = useState("");

  //   const findMyLocation = () => {
  //     const status = document.querySelector("status");

  //     const success = (position) => {
  //       console.log(position);
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;

  //       const geoApiUrl = `https:.//api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  //       fetch(geoApiUrl)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //         });
  //     };
  //     const error = () => {
  //       status.textContent = "Unable to Find You";
  //     };
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   };

  //   document
  //     .querySelector(".find-state")
  //     .addEventListener("click", findMyLocation);

  const fetchResults = () => {
    const url = `${baseUrl}?apikey=${key}&latlong=39.8471865,-86.3986222`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvent(data._embedded.events));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div style={{ border: "10px solid blue", padding: "5px" }}>
      <h1 style={{ textAlign: "center", color: "purple" }}>
        Events At A Venue Near You
      </h1>
      <h2 class="status"></h2>
      <button
        class="find-location"
        style={{
          color: "blue",
          background: "pink",
          border: "1px solid pink",
          borderRadius: "20px",
          fontSize: "30px",
          margin: "50px",
        }}
      >
        Find Me!
      </button>
      <br />
      <Container>
        <Row sm="5">
          {event.length > 0
            ? event.map((activity, index) => (
                <Ticketcards activity={activity} />
              ))
            : "loading"}
        </Row>
      </Container>
    </div>
  );
};

export default Ticketmaster;
