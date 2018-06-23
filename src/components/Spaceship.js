// Code The Spaceship Component Here

import React from "react";
import ReactDOM from "react-dom";

export default class SpaceShip extends React.Component {
  render() {
    return (
      <div className="spaceship-card">
        <h3>{this.props.name}</h3>
        <h2>{this.props.speed}</h2>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    );
  }
}

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};

ReactDOM.render(<SpaceShip name="Falcon" />, document.getElementById("global"));
