import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 10,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "black",
    padding: 12,
    maxWidth: "80%",
    width: 300,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
