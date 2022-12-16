import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, Button, FlatList } from 'react-native';
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

  const addEvent = () => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse entrer les détails de l'événement
    // Une fois que l'utilisateur a saisi les détails de l'événement, utilisez la fonction setEvents pour ajouter l'événement au tableau d'événements
    setEvents([...events, {id: uuidv4(), name: input, date: date}]);
    props.changeList([...events, {id: uuidv4(), name: input, date: date}]);
    setInput("");
    setDate("");
    closeModal();
  };

  const editEvent = () => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse modifier les détails de l'événement
    // Une fois que l'utilisateur a modifié les détails de l'événement, utilisez la fonction setEvents pour mettre à jour le tableau d'événements avec les nouvelles informations de l'événement
    const updatedEvents = [...events];
    updatedEvents[editIndex] = {id: updatedEvents[editIndex].id, name: input, date: date};
    setEvents(updatedEvents);
    setInput("");
    setDate("");
    closeModal();
    setModeEdit(false);
  };

  const deleteEvent = (index) => {
    // Utilisez la fonction setEvents pour supprimer l'événement du tableau d'événements
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
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
            <Button title="Modifier" onPress={() => openModalEdit(index)} />
            <Button title="Supprimer" onPress={() => deleteEvent(index)} />
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

export default ListEvents;