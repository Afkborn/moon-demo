import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    return (
      <div>
        <h3>Test</h3>
        <h1>{this.props.productId}</h1>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const productId = ownProps.match.params.productId;
  console.log(productId);
  return {
    productId,
  };
}

export default connect(mapStateToProps)(Product);
