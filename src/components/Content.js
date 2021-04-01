import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import Description from "./Description";

const Content = () => {
  return (
    <Container>
      <Row>
        <Col style={{ border: "1px solid black" }} lg="3" md="3" sm="12">
          <SideBar />
        </Col>
        <Col style={{ border: "1px solid black" }} lg="9" md="9" sm="12">
          <Description />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
