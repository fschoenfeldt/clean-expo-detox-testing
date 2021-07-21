import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, updateText] = React.useState("Eins");
  return (
    <View style={styles.container}>
      <Text testID="fabian">Open up App.js to start working on your app!</Text>
      <Button
        onPress={() => {
          if (text === "Eins") updateText("Zwei");
          else updateText("Zwei");
        }}
        testID="click_button"
        title={"Click Me! :)"}
      />
      <Text testID="mittag">{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
