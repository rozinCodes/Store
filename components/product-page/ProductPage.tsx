import React from "react";
import { Text, View, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemsList } from "../../constants/Products";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { CustomButton } from "../CustomButton";

interface Props {
  navigation: any;
  route: any;
}

const ProductPage = (props: Props) => {
  const productDetails = ItemsList[props.route.params.productId];
  return (
    <SafeAreaView>
      <Text style={styles.logo}>Camera Store</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.image} source={productDetails.image}></Image>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <CustomButton
              onClick={() => props.navigation.navigate("Home")}
              text={"Full View"}
              bgColor={Colors.pallete.black}
              textColor={Colors.pallete.white}
            ></CustomButton>
          </View>

          <Text style={styles.title}>{productDetails.name}</Text>
          <Text style={styles.description}>
            Capture all those unique moments in life with friends and family in
            an instant.
          </Text>
          <View style={styles.cta}>
            <View>
              <Text style={styles.price}>${productDetails.price}</Text>
            </View>
            <CustomButton
              margin={false}
              onClick={() => {}}
              text={"Buy Now"}
              bgColor={productDetails.color}
              textColor={Colors.pallete.white}
            ></CustomButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.pallete.lighterGray,
  },
  separator: {
    marginVertical: 12,
    height: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: 32,
  },
  logo: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
  },
  title: {
    paddingTop: 16,
    fontSize: 32,
    fontWeight: "bold",
  },
  description: { fontSize: 20, paddingTop: 8, color: Colors.pallete.gray },
  cta: {
    marginTop: 8,
    padding: 8,
    borderRadius: 20,
    borderColor: Colors.pallete.lightGray,
    borderWidth: 1,
    paddingTop: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    // textAlignVertical: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default ProductPage;
