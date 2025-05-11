import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="relative w-full text-2xl text-left px-3 py-5 border-b-2">
      <span className="text-2xl pr-24">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)} className="absolute top-3 right-3 px-3 py-1 bg-white font-bold border-2 rounded-xl hover:bg-gray-500">
        삭제
      </button>
    </li>
  );
};

export default TodoItem;