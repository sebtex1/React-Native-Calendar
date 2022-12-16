import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListEvents from "./components/ListEvents";
// import FormItem from "./FormItem";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setItems([...items, input]);
    setInput("");
  };

  const handleUpdate = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = input;
    setItems(updatedItems);
    setInput("");
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ListEvents />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  form: {
    width: "80%",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  }
});

export default App;