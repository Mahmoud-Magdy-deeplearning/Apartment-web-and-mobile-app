import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { ApartmentType } from "@/lib/schema";
import { useApartment } from "@/lib/Queries";
import { ActivityIndicator } from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

const ApartmentScreen = () => {
  const { id } = useLocalSearchParams();
  const apartmentId = id as string;
  const { data: apartment, error, isLoading } = useApartment(apartmentId);
  const apartmentData = apartment as ApartmentType;
  function truncate(str: string, num: number) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch the apartments</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: truncate(apartmentData.title, 25),
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: apartmentData.imageUrl }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{apartmentData.title}</Text>
            <MaterialCommunityIcons
              name="clock-outline"
              size={24}
              color="gray"
            />
            <Text style={styles.date}>
              {new Date(apartmentData.createdAt).toLocaleDateString("en-GB")}
            </Text>
          </View>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="black" />
            <Text style={styles.location}>{apartmentData.location}</Text>
          </View>
          <View style={styles.specsContainer}>
            <View style={styles.spec}>
              <FontAwesome5 name="bath" size={24} color="black" />
              <Text style={styles.specText}>
                {apartmentData.bathCount} baths
              </Text>
            </View>
            <View style={styles.spec}>
              <Ionicons name="bed-outline" size={24} color="black" />
              <Text style={styles.specText}>
                {apartmentData.roomCount} rooms
              </Text>
            </View>
            <View style={styles.spec}>
              <FontAwesome5 name="ruler-combined" size={24} color="black" />
              <Text style={styles.specText}>{apartmentData.space} sqm</Text>
            </View>
          </View>

          <View style={styles.specificationsContainer}>
            <Text style={styles.specificationsTitle}>Specifications:</Text>
            <View style={styles.specification}>
              <Text style={styles.specificationLabel}>Type:</Text>
              <Text style={styles.specificationValue}>
                {apartmentData.apartmentType}
              </Text>
            </View>
            <View style={styles.specification}>
              <Text style={styles.specificationLabel}>Furniture:</Text>
              <Text style={styles.specificationValue}>
                {apartmentData.furnitureType}
              </Text>
            </View>
            <View style={styles.specification}>
              <Text style={styles.specificationLabel}>Selling Type:</Text>
              <Text style={styles.specificationValue}>
                {apartmentData.sellingType}
              </Text>
            </View>
          </View>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.description}>{apartmentData.description}</Text>
          <View style={styles.priceContainer}>
            <Ionicons name="pricetag-outline" size={24} color="black" />
            <Text style={styles.priceLabel}>Price: </Text>
            <Text style={styles.priceValue}>{apartmentData.price} EGP</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: "flex",
    width: "95%",
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 2,
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: "gray",
    padding: 5,
  },
  specsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 30,
  },
  spec: {
    flexDirection: "row",
    alignItems: "center",
  },
  specText: {
    paddingLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  location: {
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "300",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  description: {
    paddingVertical: 10,
    paddingLeft: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  priceLabel: {
    color: "black",
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  priceValue: {
    paddingLeft: 2,
    fontSize: 16,
  },
  specificationsContainer: {
    marginBottom: 10,
  },
  specificationsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  specification: {
    flexDirection: "row",
    alignItems: "center",
  },
  specificationLabel: {
    color: "black",
    paddingLeft: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  specificationValue: {
    color: "gray",
    paddingLeft: 5,
    fontSize: 16,
  },
});

export default ApartmentScreen;
