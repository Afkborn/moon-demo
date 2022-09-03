import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col, Spinner } from "reactstrap";
import Index from "./Index";
class Dashboard extends Component {
  returnRenderCategory = () => {
    return (
      <div className="products mt-4">
        <Row>
          {this.props.products.map((product) => (
            <Col md={4} lg={4} sm={4} xs={12} key={product.id} className="mt-3">
              <Card outline color="light" className="menu-item">
                <img src={product.img} alt="alksjd" />
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
          this.returnRenderCategory()
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
  };
}

export default connect(mapStateToProps)(Dashboard);
