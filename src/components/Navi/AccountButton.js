import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AccountButton extends Component {
  render() {
    return (
      <div > 
        <Link to="/account">
          <img
            src="account.svg"
            style={{ height: 40, width: 30 }}
            alt="website logo"
            
          />
        </Link>
      </div>
    );
  }
}
