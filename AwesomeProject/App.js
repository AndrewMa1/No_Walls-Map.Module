import React from 'react';
import { Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          coordinate={{ latitude: 39.9042, longitude: 116.4074 }}
          title={"Marker Title"}
          description={"This is a marker description."}
        />
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
