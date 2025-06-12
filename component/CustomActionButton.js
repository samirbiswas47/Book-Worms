import React from "react";
import { View, TouchableOpacity } from "react-native";

function CustomActionButton({ children, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  );
}

export default CustomActionButton;
