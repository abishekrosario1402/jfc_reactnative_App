import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>JFC</Text>

      <Text style={styles.subtitle}>
        Welcome to the application
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: COLORS.gray,
  },
});