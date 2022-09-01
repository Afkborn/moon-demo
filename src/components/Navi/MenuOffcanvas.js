import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { connect } from "react-redux";
import { Container, Col, Row, Table } from "reactstrap";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";

class MenuOffcanvas extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    this.props.actions.getCategories();
    
  }

  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
    this.handleClose();
  };

  render() {
    return (
      <>
        <div onClick={this.handleShow} className="link-black">
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

        <Offcanvas show={this.state.show} onHide={this.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h2>Menü</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Table borderless hover responsive>
              <tbody>
                <tr>
                  <td>
                    <h3 className="menu-item" onClick={() => this.selectCategory({})}>Ana Sayfa</h3>
                  </td>
                </tr>
                {this.props.categories.map((category) => (
                  <tr
                    key={category.id}
                    className="menu-item"
                    onClick={() => this.selectCategory(category)}
                  >
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
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuOffcanvas);
