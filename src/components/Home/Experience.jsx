import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";

const Experience = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Airbnb Experience</Text>
      <ImageBackground
        style={styles.imageContainer}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcIhhZoVAOPiN5Mggdz1NdjW-5nvZvTzFog&usqp=CAU",
        }}
      >
        <View style={styles.imageTextContainer}>
          <Text style={styles.imageText}>Things to do on your Trip</Text>
          <Button
            label={"Experiences"}
            buttonStyle={styles.buttonStyle}
            labelStyle={styles.labelStyle}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Experience;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  imageContainer: {
    width: 350,
    resizeMode: "contain",
    height: 450,
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  imageTextContainer: {
    padding: 10,
  },
  imageText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    width: 260,
  },
  buttonStyle: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  labelStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
