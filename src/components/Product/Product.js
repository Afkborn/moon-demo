import React, { Component } from "react";
import { connect } from "react-redux";
import SpinnerCustom from "../common/SpinnerCustom";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";

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
      <div>
        <h1>{this.props.product.id}</h1>
      </div>
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
