import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const ReserveScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Image source={{ uri: route.params.img }} style={styles.img} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={textContainer}>
          <FontAwesome name="star" size={24} color="#fd5c63" />
          <Text style={styles.star}>{route.params.star}</Text>
          <Text style={styles.location}>{route.params.location}</Text>
        </View>
        <View
          style={[
            textContainer,
            { justifyContent: "space-between", marginTop: 10 },
          ]}
        >
          <View>
            <Text style={{ fontWeight: "bold" }}>This is a rare find</Text>
            <Text style={styles.person}>
              {route.params.person} is name on Airbnb is usually fully booked
            </Text>
          </View>
          <FontAwesome name="diamond" size={24} color="orange" />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.hostText}>Hosted by {route.params.person}</Text>
          <Text style={styles.hostText}>{route.params.description}</Text>
          <Image
            style={styles.personImg}
            source={{ uri: route.params.image }}
          />
        </View>
      </View>
    </View>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 190,
  },
  titleContainer: { padding: 10 },
  title: { fontSize: 25, fontWeight: "bold" },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingBottom: 7,
  },
  star: {
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 16,
    color: "gray",
  },
  person: {
    fontSize: 15,
  },
  hostText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  personImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
