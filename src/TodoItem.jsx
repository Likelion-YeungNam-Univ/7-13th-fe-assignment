import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
        <button
        onClick={onDelete}
        className="ml-10 px-5 py-2 text-sm font-bold text-white bg-blue-700 rounded hover:bg-red-600"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
