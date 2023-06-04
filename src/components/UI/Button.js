import React from "react";
import { Text } from "react-native";
import { Pressable } from "react-native";

const Button = ({ onPress, text, Style }) => {
  return (
    <Pressable onPress={onPress} Style={Style.button}>
      <Text Style={Style.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
