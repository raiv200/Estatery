import Image from "next/image";
import React from "react";
import BedSingleIcon from "./BedSingleIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import BathroomIcon from "./BathroomIcon";
import AreaSquareIcon from "./AreaSquareIcon";
import PopularRibbon from "./PopularRibbon";

const PropertyCard = ({
  imageUrl,
  isPopuplar,
  name,
  pricePerMonth,
  address,
  bedrooms,
  bathrooms,
  area,
  location,
  moveInDate,
  propertyType,
}) => {
  return (
    <div className="flex flex-col justify-between w-[350px] h-[450px] rounded-lg bg-white ">
      <Image
        className="rounded-t-md"
        src={imageUrl}
        width={400}
        height={200}
        alt="House Image"
      />

      <div className="flex flex-1 flex-col justify-start  px-4 pt-10  border-gray-900">
        <div className=" relative flex  flex-col space-y-2">
          {isPopuplar && <PopularRibbon />}

          <p className=" flex jsutify-center items-center text-2xl font-bold text-[#7065f0]">
            ${pricePerMonth}
            <span className="text-sm font-medium text-gray-600 ml-1">
              /month
            </span>
          </p>
          <h3 className="text-xl font-semibold text-gray-900 capitalize">
            {name}
          </h3>
          <p className="text-sm font-normal text-gray-600">{address}</p>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <BedSingleIcon />
              </span>
              <p className="font-medium text-sm text-gray-600">
                {bedrooms} Beds
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <BathroomIcon />
              </span>
              <p className="font-medium text-sm text-gray-600">
                {bathrooms} Bathrooms
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
                <AreaSquareIcon />
              </span>
              <p className="font-medium text-sm text-gray-600">
                {area} m<sup>2</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
