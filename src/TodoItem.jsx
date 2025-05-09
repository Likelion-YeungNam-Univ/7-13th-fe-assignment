import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="flex justify-between w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
      <button onClick={onDelete}>삭제</button>
    </li>
  );
};

export default TodoItem;
