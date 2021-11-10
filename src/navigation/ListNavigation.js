import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListScreen from '../screens/ListScreen';
import SiteDetailsScreen from '../screens/SiteDetailsScreen';

const Stack = createStackNavigator();

export default function ListNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="SitesList"
        component={ListScreen}  
        options={{title: "", headerTransparent: true}}
      />
      <Stack.Screen 
        name="SiteDetails"
        component={SiteDetailsScreen}  
        options={{title: "Site Details"}}
      />
    </Stack.Navigator>
  )
}
