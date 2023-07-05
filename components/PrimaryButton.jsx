import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "yellow" }}
        style={styles.buttonInnerContainer}
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
  // container: {
  //   backgroundColor: "green",
  //   borderRadius: 28,
  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  //   elevation: 10,
  //   shadowColor: "black",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowRadius: 6,
  //   shadowOpacity: 1,
  //   margin: 4,
  // },
  bottonText: {
    color: "white",
    textAlign: "center",
  },
});
