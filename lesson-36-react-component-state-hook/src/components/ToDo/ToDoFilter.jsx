import React, { Fragment } from "react";

function ToDoFilter({ filterItems }) {
  return (
    <Fragment>
      <select onChange={filterItems}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="progress">Progress</option>
      </select>
    </Fragment>
  );
}

export default ToDoFilter;
