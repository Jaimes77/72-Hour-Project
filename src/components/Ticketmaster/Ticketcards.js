import React from "react";
import { CardBody, CardTitle, CardText, Col } from "reactstrap";

const Ticketcards = (props) => {
  return (
    <div>
      <Col>
        <CardBody style={{ border: "1px black solid" }}>
          <CardTitle tag="h5" style={{ color: "green" }}>
            Event
          </CardTitle>
          <CardText style={{ color: "red" }}>{props.activity.name}</CardText>
        </CardBody>
      </Col>
    </div>
  );
};
export default Ticketcards;
