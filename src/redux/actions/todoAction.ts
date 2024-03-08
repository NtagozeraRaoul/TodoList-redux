import todoTypes from "../types/todoTypes";

export const createTodo = (text: string) => {
	return {
		type: todoTypes.CREATE_TODO,
		payload: {
			text: text,
		},
	};
};

export const deleteTodo = (id: any) => {
	return {
		type: todoTypes.DELETE_TODO,
		payload: {
			id: id,
		},
	};
};
