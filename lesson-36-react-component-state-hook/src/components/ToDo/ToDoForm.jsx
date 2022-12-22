import React from "react";

function ToDoForm({ submitForm, changeTitle }) {
  return (
    <form onSubmit={submitForm}>
      <label>
        Title <input type="text" onChange={changeTitle} />
      </label>
      <button>Create todo item</button>
    </form>
  );
}

export default ToDoForm;
