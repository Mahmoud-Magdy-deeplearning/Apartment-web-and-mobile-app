import Card from "./components/Card";
import { ApartmentArraySchema, ApartmentArrayType } from "@/lib/schema";
export default async function Home() {
 const res = await fetch('http://localhost:5000/apartments', { cache: 'no-store' });
  const apartmentsData = await res.json();
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
