import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { TouchableOpacity } from "react-native";

export default function Reviews() {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        Reviews
      </Text>
      <View>
        <Rating
          showRating={false}
          imageSize={20}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder="write your comment"
          numberOfLines={4}
          onChangeText={(value) => console.log(value)}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity
          disabled
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 6,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
