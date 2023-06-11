import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  const [places, setPlaces] = useState([]);
  const fetchData = async () => {
    return fetch("https://www.jsonkeeper.com/b/4G1G")
      .then((data) => data.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Explore More</Text>
      <FlatList
        key={"explore-list"}
        data={places}
        numColumns={2}
        renderItem={({ item }) => <ExploreCard item={item} />}
        keyExtractor={(item) => item.location}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
});
