import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { connect } from "react-redux";
import { Container, Col, Row, Table } from "reactstrap";

function MenuOffcanvas({ categories }) {
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
              {categories.map((category) => (
                <tr key={category.id}>
                  <td>
                    <img
                      src={category.img}
                      style={{ height: 60, width: 60 }}
                      alt={category.name}
                    />
                    <span className="menu-item-text"> {category.name} </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
  };
}

export default connect(mapStateToProps)(MenuOffcanvas);
