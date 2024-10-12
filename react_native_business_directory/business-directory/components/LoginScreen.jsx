import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.picture}
          source={require("./../assets/images/login.png")}
        />
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          You Ultimate
          <Text style={styles.textComunity}> Community Business</Text> App
        </Text>
        <Text style={styles.textFindPost}>
          Find you favourite business near your and post your own business to
          your community
        </Text>
        <TouchableOpacity style={styles.btn}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "outfit",
            }}
          >
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  picture: {
    width: 220,
    height: 450,
    borderRadius: 20,
    borderWidth: 6,
    borderColor: "#000",
  },
  subContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: -20,
  },
  textComunity: {
    color: Colors.PRIMARY,
  },
  textFindPost: {
    fontSize: 15,
    fontFamily: "outfit",
    textAlign: "center",
    marginVertical: 15,
    color: Colors.GRAY,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20,
  },
});
