import React from "react";

//삭제 기능 함수(handleDelete) 전달
const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li className="flex justify-between w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>

      {/* 삭제 버튼 */}
      <button
        onClick={() => handleDelete(todo.id)}
        className="px-3 py-1 bg-white text-black border border-black rounded-xl"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
