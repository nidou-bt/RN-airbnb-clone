import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ExploreCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.img }} />
      <View style={styles.footerContainer}>
        <Text style={styles.text}>{item.location}</Text>
        <Text>{item.distance}</Text>
      </View>
    </View>
  );
};

export default ExploreCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 7,
    // width: 200,
  },
  image: {
    width: 50,
    height: 50,
  },
  footerContainer: {
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: "#72A0C1",
    width: 120,
    // height: "100%",
  },
  text: {
    color: "white",
  },
});
