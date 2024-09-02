import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";
import { Fragment } from "react";

const RootLayout = () => {
  return (
    <Fragment>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </Fragment>
  );
};

export default RootLayout;
