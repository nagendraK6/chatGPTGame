import React, { Component } from "react";
import "./Enemy.css";

class Enemy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: this.randomPosition(),
    };
  }

  randomPosition = () => {
    return Math.floor(Math.random() * 100);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.enemyKey !== this.props.enemyKey) {
      this.setState({
        left: this.randomPosition(),
      });
    }
  }

  render() {
    const { left } = this.state;

    return (
      <div
        className="enemy"
        style={{
          left: `${left}%`,
        }}
      ></div>
    );
  }
}

export default Enemy;
