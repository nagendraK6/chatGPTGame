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
    if (this.props.key !== prevProps.key) {
      this.setState({ left: this.randomPosition() });
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
