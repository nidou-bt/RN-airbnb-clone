import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import Button from "./UI/Button";

const Header = () => {
  return (
    <View>
      <ImageBackground
        style={{ width: "100%", height: 540 }}
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            marginLeft: "auto",
            marginRight: "auto",
            width: 220,
            padding: 6,
            borderRadius: 16,
          }}
        >
          <AntDesign name="search1" size={18} color="#C71585" />
          <TextInput
            placeholder="where you want to go?"
            style={{ color: "black", fontSize: 16, paddingHorizontal: 10 }}
          />
          <Button style={{ Style: { button: styles.button } }} text="Hi" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
  },
});
