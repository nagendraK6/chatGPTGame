import React, { Component } from "react";
import "./Bullet.css";

class Bullet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 90,
      isColliding: false,
    };
  }

  componentDidUpdate() {
    const { top } = this.state;

    if (top <= 0) {
      clearInterval(this.moveInterval);
      this.props.removeBullet(this.props.id);
    }
  }

  componentDidMount() {
    this.moveInterval = setInterval(() => {
      this.setState((prevState) => ({
        top: prevState.top - 2,
      }));

      const { id, removeBullet } = this.props;
      const bulletElement = document.getElementById(id);
      const bulletRect = bulletElement.getBoundingClientRect();
      const enemyElement = document.querySelector(".enemy");
      const enemyRect = enemyElement.getBoundingClientRect();

      if (
        bulletRect.left < enemyRect.right &&
        bulletRect.right > enemyRect.left &&
        bulletRect.top < enemyRect.bottom &&
        bulletRect.bottom > enemyRect.top
      ) {
        this.setState({ isColliding: true });
        this.props.removeBullet(this.props.id);
      }
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  render() {
    const { leftPixels, id } = this.props;
    const { top, isColliding } = this.state;

    return (
      <div
        id={id}
        className={`bullet ${isColliding ? "colliding" : ""}`}
        style={{
          left: `${leftPixels}px`,
          top: `${top}%`,
        }}
      ></div>
    );
  }
}

export default Bullet;
