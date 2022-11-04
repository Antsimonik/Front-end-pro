import React, { Component } from "react";
import "./style.scss";

import ToDoItem from "./ToDoItem";

class ToDoList extends Component {
  state = Object.assign({}, this.props);

  componentDidMount() {
    console.log(`ToDoList componentDidMount`);

    // setInterval(() => {
    //   console.log(`in interval`);
    // }, 1000);
  }

  componentDidUpdate() {
    console.log(`ToDoList componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount`);
  }

  closeTask(index) {
    this.setState(
      {
        list: this.state.list.filter((item, i) => i !== index),
      },
      () => console.log(this.state.list)
    );
  }

  completeTask(index) {
    this.setState(
      {
        list: this.state.list.map((item, i) => {
          if (i === index) item.completed = true;
          return item;
        }),
      },
      () => console.log(this.state.list)
    );
  }

  render() {
    return this.state.list.length ? (
      <div className="hero">
        <ul className="wrapper">
          {this.state.list.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              completeTask={this.completeTask.bind(this, index)}
              closeTask={this.closeTask.bind(this, index)}
            />
          ))}
        </ul>
      </div>
    ) : null;
  }
}

export default ToDoList;
