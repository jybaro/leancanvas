import React from "react";
import "../assets/styles/App.scss";
import { Link } from "react-router-dom";

import RMCharacterResume from "../components/RMCharacterResume";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: { results: [] },
      page: 1,
    };
  }
  componentDidMount = () => {
    console.warn("componentDidMount");
    this.fetchCharacters();
  };
  fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null,
    });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        error: null,
        data: {
          results: this.state.data.results.concat(data.results),
        },
        page: this.state.page + 1,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };
  loadMore = (e) => {
    this.setState({
      loading: true,
    });
    this.fetchCharacters();
  };
  render = () => {
    return (
      <React.Fragment>
        <h1>Lean Canvas Generator</h1>
        <div>
          {this.props.form.title && this.props.form.name && (
            <Link to="workspace">Return to WorkSpace</Link>
          )}
        </div>
        <div>
          <Link to="new">New</Link>
        </div>
        <div>
          <Link to="list">List</Link>
        </div>
        <h1>Rick and Morty</h1>

        <div className="RM__character__list">
          {this.state.data.results.map((character, index) => (
            <RMCharacterResume character={character} key={index} />
          ))}
        </div>
        {this.state.loading ? (
          "Loading..."
        ) : this.state.error ? (
          this.state.error.message
        ) : (
          <button className="RM__loadMore" onClick={this.loadMore}>
            LOAD MORE
          </button>
        )}
      </React.Fragment>
    );
  };
}

export default Home;
