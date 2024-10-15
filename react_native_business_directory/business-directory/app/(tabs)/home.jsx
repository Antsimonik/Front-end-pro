import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";

const home = () => {
  return (
    <View>
      {/* Header */}
      <Header />
      {/* Slider */}
      <Slider />
      {/* Category */}
      {/* Popular Business List */}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});
