import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/FavoriteScreen';
import SiteDetailsScreen from '../screens/SiteDetailsScreen';

const Stack = createStackNavigator();


export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Favorite"
        component={FavoriteScreen}  
        options={{title: "Favorite"}}
      />
      <Stack.Screen 
        name="SiteDetails"
        component={SiteDetailsScreen}  
        options={{title: "Site Details"}}
      />
    </Stack.Navigator>
  )
}
