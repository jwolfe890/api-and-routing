import { NavLink } from "react-router-dom";
import React from "react";
import "./nav.css";

class Nav extends React.Component {
  state = {
    articleData: ""
  };

  render() {
    return (
      <React.Fragment>
        <NavLink to="/" exact activeClassName="current">
          Home
        </NavLink>
        <br />
        <NavLink to="/images/1" exact activeClassName="current">
          First article
        </NavLink>
      </React.Fragment>
    );
  }
}

export default Nav;
