import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li className="w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
    </li>
  );
};

export default TodoItem;
