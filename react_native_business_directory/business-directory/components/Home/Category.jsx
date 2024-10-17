import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "./../../constants/Colors";

const Category = () => {
  return (
    <View>
      <View
        style={{
          padding: 20,
          dispay: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          Category
        </Text>
        <Text style={{ color: Colors.PRIMARY, fontFamily: "outfit-medium" }}>
          View All
        </Text>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
