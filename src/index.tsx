import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import store from "./store";
import { addTodos, removeTodos } from "./actionCreater";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
//state = reducer(state, action);

export default function TodoList() {
  const [todoText, setTodoText] = useState<string>("");

  const storedData = store.getState();

  // const _renderItem = ({ item }) => {
  //   <View style={styles.itemContainer}>
  //     <Text style={styles.itemTex}>{item.text}</Text>
  //     <TouchableOpacity
  //       onPress={() => {
  //         store.dispatch(removeTodos(item.id));
  //       }}
  //     >
  //       <AntDesign name="delete" size={24} color="red" />
  //     </TouchableOpacity>
  //   </View>;
  // };
  useEffect(() => {
    console.log('something changed');
  }, [storedData.toDolist]);

  return (
    <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 10 }}>
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
        <Button
          onPress={() => {
            store.dispatch(addTodos(todoText));
            setTodoText("");
          }}
          title="Add"
        />
      </View>

      <FlatList
        data={storedData.toDolist}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.itemTex}>{item.text}</Text>
              <TouchableOpacity
                onPress={() => {
                  store.dispatch(removeTodos(item.id));
                }}
              >
                <AntDesign name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
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
