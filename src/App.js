import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StackNavigator from "./router/StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <StackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
