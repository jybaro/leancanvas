import React from "react";

class Navbar extends React.Component {
  render = () => {
    return (
      <div>
        <a href="#" onClick={this.props.onChange}>
          Return
        </a>
      </div>
    );
  };
}

export default Navbar;
