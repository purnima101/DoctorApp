import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import FirstPage from "./pages/FirstPage";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="FirstPage" component={FirstPage} /> */}
        {/* <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} /> */}
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View className="flex-1 bg-red-500"><Text>Heloooo</Text></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
