import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const Card = ({ uri, title, distance }) => {
  return (
    <View>
      <Pressable style={styles.button}>
        <Image style={styles.image} source={{ uri }} />
        <View style={styles.footer}>
          <Text style={styles.firstText}>{title}</Text>
          <Text style={styles.secondText}>{distance}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 150,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  button: {
    margin: 10,
  },
  footer: {
    backgroundColor: "orange",
    width: 190,
    padding: 10,
  },
  firstText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  secondText: {
    color: "white",
    fontSize: 14,
    fontWeight: 400,
  },
});
