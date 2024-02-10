import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { cardApartmentType } from "@/lib/schema";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ apartment }: { apartment: cardApartmentType }) => {
  return (
    <Link href={`/${apartment.id}`} asChild>
      <Pressable style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: apartment.imageUrl }} style={styles.image} />
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>{apartment.title}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.specContainer}>
              <Ionicons name="location-outline" size={20} style={styles.Icon} />
              <Text style={styles.infoText}>{apartment.location}</Text>
            </View>
            <View style={styles.specContainer}>
              <Ionicons name="pricetag-outline" size={20} style={styles.Icon} />
              <Text style={styles.infoText}>Price: EGP {apartment.price}</Text>
            </View>
          </View>
          <Text style={styles.description}>{apartment.description}</Text>
          <View style={styles.dateContainer}>
            <Ionicons name="time-outline" size={20} style={styles.Icon} />
            <Text style={styles.dateLabel}>Published at:</Text>
            <Text style={styles.dateValue}>
              {new Date(apartment.createdAt).toLocaleDateString("en-GB")}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
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
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginRight: 15,
  },
  specContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  dateLabel: {
    fontSize: 13,
  },
  dateValue: {
    fontSize: 13,
    marginLeft: 5,
    fontWeight: "300",
  },
  Icon: {
    marginRight: 5,
  },
});

export default Card;
