import React from "react";
import "./Account.css";
import cart from "../Account/cart.png"

function Account() {
  return (
    <div className="top-bar">
      <div className="free-shipping">
        FREE SHIPPING ON ALL ORDERS OVER RS 10,000
      </div>

      <div className="right-side">
        <div className="account">
          <a href="#" className="dropdown">
            My Account ▼
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">My Dashboard</a>
            </li>
            <li>
              <a href="#">Account Information</a>
            </li>
            <li>
              <a href="#">Address Book</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
          </ul>
        </div>
        <div className="cart">
            <a href=""><img src={cart} alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Account;
