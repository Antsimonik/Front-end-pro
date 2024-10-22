import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = (category) => {
  return (
    <View>
      <Image
        source={{ uri: category.icon }}
        style={{ width: 40, height: 40 }}
        onError={(e) =>
          console.log(`Error loading image: ${e.nativeEvent.error}`)
        }
      />
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
