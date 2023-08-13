import Image from "next/image";
import React from "react";
import BedSingleIcon from "./BedSingleIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import BathroomIcon from "./BathroomIcon";
import AreaSquareIcon from "./AreaSquareIcon";

const PropertyCard = () => {
  return (
    <div className="flex flex-col justify-between w-[350px] h-[450px] rounded-lg bg-white border-[1px] border-violet-600">
      <Image
        className="rounded-t-md"
        src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        width={400}
        height={200}
        alt="House Image"
      />

      <div className="flex flex-1 flex-col justify-start  px-4 pt-10  border-gray-900">
        <div className=" relative flex  flex-col space-y-2">
         
          <div className=" z-50 flex items-center justify-center absolute -top-8 -left-8 bg-[#7065f0] w-[140px] h-[34px] rounded-lg">
            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-cente p-[4px]  text-white">
                <BedSingleIcon />
              </span>
              <p className="font-medium text-md text-white uppercase">
                Popular
              </p>
            </div>
          </div>
          <div className="absolute z-10 -top-[18px] -left-[31px] rotate-6 triangle-left"></div>

          <p className=" flex jsutify-center items-center text-2xl font-bold text-[#7065f0]">
            $2095
            <span className="text-sm font-medium text-gray-600 ml-1">
              /month
            </span>
          </p>
          <h3 className="text-3xl font-semibold text-gray-900 capitalize">
            Palm Harbor
          </h3>
          <p className="text-md font-normal text-gray-600">
            2699 Green Valey, Hoghlang Lake, FL
          </p>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <BedSingleIcon />
              </span>
              <p className="font-medium text-md text-gray-600">3 Beds</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <BathroomIcon />
              </span>
              <p className="font-medium text-md text-gray-600">2 Bathrooms</p>
            </div>

            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <AreaSquareIcon />
              </span>
              <p className="font-medium text-md text-gray-600">
                5x7 m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
