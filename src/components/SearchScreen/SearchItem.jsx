import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchItem = ({
  id,
  img,
  description,
  lat,
  location,
  person,
  price,
  review,
  star,
  title,
  total,
  distance,
  image,
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Reserve", {
      id,
      img,
      description,
      lat,
      location,
      person,
      price,
      review,
      star,
      title,
      total,
      distance,
      image,
    });
  };

  return (
    <View>
      <Pressable style={styles.container} onPress={handleNavigation}>
        <ImageBackground source={{ uri: img }} style={styles.image}>
          <Pressable
            style={styles.imageButton}
            onPress={() => console.log("2")}
          >
            <AntDesign name="hearto" size={24} color="white" />
          </Pressable>
        </ImageBackground>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.locationText}>{location}</Text>
            <Text style={styles.priceText}>{price}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.distanceText}>{distance} Km away</Text>
            <Text>dec 12 - 16</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  imageButton: {
    marginRight: 20,
    marginLeft: "auto",
    marginTop: 20,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationText: {
    fontSize: 17,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  distanceText: {
    color: "gray",
    fontSize: 16,
  },
});
