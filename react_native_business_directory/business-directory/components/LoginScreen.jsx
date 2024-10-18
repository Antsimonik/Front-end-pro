import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Colors } from "@/constants/Colors";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
  });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // signIn or signUp for next steps
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
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
        <Pressable style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Let's Get Started</Text>
        </Pressable>
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
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "outfit",
  },
});
