import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        DASHBOARD
        <h1>{this.props.currentCategory.name}</h1>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories : state.categoryReducer,
    currentCategory: state.changeCategoryReducer
  };
}

export default connect(mapStateToProps)(Dashboard);
