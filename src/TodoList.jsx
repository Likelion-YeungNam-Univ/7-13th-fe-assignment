import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false); // 에러 메시지 표시 여부로, 초기 값은 false
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 표시 여부로, 초기 값은 false

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    if (e.target.value.trim().length < 3) {
      setError(true);
    } else {
      setError(false);
    }

    if (!e.target.value.trim()) setError(false);
  };

  // 할 일을 추가하는 함수
  const handleAdd = (e) => {
    e.preventDefault();
    if (inputText.trim().length < 3) {
      setError(true);
      return;
    }

    // 새 할 일 객체를 기존 목록에 추가
    setTodos((prev) => [...prev, { id: Date.now(), text: inputText }]);
    setInputText(""); // 입력창 초기화
    setError(false); // 에러 해제
    setIsModalOpen(true); // 할 일이 추가되면서 모달 창이 출력
  };

  // 할 일 객체를 삭제하는 함수
  const handleDelete = (id) => {
    // 해당 id를 제외한 나머지만 남김
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center">
      <h2 className="text-5xl font-bold my-10">To-Do List</h2>
      {/* 입력 폼 */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-5 relative">
        <input
          placeholder="할 일을 입력하세요."
          value={inputText}
          onChange={handleInputChange}
          className={`px-4 py-2 border rounded-2xl bg-white outline-none  ${
            error && "border-red-500"
          }`}
        />
        {/* 에러 메시지 표시 */}
        {error && (
          <p className="text-red-500 text-sm absolute top-11 left-3">
            3글자 이상 입력해주세요.
          </p>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-100 border rounded-2xl hover:bg-blue-400 cursor-pointer"
        >
          추가
        </button>
      </form>

      {/* 할 일 목록 렌더링 */}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>

      {isModalOpen && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-transparent flex justify-center items-center"
          onClick={() => setIsModalOpen(false)}
          // 어디를 클릭하든지 모달 창을 닫도록 설정
        >
          <div
            className="bg-white text-3xl p-40 rounded-3xl shadow"
            onClick={(e) => e.stopPropagation()}
            // stopPropagation 메소드를 통해 모달 창을 클릭해도 창이 꺼지지 않도록 만들어 줌
          >
            할 일이 추가되었습니다.
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
