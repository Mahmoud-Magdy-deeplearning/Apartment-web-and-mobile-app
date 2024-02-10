import React from "react";
import type { cardApartmentType } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import { IoIosPricetag } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ apartment }: { apartment: cardApartmentType }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4  m-5 lg:grid lg:grid-cols-12 lg:w-1/2 ">
      <div className="relative  min-h-[300px] w-full lg:col-span-6 xl:col-span-8">
        <Image
          src={apartment.imageUrl}
          alt="Album"
          className="p-6 object-cover w-full h-full"
          fill
        />
      </div>
      <div className="card-body lg:col-span-6 xl:col-span-4">
        <h2 className="card-title">{apartment.title}</h2>
        <div className="flex justify-between pt-3 pb-5 ml-4 mr-2 ">
          <div className="flex w-fit">
            <FaLocationDot />
            <p className="text-black pl-2 text-sm">{apartment.location}</p>
          </div>
          <div className="flex w-fit">
            <IoIosPricetag />

            <p className="text-gray-700 pl-2 text-sm font-semibold">Price: </p>
            <p className="text-gray-600 pl-2 text-sm">EGP {apartment.price} </p>
          </div>
        </div>
        <p className="">{apartment.description}</p>

        <div className="flex w-fit ">
          <FaRegClock className=" text-gray-500" />

          <p className="text-gray-400 pl-2 text-sm">Published at:</p>
          <p className="text-gray-400 pl-2 text-sm">
            {new Date(apartment.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/apartments/${apartment.id}`}>
            <button className="btn btn-primary">Discover more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
