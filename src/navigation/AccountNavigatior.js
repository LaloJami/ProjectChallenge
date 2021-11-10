import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();

export default function AccountNavigatior() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="User Account" component={AccountScreen} />
    </Stack.Navigator>
  )
}
