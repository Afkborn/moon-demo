import React, { useState, render } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import { connect } from "react-redux";

import { Container, Col, Row, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

function MenuOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="link-black">
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
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Ürünler</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table borderless hover responsive>
            <tbody>
              <tr>
                <td>test</td>
              </tr>
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default connect()(MenuOffcanvas);
