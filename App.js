import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ListEvents from "./components/ListEvents";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const App = () => {
  const [list, setList] = useState([]);

  return (
    <View style={styles.container}>
      <Calendar
        // Collection of dates that have to be marked. Default = {}
        markedDates={Object.fromEntries(list.map(el => [el.date, {marked: true, dotColor: 'red'}]))}
      />
      <View style={styles.form}>
        <ListEvents list={list} changeList={setList}/>
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