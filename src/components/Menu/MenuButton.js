import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";


export default class MenuButton extends Component {
  render() {
    return (
      <div>

        <Link>
        <Container>
          <Col>
            <Row xs="5">
              <Col>
                <span className="menu-line link-black">
                  <i>I</i>
                  <i>I</i>
                  <i>I</i>
                </span>
              </Col>
            </Row>
          </Col>
        </Container>
        </Link>

      </div>
    );
  }
}
