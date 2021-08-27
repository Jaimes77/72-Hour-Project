import React, { useState, useEffect } from "react";
import Ticketcards from "./Ticketcards";
import { Row, Container } from "reactstrap";

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";
const key = "eASoc2QfDtfVH27OgEytDVmfPMzrJJyg";

const Ticketmaster = () => {
  const [event, setEvent] = useState("");

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
    <>
      Hello from Ticketmaster
      <h1>Events Near You</h1>
      <Container>
        <Row sm="6">
          {event.length > 0
            ? event.map((activity, index) => (
                <Ticketcards activity={activity} />
              ))
            : "loading"}
        </Row>
      </Container>
    </>
  );
};

export default Ticketmaster;
