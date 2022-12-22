import React, { Component } from "react";

class ToDoItem extends Component {
  componentDidMount() {
    console.log(`ToDoItem componentDidMount`);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps.item.completed);
  //   console.log(this.props.item.completed);

  //   if (this.props.item.completed === nextProps.item.completed) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  componentDidUpdate() {
    console.log(`ToDoItem componentDidUpdate`);
  }

  componentWillUnmount() {
    console.log(`ToDoItem componentWillUnmount`);
    // clearInterval
    // removeEventListener
  }

  render() {
    let {
      item: { completed, title },
      closeTask,
      completeTask,
    } = this.props;

    return (
      <li className={completed ? `completed` : `inprogress`}>
        {title}
        {completed ? (
          <button onClick={closeTask}>Close</button>
        ) : (
          <button onClick={completeTask}>Complete</button>
        )}
      </li>
    );
  }
}

export default ToDoItem;
