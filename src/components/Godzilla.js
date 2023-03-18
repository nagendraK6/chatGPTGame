import React, { Component } from "react";
import "./Godzilla.css";

class Godzilla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 50,
    };
    this.godzillaRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { left } = this.state;
    const godzillaElement = this.godzillaRef.current;
    const godzillaRect = godzillaElement.getBoundingClientRect();
    const leftPixels = godzillaRect.left + godzillaRect.width / 2;
    const enemyRef = this.props.enemyRef;

    const stepSize = 1; // Smaller step size for smoother movement

    if (e.key === "ArrowLeft" && left > 0) {
      this.setState({ left: left - stepSize });
    } else if (e.key === "ArrowRight" && left < 100 - stepSize) {
      this.setState({ left: left + stepSize });
    } else if (e.code === "Space") {
      this.props.onShoot(leftPixels, enemyRef);
    }
  };

  render() {
    const { left } = this.state;

    return (
      <div
        ref={this.godzillaRef}
        className="godzilla"
        style={{
          left: `${left}%`,
        }}
      ></div>
    );
  }
}

export default Godzilla;
