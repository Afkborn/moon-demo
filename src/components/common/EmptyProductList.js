import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import PropTypes from "prop-types";

class EmptyProductList extends Component {
  // ne kadar gerekli  tartışılır fakat şimdilik kalsın, ileride gerekirse kaldırılabilir

  static propTypes = {
    history: PropTypes.object.isRequired,
  };
  selectCategory = () => {
    this.props.actions.changeCategory({});
    this.props.history.push("/");
  };

  render() {
    return (
      <Container fluid>
        <div className="text-center mt-5">
          <h1 className="notfound-text">
            {" "}
            Bu kategoriye ait ürün bulunamadı :(
          </h1>
          <div className="mt-5">
            <span
              className=" notfound-link"
              onClick={() => this.selectCategory()}
            >
              Anasayfaya gitmek için tıkla
            </span>
          </div>
        </div>
      </Container>
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
)(EmptyProductList);
