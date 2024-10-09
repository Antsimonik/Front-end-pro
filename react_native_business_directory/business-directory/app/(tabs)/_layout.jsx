import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen naame="home" />
      <Tabs.Screen naame="explore" />
      <Tabs.Screen naame="profile" />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
