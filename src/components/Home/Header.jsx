import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../UI/Button";

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View style={styles.searchView}>
          <AntDesign name="search1" size={18} color="#C71585" />
          <TextInput
            placeholder="where you want to go?"
            style={{ color: "black", fontSize: 16, paddingHorizontal: 10 }}
          />
        </View>
        <Button
          buttonStyle={styles.button}
          labelStyle={styles.label}
          label="I'm flexible"
          onPress={() => console.log("test")}
        />
        <View
          style={{ marginLeft: "auto", marginRight: "auto", marginBottom: 20 }}
        >
          <Text style={styles.text}>Not Sure where to Go?</Text>
          <Text style={styles.text}>Perfect</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchView: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    width: 220,
    padding: 6,
    borderRadius: 16,
  },
  button: {
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    border: "5px red solid",
  },
  label: {
    color: "#C71585",
    padding: 10,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});
