import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

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
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
