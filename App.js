import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Screens
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";

// Create navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer navigator component
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Register">
      <Drawer.Screen name="Register" component={SignUpScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      {/* Add more screens here if needed */}
    </Drawer.Navigator>
  );
}

// Stack navigator component
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Register"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// App root
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
