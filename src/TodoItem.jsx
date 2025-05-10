import React from "react";

const TodoItem = ({ todo, todoDelete }) => {
  return (
    <li className="flex justify-between w-100 text-2xl text-center px-3 py-5 border-b-2">
      <span>{todo.text}</span>
      {/* 삭제 버튼 */}
      <button
        className="bg-white border-2 rounded-lg text-lg px-2 py-1"
        onClick={todoDelete} // 클릭됐을 때, todoDelete (= handleDelete) 함수를 실행
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
