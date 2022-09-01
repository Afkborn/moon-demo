import React from "react";
import { Nav, Container, Row, Col } from "reactstrap";
import { Component } from "react";
import { connect } from "react-redux";

import "../../styles/App.css";
import AccountButton from "./AccountButton";
import BasketButton from "./BasketButton";
import Brand from "./Brand";

import MenuOffcanvas from "./MenuOffcanvas";


class Navi extends Component {

  render() {
    return (
      <Container fluid className="mt-4">
        <Row>
          <Col xs="3">
            <Nav className="me-auto">
              <MenuOffcanvas></MenuOffcanvas>
            </Nav>
          </Col>
          <Col xs="6" className="text-center ">
            <Brand></Brand>
          </Col>
          <Col xs="3">
            <Row>
              <Col md="6" sm="2" lg="8"></Col>
              <Col xs="5" sm="4" md="3" lg="2">
                <AccountButton></AccountButton>
              </Col>
              <Col xs="5" sm="4" md="3" lg="2">
                <BasketButton></BasketButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default connect()(Navi);
