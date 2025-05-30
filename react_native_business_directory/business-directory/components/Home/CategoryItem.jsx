import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const CategoryItem = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 99,
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{ width: 40, height: 40 }}
          // onError={(e) =>
          //   console.log(`Error loading image: ${e.nativeEvent.error}`)
          // }
        />
        <Text
          style={{
            fonstSize: 12,
            fontFamily: "outfit-medium",
            textAlign: "center",
            marginTop: 5,
          }}
        >
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
