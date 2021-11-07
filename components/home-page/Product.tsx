import React from "react";
import { View, Text, Button, Image } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CustomButton } from "../CustomButton";

interface Props {
  name: string;
  price: number;
  id: number;
  image: any;
  bgColor: string;
  onClick: () => void;
}

export const Product = (props: Props) => {
  const classes = styles(props);

  return (
    <View style={classes.container}>
      <Text style={classes.limitedEdition}>Limited Edition</Text>
      <Text style={classes.name}>{props.name}</Text>
      <Text style={classes.price}>${props.price}</Text>
      <View style={classes.btnContainer}>
        <CustomButton
          onClick={props.onClick}
          text={"Buy"}
          textColor={props.bgColor}
          bgColor={Colors.pallete.white}
        ></CustomButton>
      </View>
      <Image style={classes.image} source={props.image}></Image>
    </View>
  );
};

const styles = (props: { bgColor: any }) =>
  StyleSheet.create({
    container: {
      alignSelf: "flex-start",
      margin: 16,
      paddingLeft: 16,
      position: "relative",
      backgroundColor: props.bgColor,
      width: "85%",
      borderRadius: 20,
      alignItems: "flex-start",
    },
    limitedEdition: {
      paddingTop: 16,
      color: Colors.pallete.white,
      fontSize: 20,
      fontWeight: "bold",
    },
    name: {
      color: Colors.pallete.white,
      fontSize: 24,
      fontWeight: "bold",
    },
    price: {
      color: Colors.pallete.white,
      fontSize: 36,
      fontWeight: "bold",
    },
    image: {
      position: "absolute",
      width: 135,
      height: 135,
      right: -30,
      top: "20%",
    },
    btnContainer: {
      paddingBottom: 16,
    },
  });
