import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  FontAwesome,
  AntDesign,
  SimpleLineIcons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";

const ReserveScreen = () => {
  const route = useRoute();

  return (
    <View>
      <Image source={{ uri: route.params.img }} style={styles.img} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.textContainer}>
          <FontAwesome name="star" size={24} color="#fd5c63" />
          <Text style={styles.star}>{route.params.star}</Text>
          <Text style={styles.location}>{route.params.location}</Text>
        </View>
        <View
          style={[
            styles.textContainer,
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
        <View
          style={[
            styles.textContainer,
            {
              marginTop: 15,
              justifyContent: "space-between",
            },
          ]}
        >
          <View>
            <Text style={styles.hostText}>Hosted by {route.params.person}</Text>
            <Text style={styles.description}>{route.params.description}</Text>
          </View>
          <Image
            style={styles.personImg}
            source={{ uri: route.params.image }}
          />
        </View>
        <View>
          <View style={styles.rowContainer}>
            <AntDesign name="home" size={28} color={"black"} />
            <View styles={[styles.asideContainer]}>
              <Text style={styles.homeTitle}>Entire Home</Text>
              <Text style={styles.location}>
                You will have the treehouse to yourself
              </Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="black" />
            <View styles={styles.asideContainer}>
              <Text style={styles.homeTitle}>Enhanced Clean</Text>
              <Text style={styles.location}>
                the host is committed to Airbnb's 5 step cleaning process
              </Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <EvilIcons name="location" size={24} color="black" />
            <View styles={styles.asideContainer}>
              <Text style={styles.homeTitle}>Great Location</Text>
              <Text style={styles.location}>
                100% of the guests gave a 5 star rating
              </Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Feather name="calendar" size={24} color="black" />
            <View styles={styles.asideContainer}>
              <Text style={{ fontSize: 18 }}>Free Cancellation Available</Text>
            </View>
          </View>
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
  rowContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    gap: 10,
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
  description: { marginTop: 10, fontSize: 14, color: "#8A2BE2" },
  personImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    paddingBottom: 3,
  },
  asideContainer: {
    backgroundColor: "red",
  },
  homeTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
