import React, { Component } from "react";
import { Link } from "react-router-dom";
import Basket from "../../icons/basket.svg";
export default class BasketButton extends Component {
  render() {
    return (
      <div>
        <Link to="/basket">
          <img
            src={Basket}
            style={{ height: 40, width: 30 }}
            alt="Basket"
            className="link-black"
          />
        </Link>
      </div>
    );
  }
}
