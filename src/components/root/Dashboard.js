import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
class Dashboard extends Component {
  returnIndex = () => {
    return (
      <div>
        <h1>index</h1>
      </div>
    );
  };

  returnRenderCategory = () => {
    return (
      <div className="products mt-4">
        <Row>
          {this.props.products.map((product) => (
            <Col md={4} lg={4} sm={4} xs={12} key={product.id} className="menu-item">
              <Card style={{}}>
                <img src={product.img} />
                <CardBody>
                  <CardTitle className="text-center" tag="h4">
                    {product.name}
                  </CardTitle>
                  <CardTitle className="text-center text-muted" tag="h5">
                    {product.price} TL
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
        {this.props.currentCategory.name
          ? this.returnRenderCategory()
          : this.returnIndex()}
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
