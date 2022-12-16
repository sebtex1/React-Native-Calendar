import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const ListEvents = (props) => {
  const [events, setEvents] = useState(props.list ?? []);

  const addEvent = () => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse entrer les détails de l'événement
    // Une fois que l'utilisateur a saisi les détails de l'événement, utilisez la fonction setEvents pour ajouter l'événement au tableau d'événements
  };

  const editEvent = (event) => {
    // Ouvrez un modal ou une autre vue pour que l'utilisateur puisse modifier les détails de l'événement
    // Une fois que l'utilisateur a modifié les détails de l'événement, utilisez la fonction setEvents pour mettre à jour le tableau d'événements avec les nouvelles informations de l'événement
  };

  const deleteEvent = (event) => {
    // Utilisez la fonction setEvents pour supprimer l'événement du tableau d'événements
  };

  return (
    <View>
      <Button title="Ajouter un événement" onPress={addEvent} />
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Modifier" onPress={() => editEvent(item)} />
            <Button title="Supprimer" onPress={() => deleteEvent(item)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default ListEvents;