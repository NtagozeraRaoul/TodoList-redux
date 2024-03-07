import * as actions from "./actionTypes";
let lastId = 0;
interface toDolist {
  id: 0;
  text: string;
}
interface toDoState {
  toDolist?: toDolist[];
}
const initialState: toDoState = {
  // toDolist: []
};

export default function reducer(state: toDoState = initialState, action: any) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        toDolist: [
          ...(state?.toDolist || []),
          {
            id: ++lastId,
            text: action.payload.text,
          },
        ],
      };
    case actions.REMOVE_TODO:
      return {
        ...state,
        toDolist: (state?.toDolist || []).filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
