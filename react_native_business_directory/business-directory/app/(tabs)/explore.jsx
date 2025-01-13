import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import Category from "../../components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

const explore = () => {
  const [businessList, setBusinessList] = useState([]);
  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
        Explore More
      </Text>
      {/* SearchBar */}
      <View style={styles.containerSearchInputDesign}>
        <Ionicons name="search" size={24} color={Colors.PRIMARY} />
        <TextInput style={styles.searchInputDesign} placeholder="Search..." />
      </View>
      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />
      {/* Business List */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },
  searchInputDesign: {
    fontFamily: "outfit",
    fontSize: 16,
  },
});
