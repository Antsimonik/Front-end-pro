import {
  View,
  Text,
  FlatList,
  Image,
  Linking,
  Share,
  Alert,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("./../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("./../../assets/images/pin.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("./../../assets/images/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("./../../assets/images/share.png"),
      url: business?.website,
    },
  ];

  const OnPressHandle = async (item) => {
    try {
      if (item.name === "Share") {
        await Share.share({
          message:
            business?.name +
            "\n Address: " +
            business.address +
            "\n Find more details on Business Directory App by Antsimonik!",
        });
      } else {
        const supported = await Linking.canOpenURL(item.url);
        if (supported) {
          await Linking.openURL(item.url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${item.url}`);
        }
      }
    } catch (error) {
      console.error("Error performing action: ", error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => OnPressHandle(item)}>
            <Image
              source={item?.icon}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
