import todoTypes from "../types/todoTypes";

export type Todo = {
	id: Number;
	text: string;
};

export type toDoState = {
	toDolist?: Todo[];
};

const initialState: toDoState = {
	toDolist: [],
};

export default (state: toDoState = initialState, action: any) => {
	switch (action.type) {
		case todoTypes.CREATE_TODO:
			return {
				...state,
				toDolist: [
					...state?.toDolist,
					{
						id: state?.toDolist.length + 1,
						text: action.payload.text,
					},
				],
			};
		case todoTypes.DELETE_TODO:
			return {
				...state,
				toDolist: state?.toDolist.filter(
					(todo) => todo.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};
