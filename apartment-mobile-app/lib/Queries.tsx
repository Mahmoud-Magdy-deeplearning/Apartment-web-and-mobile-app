import { useQuery } from "@tanstack/react-query";
import {
  ApartmentArraySchema,
  ApartmentArrayType,
  ApartmentSchema,
  ApartmentType,
} from "./schema";
import { API } from "@env";

export const useApartmentsList = () => {
  return useQuery<ApartmentArrayType>({
    queryKey: ["Apartments"],
    queryFn: async () => {
      try {
        const data = await fetch(`${API}/apartments`);
        console.log("data", data);
        const json = await data.json();
        const apartments = ApartmentArraySchema.parse(json);
        return apartments;
      } catch (error) {
        throw new Error("Error fetching the apartments");
      }
    },
  });
};
export const useApartment = (id: string) => {
  return useQuery<ApartmentType>({
    queryKey: ["Apartments", id],
    queryFn: async () => {
      try {
        const data = await fetch(`${API}/apartments/${id}`);
        const json = await data.json();
        const apartment = ApartmentSchema.parse(json);
        return apartment;
      } catch (error) {
        throw new Error("Error fetching the apartment");
      }
    },
  });
};
