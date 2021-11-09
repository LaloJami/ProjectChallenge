import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return(
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}
