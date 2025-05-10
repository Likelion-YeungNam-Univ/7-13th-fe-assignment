import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="ml-60 text-sm px-2 py-1 bg-white rounded-xl cursor-pointer border-2"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
