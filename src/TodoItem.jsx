import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="flex justify-between w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
      <button
        onClick={onDelete}
        className="text-lg text-black border-2 border-black bg-white px-1.5 py-1 rounded-lg cursor-pointer hover:bg-red-400 hover:text-white"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
