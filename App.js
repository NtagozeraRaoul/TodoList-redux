import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import TodoList from "./src/screens";

export default function App() {
	return (
		<Provider store={store}>
			<TodoList />
		</Provider>
	);
}
