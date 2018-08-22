import React, { Component } from "react";
import "./style/BurgerButton.css";

class BurgerButton extends Component {
  state = {
    burgerClick: false
  };
  componentDidMount() {}
  render() {
    let { toggle, handle } = this.props;
    // let { handle } = this.state;
    return (
      <div
        className="burger-layout"
        onClick={() => {
          toggle();
        }}
      >
        <section
          className={
            handle
              ? "burger-ingredient topBurgerAnimation"
              : "burger-ingredient"
          }
        />
        <section
          className={
            handle
              ? "middleBurgerAnimation burger-ingredient"
              : "burger-ingredient"
          }
        />
        <section
          className={
            handle
              ? "middleBurgerAnimation burger-ingredient"
              : "burger-ingredient"
          }
        />
        <section
          className={
            handle
              ? "burger-ingredient bottomBurgerAnimation"
              : "burger-ingredient"
          }
        />
      </div>
    );
  }
}
export default BurgerButton;
