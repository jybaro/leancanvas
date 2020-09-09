import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render = () => {
    return (
      <div className="navbar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>{this.props.form.name}</div>
      </div>
    );
  };
}

export default Navbar;
