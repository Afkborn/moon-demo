import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Basket extends Component {
  render() {
    return (
      <div>
        <Link to="/basket">
          <img
            src="basket.svg"
            style={{ height: 40, width: 30 }}
            alt="website logo"
            className="link-black"

            //   h53 w36
          />
        </Link>
      </div>
    );
  }
}
