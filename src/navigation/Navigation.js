import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5'
import FavoriteNavigation from "./FavoriteNavigation";
import ListNavigation from "./ListNavigation";
import AccountNavigatior from "./AccountNavigatior";

const Tab = createBottomTabNavigator();

export default function Navigation(params) {
  return(
    <Tab.Navigator initialRouteName="List">
      <Tab.Screen 
        name="Favorite" 
        component={FavoriteNavigation} 
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color,size}) => (
            <Icon name="star" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="List" 
        component={ListNavigation} 
        options={{
          tabBarLabel: "Sites List",
          tabBarIcon: ({color,size}) => (
            <Icon name="bars" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={AccountNavigatior}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({color,size}) => (
            <Icon name="user" color={color} size={size} />
          )
        }} 
      />
    </Tab.Navigator>
  )
}