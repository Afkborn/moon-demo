import React, { Component } from "react";
import { Link } from "react-router-dom";
import Account from "../../icons/account.svg";
export default class AccountButton extends Component {
  render() {
    return (
      <div>
        <Link to="/account">
          <img
            src={Account}
            style={{ height: 40, width: 30 }}
            alt="website logo"
          />
        </Link>
      </div>
    );
  }
}
