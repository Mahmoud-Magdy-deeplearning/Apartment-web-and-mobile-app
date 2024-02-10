import { z } from "zod";

const furnitureEnum = z.enum(["Furnished", "Unfurnished", "Semi-furnished"]);
const sellingEnum = z.enum(["Rent", "Sell"]);
const apartmentEnum = z.enum(["Studio", "Villa", "Apartment", "House"]);

export const ApartmentSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  location: z.string(),
  space: z.number(),
  furnitureType: furnitureEnum,
  sellingType: sellingEnum,
  apartmentType: apartmentEnum,
  roomCount: z.number(),
  bathCount: z.number(),
  description: z.string(),
  imageUrl: z.string(),
  createdAt: z.string(),
});

const cardApartmentSchema = ApartmentSchema.omit({
  furnitureType: true,
  sellingType: true,
  space: true,
  apartmentType: true,
  roomCount: true,
  bathCount: true,
});

export const ApartmentArraySchema = z.array(cardApartmentSchema);

export type ApartmentType = z.infer<typeof ApartmentSchema>;
export type ApartmentArrayType = z.infer<typeof ApartmentArraySchema>;
export type cardApartmentType = z.infer<typeof cardApartmentSchema>;
