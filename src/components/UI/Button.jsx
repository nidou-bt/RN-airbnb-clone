import React from "react";
import { StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";

const Button = ({ onPress, label, buttonStyle, labelStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  label: {},
});
