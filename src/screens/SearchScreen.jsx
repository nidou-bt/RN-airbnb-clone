import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { data } from "../data/search";
import { useNavigation } from "@react-navigation/native";
import SearchItem from "../components/SearchScreen/SearchItem";

const SearchScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Explore Airbnb",
      headerStyle: {
        backgroundColor: "#fd5c63",
      },
      headerTintColor: "#fff",
    });
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <SearchItem id={item.key} {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
