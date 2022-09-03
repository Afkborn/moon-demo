import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { connect } from "react-redux";
import { Container, Col, Row, Table } from "reactstrap";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import * as spinnerActions from "../../redux/actions/spinnerActions";
import { bindActionCreators } from "redux";
import { Link, withRouter } from "react-router-dom";
import {compose} from 'redux';
import PropTypes from "prop-types";

class MenuOffcanvas extends Component {
  state = {
    show: false,
  };
  static propTypes = {
    history: PropTypes.object.isRequired
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
    this.props.actions.showSpinner();
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
    this.props.history.push('/');
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

        <Offcanvas
          show={this.state.show}
          onHide={this.handleClose}
          className="offcanvas-design"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Table borderless hover responsive>
              <tbody>
                <tr className="menu-item">
                  <td onClick={() => this.selectCategory({})}>
                    <Link className="link-black" to="/">
                      <h3 className="menu-item-text">Ana Sayfa</h3>
                    </Link>
                  </td>
                </tr>

                {this.props.categories.map((category) => (
                  <tr
                    key={category.id}
                    className="menu-item"
                    onClick={() => this.selectCategory(category)}
                  >
                    <td>
                      <Link className="link-black" to="/">
                        <img
                          src={category.img}
                          style={{ height: 60, width: 60 }}
                          alt={category.name}
                        />
                        <span className="menu-item-text">
                          {" "}
                          {category.name}{" "}
                        </span>
                      </Link>
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
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      showSpinner: bindActionCreators(spinnerActions.showSpinner, dispatch),
      hideSpinner: bindActionCreators(spinnerActions.hideSpinner, dispatch),
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MenuOffcanvas);

// export default connect(mapStateToProps, mapDispatchToProps)(MenuOffcanvas);
