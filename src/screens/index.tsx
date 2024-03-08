import {
	Button,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createTodo, deleteTodo } from "../redux/actions/todoAction";

export default function TodoList() {
	// Redux Related Functions
	const dispatch = useDispatch();
	const { toDolist } = useSelector((store: RootState) => store.todo);

	// Normal States
	const [todoText, setTodoText] = useState<string>("");

	const handleAddTodo = () => {
		dispatch(createTodo(todoText));
		setTodoText("");
	};

	const handleRemoveItem = (id: Number) => {
		dispatch(deleteTodo(id));
	};

	return (
		<SafeAreaView style={{ flex: 1, marginVertical: 20, marginHorizontal: 10 }}>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontSize: 30 }}>Add To Do List</Text>
				<TextInput
					value={todoText}
					onChangeText={(todoText: string) => {
						setTodoText(todoText);
					}}
					placeholder=" Write Here"
					style={{
						marginTop: 10,
						borderWidth: 1,
						borderRadius: 10,
						padding: 10,
						height: 45,
						width: 250,
					}}
				/>
				<Button onPress={() => handleAddTodo()} title="Add" />
			</View>

			<FlatList
				data={toDolist}
				keyboardShouldPersistTaps="handled"
				renderItem={({ item }) => {
					return (
						<View style={styles.itemContainer}>
							<Text style={styles.itemTex}>{item.text}</Text>
							<TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
								<AntDesign name="delete" size={24} color="red" />
							</TouchableOpacity>
						</View>
					);
				}}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		backgroundColor: "#e9e9e9",
		padding: 20,
		marginVertical: 8,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	itemTex: {
		fontSize: 20,
	},
});
