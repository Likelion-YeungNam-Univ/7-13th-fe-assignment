import React from "react";

const TodoItem = ({ todo, onDelete }) => {
	return (
		<li className="w-100 flex justify-between text-2xl text-center px-3 py-5 border-b-2">
			<span>{todo.text}</span>
			<button
				onClick={() => onDelete(todo.id)}
				className="px-2 py-1 bg-white border border-black rounded-xl"
			>
				삭제
			</button>
		</li>
	);
};

export default TodoItem;
