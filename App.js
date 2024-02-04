import React from 'react';

import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bottomnavigator from './navigator/Bottomnavigator';


import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const isDarkMode = useColorScheme() === "dark"

  const backgroundstyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  }

  return (
    <SafeAreaView style={backgroundstyle}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}> 
          <Stack.Screen name="Home" component={Bottomnavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
