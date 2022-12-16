import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { View, Text, Button, FlatList } from 'react-native';
import ModalEvent from './ModalEvent';

const ListEvents = (props) => {
  const [events, setEvents] = useState(props.list ?? []);
  const [isModalVisible, setModalVisible] = useState(false);
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const addEvent = () => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse entrer les détails de l'événement
    // Une fois que l'utilisateur a saisi les détails de l'événement, utilisez la fonction setEvents pour ajouter l'événement au tableau d'événements
    setEvents([...events, {id: uuidv4(), name: input, date: date}]);
    setInput("");
    setDate("");
    setModalVisible(false);
  };

  const editEvent = (event) => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse modifier les détails de l'événement
    // Une fois que l'utilisateur a modifié les détails de l'événement, utilisez la fonction setEvents pour mettre à jour le tableau d'événements avec les nouvelles informations de l'événement
  };

  const deleteEvent = (event) => {
    // Utilisez la fonction setEvents pour supprimer l'événement du tableau d'événements
  };

  const closeModal = () => setModalVisible(false);

  return (
    <View>
      <Button title="Ajouter un événement" onPress={openModal} />
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View>
            <Text>Nom: {item.name}</Text>
            <Text>Date: {item.date}</Text>
            <Button title="Modifier" onPress={() => editEvent(item)} />
            <Button title="Supprimer" onPress={() => deleteEvent(item)} />
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
      />
    </View>
  );
}

export default ListEvents;