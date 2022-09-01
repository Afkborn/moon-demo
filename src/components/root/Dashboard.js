import React, { Component } from "react";
import { connect } from "react-redux";

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
      <div>
        <h1>{this.props.currentCategory.name}</h1>
        {this.props.products.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    );
  };

  render() {
    return <div>
      {this.props.currentCategory.name ? this.returnRenderCategory() : this.returnIndex()}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categoryReducer,
    currentCategory: state.changeCategoryReducer,
    products: state.productReducer
  };
}

export default connect(mapStateToProps)(Dashboard);
