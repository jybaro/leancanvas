import React from "react";

import Block from "./Block";
import Mailto from "./Mailto";

import imageone from "../assets/static/images/imageone.png";
import imagetwo from "../assets/static/images/2-problem.png";
import imagethree from "../assets/static/images/3-uvp.png";
import imagefour from "../assets/static/images/4-solution.png";
import imagefive from "../assets/static/images/5-channels.png";
import imagesix from "../assets/static/images/6-income.png";
import imageseven from "../assets/static/images/7-outcomes.png";
import imageeight from "../assets/static/images/8-metrics.png";
import imagenine from "../assets/static/images/9-unfair.png";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [
        {
          title: "Customer Segments",
          imageUrl: imageone,
          description: "",
          extra: {
            title: "Early adopters",
            description: "",
          },
        },
        {
          title: "Problems",
          imageUrl: imagetwo,
          description: "",
          extra: {
            title: "Bypass",
            description: "",
          },
        },
        {
          title: "Unique Value Proposition",
          imageUrl: imagethree,
          description: "",
          extra: {
            title: "Slogan",
            description: "",
          },
        },
        {
          title: "Solution",
          imageUrl: imagefour,
          description: "",
        },
        {
          title: "Channels",
          imageUrl: imagefive,
          description: "",
        },
        {
          title: "Incomes",
          imageUrl: imagesix,
          description: "",
        },
        {
          title: "Outcomes",
          imageUrl: imageseven,
          description: "",
        },
        {
          title: "Metrics",
          imageUrl: imageeight,
          description: "",
        },
        {
          title: "Unfair Advantage",
          imageUrl: imagenine,
          description: "",
        },
      ],
    };
  }

  render = () => (
    <React.Fragment>
      <div>
        <h1>{this.props.form.title}</h1> by{" "}
        <Mailto email={this.props.form.email}>{this.props.form.name}</Mailto>
      </div>
      <div className="container">
        {this.state.blocks.map((blockData, index) => (
          <Block key={index} number={index + 1} blockData={blockData}></Block>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Canvas;
