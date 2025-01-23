import './node_modules/react-native-gesture-handler/gesture-handler.js';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#150B42" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}