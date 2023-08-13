import React from "react";
import ArrowDownIcon from "./ArrowDownIcon";

const HeadingTitle = () => {
  return (
    <div className="flex flex-col space-y-4 md:max-w-screen-md lg:space-y-0 lg:flex-row lg:max-w-screen-xl w-full mx-auto items-center justify-between py-4 px-2">
      <h2 className="text-gray-900 font-semibold text-3xl md:text-5xl ">
        Search properties to rent
      </h2>

      <button className="flex items-center font-medium text-md  bg-gray-50 border-[1px] border-gray-600 text-gray-500 px-2 py-2 md:px-4 md:py-3 rounded-lg">
        Search with Search Bar
        <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px] ml-6 text-[#7065f0]">
          <ArrowDownIcon />
        </span>
      </button>
    </div>
  );
};

export default HeadingTitle;
