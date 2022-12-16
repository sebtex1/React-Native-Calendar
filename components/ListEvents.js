import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import ModalEvent from './ModalEvent';

const ListEvents = (props) => {
  const [events, setEvents] = useState(props.list ?? []);
  const [isModalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [modeEdit, setModeEdit] = useState(false);

  const openModal = () => setModalVisible(true);

  const openModalEdit = (index) => {
    setInput(events[index].name);
    setDate(events[index].date);
    setModeEdit(true);
    setEditIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  const isValidDate = dateString => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(dateString);
  };

  const addEvent = () => {
    if (isValidDate(date)) {
      setEvents([...events, {id: uuidv4(), name: input, date: date}]);
      props.changeList([...events, {id: uuidv4(), name: input, date: date}]);
      setInput("");
      setDate("");
      closeModal();
    } else {
      alert("La date renseigner est invalide, format attendu: YYYY-MM-DD");
    }
  };

  const editEvent = () => {
    const updatedEvents = [...events];
    updatedEvents[editIndex] = {id: updatedEvents[editIndex].id, name: input, date: date};
    setEvents(updatedEvents);
    setInput("");
    setDate("");
    closeModal();
    setModeEdit(false);
  };

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
    props.changeList(updatedEvents);
  };


  return (
    <View>
      <Button title="Ajouter un événement" onPress={openModal} />
      <FlatList
        data={events}
        renderItem={({ item, index }) => (
          <View>
            <Text>Nom: {item.name}</Text>
            <Text>Date: {item.date}</Text>
            <View style={styles.rowContainer}>
              <Button title="Modifier" onPress={() => openModalEdit(index)} />
              <Button title="Supprimer" onPress={() => deleteEvent(index)} />
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <ModalEvent
        input={{input: input, setInput: setInput}}
        date={{date: date, setDate: setDate}}
        visible={isModalVisible}
        close={closeModal}
        add={addEvent}
        edit={editEvent}
        modeEdit={modeEdit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
})

export default ListEvents;