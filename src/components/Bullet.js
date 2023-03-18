import React, { Component } from "react";
import "./Bullet.css";

class Bullet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 90,
    };
  }

  componentDidMount() {
    this.moveInterval = setInterval(() => {
      this.setState((prevState) => ({
        top: prevState.top - 2,
      }));
    }, 50);
  }

  componentDidUpdate() {
    const { top } = this.state;

    if (top <= 0) {
      clearInterval(this.moveInterval);
      this.props.removeBullet(this.props.id); // Call removeBullet as a prop
    }
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  render() {
    const { leftPixels, id } = this.props;
    const { top } = this.state;

    return (
      <div
        id={id}
        className="bullet"
        style={{
          left: `${leftPixels}px`,
          top: `${top}%`,
        }}
      ></div>
    );
  }
}

export default Bullet;
