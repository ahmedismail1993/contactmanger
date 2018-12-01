import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {props.branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home" /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fas fa-question" /> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact/add">
                  <i className="fas fa-plus" /> Add Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
