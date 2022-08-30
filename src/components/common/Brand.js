import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Brand extends Component {
  render() {
    return (
      <Link className="link-black brand " to="/">
        Moon
      </Link>
    );
  }
}
