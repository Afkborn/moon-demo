import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Brand extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  selectCategory = () => {
    this.props.actions.changeCategory({});
    this.props.history.push("/");
  };

  render() {
    return (
      <span className="link-black brand" onClick={() => this.selectCategory()}>
        Moon
      </span>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
    },
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Brand);
