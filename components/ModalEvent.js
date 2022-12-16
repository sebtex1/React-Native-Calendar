import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button, TextInput } from 'react-native';

const ModalEvent = (props) => {
  return (
    <View>
      <Modal visible={props.visible}>
        <View>
          <Text>Contenu du modal</Text>
          <TextInput
            style={styles.input}
            value={props.input.input}
            onChangeText={(text) => props.input.setInput(text)}
            placeholder="Nom de l'event"
          />
          <TextInput
            style={styles.input}
            value={props.date.date}
            onChangeText={(text) => props.date.setDate(text)}
            placeholder="Date: YYYY-MM-DD"
          />
          <Button title="Fermer le modal" onPress={props.close} />
          { 
            props.modeEdit
            ? <Button title="Modifer l'event" onPress={props.edit} />
            : <Button title="Ajouter l'event" onPress={props.add} />
          }
          
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  }
})

export default ModalEvent;