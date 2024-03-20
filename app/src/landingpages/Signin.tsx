import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as browser from "expo-web-browser";
import google from "expo-auth-session/providers/google";
import React, { useState } from "react";
import { COLORSS, Gstyles } from "../constants/theme";
import icon from "../../../assets/Images/image1.png";
import { router } from "expo-router";
import { Constants } from "expo-constants";

browser.maybeCompleteAuthSession();

export default function Signin() {
  const [token, settoken] = useState(null);

  const [user, steuser] = useState(null);

  // const[request , response ,promtasync] = google.useIdTokenAuthRequest({
  //   clientId
  // });

  function singup() {
    // router.replace("/src/tabs");
  }
  return (
    <View style={Gstyles.whitecontainercenter}>
      <View style={styles.logobox}>
        <Image style={styles.logo} source={icon}></Image>
        <View style={styles.titlebox}>
          <Text style={styles.title}>Pharma </Text>
          <Text style={styles.titlegreen}>Connect</Text>
        </View>
      </View>
      <View style={styles.loginbox}>
        <Text style={{ color: "#090F47" }}>
          You can Sing up using your google account
        </Text>
        <TouchableOpacity
          onPress={() => {
            singup();
          }}
          style={Gstyles.loginbutton}
        >
          <Text style={Gstyles.Buttontitle}>Sing in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#090F47" }}>Sing with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logobox: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 0.4,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    fontStyle: "italic",
    lineHeight: 36,
    letterSpacing: 1,
    fontFamily: "overpass",
    textAlign: "center",
  },
  titlegreen: {
    fontSize: 28,
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 36,
    letterSpacing: 1,
    fontFamily: "overpass",
    textAlign: "center",
    color: COLORSS.Green,
  },

  titlebox: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
  },
  loginbox: {
    // borderColor: "black",
    // borderWidth: 1,
    flex: 0.3,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
