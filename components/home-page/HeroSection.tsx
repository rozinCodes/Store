import React from "react";
import { View, Text, Button, Image } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CustomButton } from "../CustomButton";
const greenCamera = require("../../assets/images/green-camera.png");

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Text style={styles.title}>10% Discount</Text>
        <Text style={styles.description}>Grab yours one {"\n"}Today</Text>
        <Image style={styles.imageOne} source={greenCamera} />
        <Image style={styles.imageTwo} source={greenCamera} />
        <CustomButton
          onClick={() => {}}
          text={"Explore"}
          bgColor={Colors.pallete.white}
          textColor={Colors.pallete.green}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  heroContainer: {
    margin: 5,
    backgroundColor: Colors.pallete.green,
    padding: 16,
    width: "100%",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  imageOne: {
    position: "absolute",
    bottom: 3,
    right: 0,
    width: 100,
    height: 100,
    transform: [{ rotateZ: "340deg" }],
  },
  imageTwo: {
    position: "absolute",
    top: 20,
    right: 15,
    width: 60,
    height: 60,
    transform: [{ rotateZ: "210deg" }],
  },

  title: {
    paddingTop: 16,
    color: "white",
    fontSize: 28,
    fontWeight: "800",
  },
  description: {
    paddingTop: 8,
    color: "white",
    fontSize: 20,
  },
});
