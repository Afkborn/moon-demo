import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Index from "./Index";
import SpinnerCustom from "../common/SpinnerCustom";

class Dashboard extends Component {
  checkLoading() {
    if (this.props.spinnerStatus) {
      return <SpinnerCustom/>;
    } else {
      return this.returnRenderCategory();
    }
  }

  returnRenderCategory = () => {
    return (
      <div className="products mt-4">
        <Row>
          {this.props.products.map((product) => (
            <Col md={4} lg={4} sm={4} xs={12} key={product.id} className="mt-3">
              <Link className="link-black" to={"/products/" + product.id}>
                <Card outline color="light" className="menu-item">
                  <img src={product.img} alt="Ürün fotoğrafı" />
                  <CardBody>
                    <CardTitle className="text-center" tag="h4">
                      {product.name}
                    </CardTitle>
                    <CardTitle className="text-center" tag="h5">
                      <strong>{product.price} TL</strong>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Link>
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
    products: state.productReducer,
    spinnerStatus: state.spinnerReducer,
  };
}

export default connect(mapStateToProps)(Dashboard);
