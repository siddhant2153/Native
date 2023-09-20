import React from 'react';
import { View } from 'react-native';
import FormComponent from './components/Form';
import BalloonInflationAnimation from './components/Balloon';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Balloon" component={BalloonInflationAnimation} />
        <Stack.Screen name="Form" component={FormComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
