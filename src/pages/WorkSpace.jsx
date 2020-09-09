import React from "react";
import Canvas from "../components/Canvas";

class WorkSpace extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Canvas form={this.props.form} />
      </React.Fragment>
    );
  }
}

export default WorkSpace;
