import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "yellow" }}
        style={styles.buttonInnerContainer}
        onPress={onPress}
      >
        <Text style={styles.bottonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "green",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  bottonText: {
    color: "white",
    textAlign: "center",
  },
});
