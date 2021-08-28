import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText, Col } from "reactstrap";

const Ticketcards = (props) => {
  // console.log(props.activity);
  return (
    <div>
      <Col>
        <Card
          style={{
            // border: "5px black solid",
            margin: "5px",
          }}
        >
          <CardImg
            top
            width="100%"
            height="200px"
            src={props.activity.images[0].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardText
              className="cardText"
              style={{ color: "black", textAlign: "center" }}
            >
              {props.activity.name}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};
export default Ticketcards;
