import React from "react";
import New from "./New";
import WorkSpace from "./WorkSpace";

class Home extends React.Component {
  state = {
    page: "Home",
    form: {
      title: "",
      name: "",
      email: "",
    },
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      page: "WorkSpace",
    });
    console.log(this.state);
  };
  handleNewClick = (e) => {
    e.preventDefault();
    this.setState({
      page: "New",
    });
  };
  handleNavChange = (e) => {
    console.warn("en handleNavChange");
    this.setState({
      page: "Home",
    });
  };
  handleNewFormChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleNewFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      page: "WorkSpace",
    });
  };

  render = () => {
    return (
      <div>
        {this.state.page === "Home" && (
          <div>
            <h1>Home</h1>
            <div>
              <a href="#" onClick={this.handleClick}>
                WorkSpace
              </a>
            </div>
            <div>
              {" "}
              <a href="#" onClick={this.handleNewClick}>
                New
              </a>
            </div>
          </div>
        )}
        {this.state.page === "WorkSpace" && (
          <WorkSpace onChange={this.handleNavChange} form={this.state.form} />
        )}
        {this.state.page === "New" && (
          <New
            onChange={this.handleNavChange}
            onNewFormChange={this.handleNewFormChange}
            onNewFormSubmit={this.handleNewFormSubmit}
            newFormValues={this.state.form}
          />
        )}
      </div>
    );
  };
}

export default Home;
