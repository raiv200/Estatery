"use client";

import ArrowDownIcon from "@/components/ArrowDownIcon";
import CalendarIcon from "@/components/CalendarIcon";
import HeadingTitle from "@/components/HeadingTitle";
import PropertyCard from "@/components/PropertyCard";
import { DUMMY_DATA } from "@/constant";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [propertiesData, setPropertiesData] = useState(null);
  const [filteredPropertiesData, setFilteredPropertiesData] = useState();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    setPropertiesData(DUMMY_DATA);
    setFilteredPropertiesData(DUMMY_DATA);
  }, []);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const applySearchFilters = (
    propertiesData,
    location,
    moveInDate,
    priceRange,
    propertyType
  ) => {
    let newData;

    if (location && location !== undefined) {
      newData = propertiesData.filter(
        (data) => data.location.toLowerCase() === location.toLowerCase()
      );
    }

    if (moveInDate && moveInDate !== undefined) {
      newData = newData.filter((data) => data.move_in_date <= moveInDate);
    }

    if (priceRange && priceRange !== undefined) {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      newData = newData.filter(
        (data) =>
          data.price_per_month >= minPrice && data.price_per_month <= maxPrice
      );
    }

    if (propertyType && propertyType !== undefined) {
      newData = newData.filter(
        (data) =>
          data.property_type.toLowerCase() === propertyType.toLowerCase()
      );
    }

    return newData;
  };

  const handleSearch = () => {
    const newData = applySearchFilters(
      propertiesData,
      location,
      date,
      priceRange,
      propertyType
    );
    console.log(propertiesData);
    console.log("new Data", newData)
    setFilteredPropertiesData(newData);
  };

  return (
    <section className="flex flex-1 flex-col space-y-6  bg-gray-100 p-2">
      {/* Heading Title  */}

      <HeadingTitle />
      {/* Search Filter  */}

      <div className="grid grid-cols-3 max-w-screen-sm md:grid-cols-2 md:max-w-screen-md lg:grid-cols-5 lg:max-w-screen-xl mx-auto w-full  py-3 px-4 bg-white rounded-lg">
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 pl-1">Location</h3>
          {/* <div className="text-lg font-bold text-gray-900">New York, USA</div> */}
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-md font-bold text-gray-900 cursor-pointer"
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Miami">Miami</option>
          </select>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600">When</h3>
          <div className="flex items-center justify-between text-md font-bold text-gray-900">
            {showCalendar ? (
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            ) : (
              "Select Move In Date"
            )}

            <span
              onClick={handleShowCalendar}
              className=" cursor-pointer flex items-center  bg-violet-100 rounded-full p-[6px]  text-[#7065f0]"
            >
              <CalendarIcon />
            </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 pl-1 ">Price</h3>
          <div className="flex items-center justify-between text-md font-bold text-gray-900">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="text-md font-bold text-gray-900 cursor-pointer"
            >
              <option value="">Select Price Range</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-1000">$501 - $1000</option>
              <option value="1001-1500">$1001 - $1500</option>
              <option value="1501-2000">$1501 - $2000</option>
              <option value="2001-2500">$2001 - $2500</option>
              <option value="2501-3000">$2501 - $3000</option>
              <option value="3001-3500">$3001 - $3500</option>
              <option value="3501-4000">$3501 - $4000</option>
              <option value="4001-4500">$4001 - $4500</option>
              <option value="4501-5000">$4501 - $5000</option>
              <option value="5001-5500">$5001 - $5500</option>
              <option value="5501-6000">$5501 - $6000</option>
            </select>
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
              <ArrowDownIcon />
            </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-[1px] border-gray-400 px-3 py-2 ">
          <h3 className="text-md font-medium text-gray-600 pl-1 ">
            Property Type
          </h3>
          <div className="flex items-center justify-between text-md font-bold text-gray-900">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="text-md font-bold text-gray-900 cursor-pointer"
            >
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Townhouse">Townhouse</option>
            </select>
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px] text-[#7065f0]">
              <ArrowDownIcon />
            </span>
          </div>
        </div>
        <div
          onClick={handleSearch}
          className=" flex items-center justify-center px-2 py-2"
        >
          <button className="bg-[#7065f0] text-xl font-semibold text-white rounded-lg px-8 py-3">
            Search
          </button>
        </div>
      </div>
      {/* Property Cards  */}

      {filteredPropertiesData?.length === 0 ? (
          <div className="flex items-center justify-center w-[1200px] mx-auto h-[400px] border-2 border-violet-600 border-dashed">

          <h3 className="font-bold text-5xl text-gray-900 text-center">
            No Property Found
          </h3>
          </div>
        ) : (
          " "
        )}

      <div className="grid grid-cols-3 place-items-center gap-x-10 gap-y-4  max-w-screen-md lg:max-w-screen-xl mx-auto w-full py-2 px-4">
        {filteredPropertiesData?.sort((a, b) => (b.is_popular ? 1 : -1)).map((data) => (
            <PropertyCard
              key={data.address}
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
