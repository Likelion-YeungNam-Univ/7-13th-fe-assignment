import React from "react";

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li className="bg-white p-6 mb-4 rounded shadow-md flex justify-between items-center w-96">
      <span>{todo.text}</span>
      <button
        onClick={() => handleDelete(todo.id)} // 삭제 버튼 클릭 시 handleDelete 호출
        className="bg-white border-2 border-black text-black hover:bg-gray-200 px-4 py-2 rounded"
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
