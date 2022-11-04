import React, { Component } from "react";
import "./style.scss";

class Counter extends Component {
  constructor() {
    super();

    // setInterval(() => {
    //   this.setState({
    //     counter: this.state.counter
    //   })

    // }, 1000)
    console.log();
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.props.onMinusClick}>-</button>
        <span>{this.props.counter}</span>
        <button onClick={this.props.onPlusClick}>+</button>
      </div>
    );
  }
}

export default Counter;
