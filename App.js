import { View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/musicStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/App/HomePage";
import MuiscPage from "./src/App/MuiscPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="MusicPage" component={MuiscPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
