import React from "react";

class Block extends React.Component {
  render = () => (
    <div className="container__item">
      <div className="container__item__header">
        <div className="container__item__title">
          {this.props.number}. {this.props.blockData.title}
        </div>
        <img
          className="container__item__img"
          src={this.props.blockData.imageUrl}
          alt={this.props.blockData.title}
        />
        <div className="container__item__description">
          {this.props.blockData.description}
        </div>
      </div>
      <div className="container__item__body"></div>
      {this.props.blockData.extra && (
        <div className="container__item__footer">
          {this.props.blockData.extra.title}
        </div>
      )}
    </div>
  );
}

export default Block;
