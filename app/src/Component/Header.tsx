import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Gstyles } from "../constants/theme";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={Gstyles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={styles.backbutton}
      >
        <ArrowLeft color={"black"} size={30} />
      </TouchableOpacity>
      <View style={styles.Producttitle}>
        <Text
          style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
        ></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backbutton: {
    width: "15%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  Producttitle: {
    borderWidth: 1,
    borderColor: "red",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});
