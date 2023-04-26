import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import Block from "./components/Block";
import Title from "./components/Title";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blockContainer}>
        <View style={styles.titleContainer}>
          <Title>Finished Sections</Title>
        </View>
        <View style={styles.row}>
          <Block>Section 1: Getting Started</Block>
          <Block>Section 2: React Native Basics</Block>
        </View>
        <View style={styles.row}>
          <Block>Section 3: Debugging React Native Apps</Block>
          <Block>
            Section 4: Diving Deeper into Components, Layouts & Styling
          </Block>
        </View>
        <View style={styles.row}>
          <Block>
            Section 5: Building Adaptive User Interfaces (Adapt to Platform &
            Device Sizes)
          </Block>
        </View>
      </View>
    </View>
  );
};

export default App;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  blockContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  titleContainer: {
    marginBottom: 10,
    padding: deviceWidth < 380 ? 12 : 12,
    margin: deviceWidth < 380 ? 12 : 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
