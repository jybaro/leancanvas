import React from "react";

class Mailto extends React.Component {
  render = () => (
    <a href={`mailto:${this.props.email}`}>{this.props.children}</a>
  );
}
export default Mailto;
