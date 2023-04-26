import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Block = ({ children }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  block: {
    height: 180,
    maxWidth: 180,
    flex: 1,
    backgroundColor: "#eee",
    margin: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
});
