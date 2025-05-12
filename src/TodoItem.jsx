import React from "react";

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li className="w-100 text-2xl text-center px-3 py-5 border-b-2 flex justify-between items-center">
      <span>{todo.text}</span>
      <button
        onClick={() => handleDelete(todo.id)}
        className="text-sm bg-red-300 px-3 py-1 rounded hover:bg-red-500"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
