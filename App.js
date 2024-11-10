import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserListScreen from "./screens/UserListScreen";
import DetailScreen from "./screens/DetailScreen";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/Poppins/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/Poppins/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const theme = {
    ...DefaultTheme,
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        fontFamily: "Poppins",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
      },
      medium: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
      },
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList">
          <Stack.Screen
            name="UserList"
            component={UserListScreen}
            options={{ title: "Users" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
