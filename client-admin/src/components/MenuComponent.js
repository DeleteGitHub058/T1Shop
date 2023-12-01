import React, { Component } from "react";
import MyContext from "../contexts/MyContext";
import { Link, NavLink } from "react-router-dom";
class Menu extends Component {
  static contextType = MyContext; // using this.context to access global state
  render() {
    return (
      <div className="border-bottom bg-dark">
        <div className="float-left topnav">
          <ul className="menu">
            <li className="menu">
              <NavLink to="/admin/home" exact={true}>Home</NavLink>
            </li>
            <li className="menu">
              <NavLink to='/admin/category'>Category</NavLink>
            </li>
            <li className="menu">
              <NavLink to="/admin/product">Product</NavLink>
            </li>
            <li className="menu">
              <NavLink to='/admin/order'>Order</NavLink>
            </li>
            <li className="menu">
              <NavLink to='/admin/customer'>Customer</NavLink>
            </li>
          </ul>
        </div>
        <div className="float-right topnav flex">
          Hello{" "} <b>{this.context.username}</b> |{" "}
          <Link to="/admin/home"
            onClick={() => this.lnkLogoutClick()
            }>
            Logout
          </Link>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken("");
    this.context.setUsername("");
  }
}
export default Menu;
