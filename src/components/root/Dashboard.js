import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { bindActionCreators } from "redux";
import Index from "./Index";
import SpinnerCustom from "../common/SpinnerCustom";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as spinnerActions from "../../redux/actions/spinnerActions";
import EmptyProductList from "../common/EmptyProductList";
import { Image } from "react-bootstrap";

class Dashboard extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  checkLoading() {
    if (this.props.spinnerStatus) {
      return <SpinnerCustom />;
    } else {
      if (this.props.products.length > 0) {
        return this.renderProductList();
      } else {
        return <EmptyProductList />;
      }
    }
  }

  selectProduct = (product) => {
    this.props.history.push(`/products/${product._id}`);
    this.props.actions.showSpinner();
  };

  renderProductList = () => {
    return (
      <div className="products mt-4">
        <Row>
          {this.props.products.map((product) => (
            <Col
              xs={12}
              sm={4}
              md={4}
              lg={4}
              xl={4}
              xxl={4}
              key={product._id}
              className="mt-3"
            >
              <Card
                outline
                color="light"
                className="menu-item"
                onClick={() => this.selectProduct(product)}
              >
                <Image
                  // use SrcSet for responsive images

                  srcSet={
                    "/media/" +
                    product.showcaseImageId +
                    "?type=400w 400w, /media/" +
                    product.showcaseImageId +
                    "?type=800w 800w, /media/" +
                    product.showcaseImageId +
                    "?type=1200w 1200w"
                  }
                  sizes="(max-width: 400px) 400px, 800px, 1200px"
                  src={"/media/" + product.showcaseImageId + "?type=1200w"}
                  alt="Ürün fotoğrafı"
                />
                <CardBody>
                  <CardTitle className="text-center" tag="h4">
                    {product.name}
                  </CardTitle>
                  <CardTitle className="text-center" tag="h5">
                    <strong>{product.price} TL</strong>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.currentCategory.name ? (
          this.checkLoading()
        ) : (
          <Index></Index>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    spinnerStatus: state.spinnerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      showSpinner: bindActionCreators(spinnerActions.showSpinner, dispatch),
      hideSpinner: bindActionCreators(spinnerActions.hideSpinner, dispatch),
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
