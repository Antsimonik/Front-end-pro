import React, { Component, Fragment } from "react";
import List from "../List/List";
import "./style.scss";

class Lists extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  moveFromFirstToSecond() {
    this.setState({
      secondList: [this.state.firstList.shift(), ...this.state.secondList],
      // thirdList: [...this.state.thirdList]
    });
  }

  moveFromSecondToThird() {
    this.setState({
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList],
    });
  }

  moveFromSecondToFirst() {
    this.setState({
      firstList: [this.state.secondList.shift(), ...this.state.firstList],
    });
  }

  removeLastItem() {
    this.setState({
      thirdList: this.state.thirdList.slice(0, -1),
    });
  }

  render() {
    return (
      <Fragment>
        <List
          list={this.state.firstList}
          actions={[
            {
              btn: "Move To Second",
              action: this.moveFromFirstToSecond.bind(this),
            },
          ]}
        />
        <List
          list={this.state.secondList}
          actions={[
            {
              btn: "Move To First",
              action: this.moveFromSecondToFirst.bind(this),
            },
            {
              btn: "Move To Third",
              action: this.moveFromSecondToThird.bind(this),
            },
          ]}
        />
        <List
          list={this.state.thirdList}
          removeFirst={this.removeLastItem.bind(this)}
          actions={[
            {
              btn: "Remove last item",
              action: this.removeLastItem.bind(this),
            },
          ]}
        />
      </Fragment>
    );
  }
}

export default Lists;
