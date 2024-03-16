import { StyleSheet } from "react-native";

const COLORSS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",
  maingray: "#E6E4E6",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  Green: "#15BD92",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export const Gstyles = StyleSheet.create({
  Button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
  },
  Buttontitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  Biginput: {
    width: "85%",
    height: 45,
    backgroundColor: "ghostwhite",
    borderRadius: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORSS.maingray,
  },
  whitecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  whitecontainercenter: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginbutton: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 50,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: COLORSS.Green,
  },
});

export { COLORSS, FONT, SIZES, SHADOWS };
