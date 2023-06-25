import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import { cardList } from "../../../utils/const";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspiration for your Next trip</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cardList.map((item, idx) => {
          return (
            <Card
              uri={item.uri}
              title={item.title}
              key={idx}
              distance={item.distance}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
