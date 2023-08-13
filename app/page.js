"use client"

import ArrowDownIcon from "@/components/ArrowDownIcon";
import CalendarIcon from "@/components/CalendarIcon";
import HeadingTitle from "@/components/HeadingTitle";
import PropertyCard from "@/components/PropertyCard";
import { DUMMY_DATA } from "@/constant";
import React, { useState } from "react";

const Home = () => {

   const [propertiesData,setPropertiesData] = useState(DUMMY_DATA);

  return (
    <section className="flex flex-1 flex-col space-y-6 border-2 border-pink-500  bg-gray-100 p-2">
      {/* Heading Title  */}

      <HeadingTitle />
      {/* Search Filter  */}

      <div className="grid grid-cols-3 max-w-screen-sm md:grid-cols-2 md:max-w-screen-md lg:grid-cols-5 lg:max-w-screen-xl mx-auto w-full  py-3 px-4 bg-white rounded-lg">
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Location</h3>
          <div className="text-lg font-bold text-gray-900">New York, USA</div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">When</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
            Select Move In Date
            <span className=" flex items-center  bg-violet-100 rounded-full p-[6px]  text-[#7065f0]">
              <CalendarIcon />
            </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Price</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
            $500 -$2500
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
              <ArrowDownIcon />
            </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Property Type</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
            Houses
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px] text-[#7065f0]">
              <ArrowDownIcon />
            </span>
          </div>
        </div>
        <div className=" flex items-center justify-center px-2 py-2">
          <button className="bg-[#7065f0] text-xl font-semibold text-white rounded-lg px-8 py-3">
            Search
          </button>
        </div>
      </div>
      {/* Property Cards  */}

      <div className="grid grid-cols-3 place-items-center gap-x-10 gap-y-4  max-w-screen-md lg:max-w-screen-xl mx-auto w-full py-2 px-4">
        {propertiesData.sort((a,b) => (b.is_popular ? 1:-1)).map((data) => (
          <PropertyCard
            imageUrl={data.image_url}
            isPopuplar={data.is_popular}
            name={data.name}
            pricePerMonth={data.price_per_month}
            address={data.address}
            noOfBeds={data.bedrooms}
            noOfBathrooms={data.bathrooms}
            area={data.area}
            location={data.location}
            moveInDate={data.move_in_date}
            propertyType={data.property_type}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
