import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import Card from "@/components/Card";
import { useApartmentsList } from "@/lib/Queries";
import { Stack } from "expo-router";
import { API } from "@env";

const index = () => {
  console.log("Hello from app/index.tsx", API);
  const { data: apartments, error, isLoading } = useApartmentsList();
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch the apartments</Text>;
  }
  return (
    <View>
      <Stack.Screen
        options={{ title: "Apartments", headerTitleAlign: "center" }}
      />
      <FlatList
        data={apartments}
        renderItem={({ item }) => <Card apartment={item} />}
      />
    </View>
  );
};

export default index;
