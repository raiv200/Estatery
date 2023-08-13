import React from "react";
import SparkleIcon from "./SparkleIcon";

const PopularRibbon = () => {
  return (
    <>
      <div className=" z-50 flex items-center justify-center absolute -top-8 -left-8 bg-[#7065f0] w-[140px] h-[34px] rounded-lg">
        <div className="flex items-center space-x-2">
          <span className=" flex items-center justify-center p-[4px] text-white">
            <SparkleIcon />
          </span>
          <p className="font-medium text-sm text-white uppercase">Popular</p>
        </div>
      </div>
      <div className="absolute z-10 -top-[18px] -left-[31px] rotate-6 triangle-left"></div>
    </>
  );
};

export default PopularRibbon;
