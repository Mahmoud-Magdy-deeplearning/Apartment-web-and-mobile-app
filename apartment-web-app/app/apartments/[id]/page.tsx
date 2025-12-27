import React from "react";
import Image from "next/image";
import { ApartmentSchema } from "@/lib/schema";
import { FaRegClock } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { FaRulerCombined } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { IoIosPricetag } from "react-icons/io";

export default async function page({ params }: { params: { id: string } }) {
  const apartmentJson = await fetch(
    `http://localhost:5000/apartments/${params.id}`, { cache: 'no-store' }
  );
  const apartmentData = await apartmentJson.json();

  const apartmentParsed = ApartmentSchema.safeParse(apartmentData);
  if (!apartmentParsed.success) {
    return (
      <div className="bg-base-200 flex-grow flex justify-center">
        Error Fetching the data
      </div>
    );
  }
  const { data } = apartmentParsed;
  return (
    <div className="bg-base-200 flex-grow flex justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 m-5 grid grid-flow-row grid-rows-12      ">
        <div className="  row-span-6  relative">
          <Image
            src={data.imageUrl}
            alt="Album"
            fill
            className="object-cover"
          />
        </div>
        <div className=" row-span-6 p-12    ">
          <div className=" flex flex-row items-center">
            <h2 className="card-title mr-5">{data.title}</h2>
            <FaRegClock className="mx-2 text-gray-500 " />
            <p className=" text-xs text-gray-500">
              {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex  justify-around my-10">
            <div className="flex w-fit ">
              <FaBath size={25} />
              <p className="pl-2">{data.bathCount}</p>
              <p className="pl-2">baths</p>
            </div>
            <div className="flex w-fit ">
              <IoBedOutline size={25} />
              <p className="pl-2">{data.roomCount}</p>
              <p className="pl-2">rooms</p>
            </div>
            <div className="flex w-fit ">
              <FaRulerCombined size={20} />
              <p className="pl-2">{data.space}</p>
              <p className="pl-2">sqm</p>
            </div>
          </div>
          <div className="flex w-fit">
            <FaLocationDot size={30} />
            <p className="text-black pl-2 text-lg font-bold">Location:</p>
            <p className="text-black pl-2 text-lg">{data.location}</p>
          </div>
          <div className="flex w-fit flex-col my-10 ">
            <h2 className="card-title text-lg mb-2">Specifications:</h2>
            <div className="flex w-fit">
              <p className="text-gray-700 pl-2 text-base font-semibold">
                Type:
              </p>
              <p className="text-gray-700 pl-2 text-base ">
                {data.apartmentType}
              </p>
            </div>
            <div className="flex w-fit">
              <p className="text-gray-700 pl-2 text-base font-semibold">
                Furniture:
              </p>
              <p className="text-gray-700 pl-2 text-base ">
                {data.furnitureType}
              </p>
            </div>
            <div className="flex w-fit">
              <p className="text-gray-700 pl-2 text-base font-semibold">
                Selling Type:
              </p>
              <p className="text-gray-700 pl-2 text-base ">
                {data.sellingType}
              </p>
            </div>
          </div>

          <h2 className="card-title pt-5">Description:</h2>
          <p className="pt-5">{data.description}</p>

          <div className="flex w-fit items-center mt-10">
            <IoIosPricetag size={20} />
            <h2 className="font-bold text-lg pl-2">Price: </h2>
            <p className="text-gray-700 pl-2 text-base ">
              EGP {data.price} / {data.sellingType}
            </p>
          </div>
          <div className="card-actions justify-end pt-5">
            <Link href="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
