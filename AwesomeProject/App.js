import React from 'react';
import { ScrollView } from 'react-native';
import EventList from './EventList.js';
import MapScreen from './MapScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="EventList" component={EventList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
