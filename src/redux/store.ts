import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

// I used combine reducers because we might need to add more
const rootReducer = combineReducers({
	todo: todoReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
