const Modal = ({ onClose }) => {
	return (
		<div
			className="fixed w-[100%] h-[100%] bg-black/50 flex justify-center items-center z-2"
			onClick={onClose}
		>
			<div
				className="bg-white w-[400px] h-[150px] rounded-xl flex justify-center items-center text-2xl font-bold"
				onClick={(e) => e.stopPropagation()}
			>
				할 일이 추가되었습니다.
			</div>
		</div>
	);
};

export default Modal;
