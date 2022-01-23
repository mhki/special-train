import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Web Dev Task
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Hotels
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/trips">
                  Trips
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/drivers">
                  Drivers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;