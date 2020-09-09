import React from "react";
import NewForm from "../components/NewForm";

class New extends React.Component {
  render = () => (
    <React.Fragment>
      <NewForm
        onChange={this.props.onNewFormChange}
        newFormValues={this.props.newFormValues}
      />
    </React.Fragment>
  );
}

export default New;
