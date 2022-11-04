import React, { Component } from "react";

class List extends Component {
  render() {
    let { list, actions } = this.props;

    return Array.isArray(list) && list.length ? (
      <div className="wrapper">
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        {actions.map((item, index) => (
          <button key={index} onClick={item.action}>
            {item.btn}
          </button>
        ))}
      </div>
    ) : null;
  }
}

export default List;
