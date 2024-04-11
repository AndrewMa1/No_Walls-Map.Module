import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Event List"
          onPress={() => navigation.navigate('EventList')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute', // Position the View over the map
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.8)", // Optional: style for the button's container
    borderRadius: 20, // Optional: if you want rounded buttons
  },
  // The button style is removed because Button does not accept style props
});

export default MapScreen;