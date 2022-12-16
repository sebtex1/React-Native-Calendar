import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ListEvents from "./components/ListEvents";
import CalendarPicker from 'react-native-calendar-picker';

const App = () => {
  const [list, setList] = useState([]);
  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={date => {
          console.log('selected date', date);
        }}
      />
      <View style={styles.form}>
        <ListEvents list={list}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50
  },
  form: {
    width: "80%",
  }
});

export default App;