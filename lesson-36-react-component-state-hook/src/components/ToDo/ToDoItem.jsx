import React from "react";

function ToDoItem({ item, getClass, changeCompleted, removeItem }) {
  return (
    <li
      onClick={(e) => changeCompleted(e, item)}
      className={getClass(item)}
      style={{ listStyleType: `none` }}
    >
      {item.title}
      <button onClick={(e) => removeItem(e, item.id)}>Remove</button>
    </li>
  );
}

export default ToDoItem;
