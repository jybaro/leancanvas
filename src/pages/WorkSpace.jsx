import React from "react";
import Navbar from "../components/Navbar";
import Canvas from "../components/Canvas";

class WorkSpace extends React.Component {
  render() {
    return (
      <div>
        <Navbar onChange={this.props.onChange} />
        <Canvas form={this.props.form} />
      </div>
    );
  }
}

export default WorkSpace;
