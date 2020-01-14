import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ loggedIn, admin }) => {
  const HideHeader = admin ? false : (
    <li>
    <NavLink activeClassName="active" to="/admin">
      Admin
    </NavLink>
    </li>
  );

  const userHeaders = loggedIn ? (
    <li>
      <NavLink activeClassName="active" to="/movie">
        Movie
      </NavLink>
    </li>
  ) : (
    <li>
      <NavLink activeClassName="active" to="/createUser">
        Create User
      </NavLink>
    </li>
  );
  return (
    <ul className="header">
      <li>
        <NavLink activeClassName="active" to="/Home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/login">
          Log In
        </NavLink>
      </li>
      {userHeaders}
      {HideHeader}
    </ul>
  );
};

export default Header;
