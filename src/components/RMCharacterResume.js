import React from "react";

class RMCharacterResume extends React.Component {
  render = () => (
    <React.Fragment>
      <div className="RM__character__resume">
        <img src={this.props.character.image} />
        <div>
          {this.props.character.name} - {this.props.character.species} -{" "}
          {this.props.character.status}
        </div>
      </div>
    </React.Fragment>
  );
}

export default RMCharacterResume;
