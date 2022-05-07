import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { Text } from "react-native";

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false}}

      />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarIcon: ({color,size}) => <MaterialCommunityIcons name="home-variant" size={size} color={color} />}}
      />
      <BottomTab.Screen
        name="Planner"
        component={PlannerScreen}
        // options={{ unmountOnBlur: true}}
        options={{tabBarIcon: ({color,size}) => <Entypo name="calendar" size={size} color={color} />}}


      />
    </BottomTab.Navigator>
  )
}