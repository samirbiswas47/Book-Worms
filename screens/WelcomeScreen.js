import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CustomActionButton from "../component/CustomActionButton";
import colors from "../assets/colors";
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.bgMain }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="bookmark" size={150} color={colors.logoColor} />
        <Text
          style={{
            justifyContent: "center",
            fontWeight: "100",
            fontSize: 50,
            color: "white",
          }}
        >
          Book Worm
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          color: "#000",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <CustomActionButton
          onPress={() => navigation.navigate("Home")}
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 0.5,
            borderColor: colors.bgPrimary,
            padding: 5,
            margin: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 100, color: "white" }}>Login</Text>
        </CustomActionButton>
        <CustomActionButton
          onPress={() => navigation.navigate("Register")}
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 0.5,
            borderColor: colors.bgPrimary,
            padding: 5,
            margin: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 100, color: "white" }}>Sing Up</Text>
        </CustomActionButton>
      </View>

      {/* <Text>Welcome to the App</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")} /> */}
    </View>
  );
}
