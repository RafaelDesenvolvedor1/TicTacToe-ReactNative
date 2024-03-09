import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import TelaJogo from "./src/pages/TelaJogo";

const Stack=createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='TelaJogo'
          component={TelaJogo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}