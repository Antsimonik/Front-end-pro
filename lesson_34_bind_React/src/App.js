import React, { Component, Fragment } from "react";
import Counter from "./components/Counter";
import ToDoList from "./components/ToDo/ToDoList";
import ToDoTrans from "./components/ToDoTrans";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      // this.setState({
      //   showToDoList: false,
      // });
    }, 3000);
  }

  state = {
    counter: 0,
    list: [
      {
        title: "task 1",
        completed: true,
      },
      {
        title: "task 2",
        completed: false,
      },
      {
        title: "task 3",
        completed: true,
      },
      {
        title: "task 4",
        completed: false,
      },
    ],
    showToDoList: true,
    //   list: [
    //     {
    //       id: 1,
    //       title: `Task 1`,
    //     },
    //     {
    //       id: 2,
    //       title: `Task 2`,
    //     },
    //     {
    //       id: 3,
    //       title: `Task 3`,
    //     },
    //     {
    //       id: 4,
    //       title: `Task 4`,
    //     },
    //   ],
  };

  onPlusClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onMinusClick() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <Fragment>
        <Counter
          counter={this.state.counter}
          onPlusClick={this.onPlusClick.bind(this)}
          onMinusClick={this.onMinusClick.bind(this)}
        />
        <hr></hr>
        <p align="center">
          <b>{this.state.counter}</b>
        </p>
        <hr></hr>
        {this.state.showToDoList && <ToDoList list={this.state.list} />}
        <hr></hr>
        <ToDoTrans />
      </Fragment>
    );
  }
}

export default App;
