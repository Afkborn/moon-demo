import React from "react";
import { Nav, Container, Row, Col } from "reactstrap";
import { Component } from "react";
import { connect } from "react-redux";

import MenuButton from "../Menu/MenuButton";
import "../../styles/App.css";
import Account from "../common/Account";
import Basket from "../common/Basket";
import Brand from "../common/Brand";
class Navi extends Component {
  render() {
    return (
      <Container fluid className="mt-4">
        <Row>
          <Col xs="3">
            <Nav className="me-auto">
              <MenuButton></MenuButton>
            </Nav>
          </Col>
          <Col xs="6" className="text-center ">
            <Brand></Brand>
          </Col>
          <Col xs="3">
            <Row>
              <Col md="6" sm="2" lg="8"></Col>
              <Col xs="5" sm="4" md="3" lg="2">
                <Account></Account>
              </Col>
              <Col xs="5" sm="4" md="3" lg="2">
                <Basket></Basket>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Navi);
