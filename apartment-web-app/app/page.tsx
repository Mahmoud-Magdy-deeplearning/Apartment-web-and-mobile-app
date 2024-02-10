import Card from "./components/Card";
import { ApartmentArraySchema, ApartmentArrayType } from "@/lib/schema";
export default async function Home() {
  const apartmentsJson = await fetch(`${process.env.BACKEND_URL!}/apartments`);
  const apartmentsData = await apartmentsJson.json();
  const apartmentParsed = ApartmentArraySchema.safeParse(apartmentsData);
  if (!apartmentParsed.success) {
    return (
      <div className="bg-base-200 flex-grow flex flex-col  items-center ">
        Error Fetching the data
      </div>
    );
  }
  return (
    <div
      className="bg-base-200 flex-grow flex flex-col  items-center 
    "
    >
      {apartmentParsed.data.map((apartment) => (
        <Card apartment={apartment} key={apartment.id} />
      ))}
    </div>
  );
}
