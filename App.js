import { StyleSheet, Text, View } from "react-native";
import Main from "./screens/main";
import Book from "./screens/book";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackScreen = createNativeStackNavigator();

const MainScreen = () => (
  <StackScreen.Navigator>
    <StackScreen.Screen name="myhospital" component={Main} />
    <StackScreen.Screen
      name="book"
      component={Book}
      options={({ route }) => ({ title: route.params.hospital.name })}
    />
  </StackScreen.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
}
