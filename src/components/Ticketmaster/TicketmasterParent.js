import React, { useState, useEffect } from "react";
import Ticketcards from "./Ticketcards";
import { Row, Container } from "reactstrap";

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";
const key = "eASoc2QfDtfVH27OgEytDVmfPMzrJJyg";

const TicketmasterParent = (props) => {
  const [event, setEvent] = useState("");
  let latitude = props.lat;
  let longitude = props.long;

  // console.log(latitude);
  // console.log(longitude);

  const fetchResults = () => {
    const url = `${baseUrl}?apikey=${key}&latlong=${latitude},${longitude}`;
    fetch(url)
      .then((res) => res.json())

      .then((data) => {
        setEvent(data._embedded.events);
      });
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div
      className="eventsdiv"
      style={{
        border: "1px solid #d3d3d3",
        // margin: "250px",
        marginTop: "70px",
        marginLeft: "25%",
        paddingTop: "20px",
        textAlign: "center",
        width: "50vw",
      }}
    >
      <h1 style={{ textAlign: "center", color: "black" }}>Events</h1>{" "}
      <img
        src={`https://icon-library.com/images/calendar-icon-transparent/calendar-icon-transparent-16.jpg`}
        className="temp-icon"
        alt="temp icon"
      />{" "}
      &nbsp;&nbsp;
      <img
        src={`https://static.thenounproject.com/png/2228292-200.png`}
        className="temp-icon"
        alt="temp icon"
      />{" "}
      &nbsp;&nbsp;
      <img
        src={`https://static.thenounproject.com/png/1532064-200.png`}
        className="temp-icon"
        alt="temp icon"
      />{" "}
      &nbsp;&nbsp;
      <img
        src={`http://www.zateefintl.com/wp-content/uploads/2020/02/sports-ball-sport-football-rugby-soccer-education-512.png`}
        className="temp-icon"
        alt="temp icon"
      />{" "}
      &nbsp;&nbsp;
      <img
        src={`https://image.flaticon.com/icons/png/512/1628/1628096.png`}
        className="temp-icon"
        alt="temp icon"
      />{" "}
      &nbsp;&nbsp;
      <br></br>
      <br></br>
      <h3 className="eventstext">
        These are the events near you based on your current location!
      </h3>
      <br></br>
      <Container>
        <Row sm="4">
          {event.length > 0
            ? event.map((activity) => <Ticketcards activity={activity} />)
            : "loading"}
        </Row>
      </Container>
    </div>
  );
};

export default TicketmasterParent;
