import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Ticketcards = (props) => {
  return (
    <div>
      <Col>
        <Card body>
          <CardTitle tag="h5">Event</CardTitle>
          <CardText>{props.activity.name}</CardText>
        </Card>
      </Col>
    </div>
  );
};
export default Ticketcards;
