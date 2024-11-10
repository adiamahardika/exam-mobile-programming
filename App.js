import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserListScreen from "./screens/UserListScreen";
import MapScreen from "./screens/MapScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: "User List" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
