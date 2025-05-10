import React from "react";

// props로 전달받은 todo와 handleDelete
const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li className="w-100 text-2xl text-center px-3 py-5 border-b-2">
      <div className="flex justify-between">
        <span>{todo.text}</span>

        {/* 삭제 버튼 */}
        <button
          onClick={() => handleDelete(todo.id)} // 버튼 클릭 시 todo.id를 전달
          className="px-2 text-center bg-blue-100 border border-black rounded-lg text-red-600 hover:bg-blue-300 cursor-pointer"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
