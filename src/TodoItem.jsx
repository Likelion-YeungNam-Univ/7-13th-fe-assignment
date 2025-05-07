import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className=" flex w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-auto px-2 py-1 rounded-xl bg-white border-2 border-black"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
