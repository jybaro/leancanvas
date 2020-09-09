import React from "react";
import { Link } from "react-router-dom";

class NewForm extends React.Component {
  handleSubmit = () => {};
  render = () => (
    <React.Fragment>
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.newFormValues.title}
            name="title"
            placeholder="Example: My new canvas"
          />
        </div>
        <div>
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            onChange={this.props.onChange}
            value={this.props.newFormValues.name}
            name="name"
            placeholder="Example: John Smith"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={this.props.onChange}
            value={this.props.newFormValues.email}
            name="email"
            placeholder="Example: my@email.com"
          />
        </div>
        {this.props.newFormValues.title &&
          this.props.newFormValues.name &&
          this.props.newFormValues.email && (
            <div>
              <Link to="/workspace">Generate new canvas</Link>
            </div>
          )}
      </form>
    </React.Fragment>
  );
}
export default NewForm;
