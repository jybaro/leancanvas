import React from "react";
import Navbar from "../components/Navbar";
import NewForm from "../components/NewForm";

class New extends React.Component {
  render = () => (
    <div>
      <Navbar onChange={this.props.onChange} />
      <NewForm
        onChange={this.props.onNewFormChange}
        onSubmit={this.props.onNewFormSubmit}
        newFormValues={this.props.newFormValues}
      />
    </div>
  );
}

export default New;
