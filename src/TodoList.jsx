import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // isModalOpen 상태(state)를 선언, 초기값은 false로 설정

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    if (e.target.value.trim().length < 3) {
      setError(true);
    } else {
      setError(false);
    }

    if (!e.target.value.trim()) setError(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputText.trim().length < 3) {
      setError(true);
      return;
    }

    setTodos((prev) => [...prev, { id: Date.now(), text: inputText }]);
    setInputText("");
    setError(false);
    setIsModalOpen(true); // 제출하면 isModalOpen을 true로 설정하여 모달창이 띄워지도록
  };

  // 모달창을 끄는 closeModal 함수
  const closeModal = () => {
    setIsModalOpen(false); // isModalOpen을 false로 설정하여 모달창이 꺼지도록
  };

  // todo를 삭제하는 handleDelete 함수
  const handleDelete = (index) => {
    const temp = todos.filter((_, i) => i !== index); // filter()를 통해 배열의 각 요소를 검사하여 index가 조건과 다른 요소만으로 새로운 배열 반환, 그걸 temp에 넣고,
    setTodos(temp); // todos를 temp로 설정
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center">
      <h2 className="text-5xl font-bold my-10">To-Do List</h2>
      <form onSubmit={handleAdd} className="flex gap-2 mb-5 relative">
        <input
          placeholder="할 일을 입력하세요."
          value={inputText}
          onChange={handleInputChange}
          className={`px-4 py-2 border rounded-2xl bg-white outline-none  ${
            error && "border-red-500"
          }`}
        />
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
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todoDelete={() => handleDelete(index)} // handleDelete 함수를 props로 전달, 화살표 함수로 감싸서 호출 지연
          />
        ))}
      </ul>

      {/* 모달창 띄우기, isModalOpen이 true일 때 실행됨 */}
      {isModalOpen && (
        // 배경
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center"
          onClick={closeModal} // 클릭됐을 때, closeModal 함수를 실행하여 모달창이 꺼짐
        >
          {/* 모달창 */}
          <div
            className="bg-white p-15 rounded-lg text-center"
            onClick={(e) => e.stopPropagation()} // 이게 포함된 태그는 이벤트가 발생하지 않음(?) -> 배경을 클릭하면 모달창이 꺼지는데, 모달창 내부를 클릭하면 꺼지지 않음
          >
            <p className="text-2xl font-bold">할 일이 추가되었습니다!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
