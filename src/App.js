import React, { Component } from "react";
import "./App.css";
import Godzilla from "./components/Godzilla";
import Enemy from "./components/Enemy";
import Bullet from "./components/Bullet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bullets: [],
      gameStarted: false,
      enemyKey: Date.now(),
    };
    this.enemyRef = React.createRef();
  }

  startGame = () => {
    this.setState({ gameStarted: true });
  };

  shootBullet = (leftPixels, enemyRef) => {
    const newBullet = {
      id: Date.now(),
      leftPixels: leftPixels,
    };
    this.setState((prevState) => ({
      bullets: [...prevState.bullets, newBullet],
    }));

    const bulletInterval = setInterval(() => {
      const bulletElement = document.getElementById(newBullet.id);
      const enemyElement = enemyRef.current;

      if (!bulletElement || !enemyElement) {
        clearInterval(bulletInterval);
        return;
      }

      const bulletRect = bulletElement.getBoundingClientRect();
      const enemyRect = enemyElement.getBoundingClientRect();

      if (this.checkCollision(bulletRect, enemyRect)) {
        this.setState((prevState) => ({
          bullets: prevState.bullets.filter(
            (bullet) => bullet.id !== newBullet.id
          ),
          enemyKey: Date.now(),
        }));
        clearInterval(bulletInterval);
      }
    }, 50);
  };

  checkCollision = (bulletRect, enemyRect) => {
    console.log("Checking collision");
    const isColliding =
      bulletRect.left < enemyRect.right &&
      bulletRect.right > enemyRect.left &&
      bulletRect.top < enemyRect.bottom &&
      bulletRect.bottom > enemyRect.top;

    if (isColliding) {
      this.setState({ enemyKey: Date.now() });
    }

    return isColliding;
  };

  removeBullet = (bulletId) => {
    this.setState((prevState) => ({
      bullets: prevState.bullets.filter((bullet) => bullet.id !== bulletId),
    }));
  };

  render() {
    const { bullets, gameStarted, enemyKey } = this.state;
    const enemyRef = React.createRef();

    return (
      <div className="App">
        <h1>Godzilla Shooting Game</h1>
        {!gameStarted ? (
          <button onClick={this.startGame}>Start Game</button>
        ) : (
          <div className="game-container">
            <Godzilla onShoot={this.shootBullet} enemyRef={this.enemyRef} />
            <Enemy key={enemyKey} ref={enemyRef} />
            {bullets.map((bullet) => (
              <Bullet
                key={bullet.id}
                id={bullet.id}
                leftPixels={bullet.leftPixels}
                removeBullet={this.removeBullet}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
