import * as actions from "./actionTypes";

export function addTodos(text: string) {
  return {
    type: actions.ADD_TODO,
    payload: {
      text: text,
    },
  };
}

export function removeTodos(id: any) {
  return {
    type: actions.REMOVE_TODO,
    payload: {
      id: id,
    },
  };
}
