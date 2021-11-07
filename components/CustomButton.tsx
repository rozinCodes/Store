import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
  text: string;
  bgColor: string;
  textColor: string;
  onClick: () => void;
  margin?: boolean;
}

export const CustomButton = (props: Props) => {
  const margin = () => {
    if (props.margin === false) return false;
    else return true;
  };
  const classes = styles(props.bgColor, margin());

  return (
    <View style={[classes.btnContainer, classes.boxWithShadow]}>
      <Button
        title={props.text}
        onPress={props.onClick}
        color={props.textColor}
      ></Button>
    </View>
  );
};

const styles = (bgColor: string, margin: boolean) =>
  StyleSheet.create({
    btnContainer: {
      marginTop: margin === true ? 16 : 0,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 28,
      paddingRight: 28,
      backgroundColor: bgColor,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: bgColor,
    },
    boxWithShadow: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 5,
    },
  });
