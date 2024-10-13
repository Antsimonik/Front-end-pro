import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "./../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  const { user } = useUser();

  return (
    <View style={styles.overContainerImageUser}>
      <View style={styles.containerImageUser}>
        <Image source={{ uri: user?.imageUrl }} style={styles.imageUser} />
        <View>
          <Text style={styles.greetingDesign}>Welcome,</Text>
          <Text style={styles.fullNameDesign}>{user?.fullName}</Text>
        </View>
      </View>
      {/*Search Bar*/}
      <View style={styles.containerSearchInputDesign}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput style={styles.searchInputDesign} placeholder="Search..." />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  imageUser: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  overContainerImageUser: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerImageUser: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  greetingDesign: {
    color: "#fff",
  },
  fullNameDesign: {
    fontSize: 19,
    color: "#fff",
    fontFamily: "outfit-medium",
  },
  containerSearchInputDesign: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  searchInputDesign: {
    fontFamily: "outfit",
    fontSize: 16,
  },
});
