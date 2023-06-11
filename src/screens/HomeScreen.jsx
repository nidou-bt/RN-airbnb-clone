import React from "react";
import { ScrollView } from "react-native";
import Header from "../components/Home/Header";
import Explore from "../components/Home/Explore";
import Cards from "../components/Home/Cards";
import Experience from "../components/Home/Experience";

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <Header />
      <Cards />
      <Explore />
      <Experience />
    </ScrollView>
  );
};

export default HomeScreen;
