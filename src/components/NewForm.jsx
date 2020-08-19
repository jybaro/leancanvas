import React from "react";

class NewForm extends React.Component {
  render = () => (
    <div>
      <form action="" onSubmit={this.props.onSubmit}>
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
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
export default NewForm;
