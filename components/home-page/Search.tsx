import { View, Text, Button, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const searchIcon = require("../../assets/images/searchIcon.png");

interface Props {}

export const B = (props: { children: any }) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const Search = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Our Featured {"\n"}
        <B>Cameras</B>
      </Text>
      <View style={styles.searchBox}>
        <Text style={styles.searchText}>Search</Text>
        <Image style={styles.searchIcon} source={searchIcon}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  searchBox: {
    backgroundColor: Colors.pallete.black,
    padding: 16,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    color: Colors.pallete.white,
    paddingRight: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default Search;
