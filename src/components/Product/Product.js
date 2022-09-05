import React, { Component } from "react";
import { connect } from "react-redux";
import SpinnerCustom from "../common/SpinnerCustom";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";
import { Container } from "reactstrap";
import { Row, Col } from "reactstrap";

class Product extends Component {
  checkLoading() {
    if (this.props.spinnerStatus) {
      return <SpinnerCustom />;
    } else {
      return this.renderProduct();
    }
  }
  componentDidMount() {
    this.props.actions.getProduct(this.props.productId);
  }

  renderProduct = () => {
    return (
      <Container fluid>
        <div className="product">
          <Row>
            <Col xs="7" className="text-center">
              <img src={this.props.product.img} alt="Ürün fotoğrafı" />
            </Col>
            <Col xs="5" className="mt-5">
              <div className="mt-5">
                <h3 className="product-name">{this.props.product.name}</h3>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  };

  render() {
    return <div>{this.checkLoading()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  return {
    productId,
    spinnerStatus: state.spinnerReducer,
    product: state.productReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProduct: bindActionCreators(productActions.getProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
