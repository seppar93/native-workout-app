import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Navigation from "./navigation";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <View>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}
