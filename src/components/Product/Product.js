import React, { Component } from "react";
import { connect } from "react-redux";
import SpinnerCustom from "../common/SpinnerCustom";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";
import { Container,  Row, Col } from "reactstrap";
import { Image } from "react-bootstrap";

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
            <Col xs={12} sm={12}  md={12} lg={8} className="text-center">
              <div className="text-center">
                <Image  fluid src={"/media/"+this.props.product.showcaseImageId + "?type=800w"} alt="Ürün fotoğrafı" /> 
                {/* {"/media/main/" + oldProduct.imageId} */}
              </div>
            </Col>
            <Col  xs={12} sm={12}  md={12} lg={4} className="mt-5">
              {/* PRODUCT DETAIL SIDE*/}
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
