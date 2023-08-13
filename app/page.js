import ArrowDownIcon from "@/components/ArrowDownIcon";
import CalendarIcon from "@/components/CalendarIcon";
import PropertyCard from "@/components/PropertyCard";
import React from "react";

const Home = () => {
  return (
    <section className="flex flex-1 flex-col space-y-6 border-2 border-pink-500  bg-[#f7f7fd] p-2">
      {/* Heading Title  */}

      <div className="flex flex-col space-y-4 md:max-w-screen-md lg:space-y-0 lg:flex-row lg:max-w-screen-xl w-full mx-auto items-center justify-between  border-2 border-red-700 py-4 px-2">
        <h2 className="text-gray-900 font-semibold text-3xl md:text-5xl ">
          Search properties to rent
        </h2>

        <button className="flex items-center font-medium text-md  bg-white border-[1px] border-gray-600 text-gray-500 px-2 py-2 md:px-4 md:py-3 rounded-lg">
          Search with Search Bar
          <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px] ml-6 text-[#7065f0]">
            <ArrowDownIcon />
          </span>
        </button>
      </div>
      {/* Search Filter  */}

      <div className="grid grid-cols-3 max-w-screen-sm md:grid-cols-2 md:max-w-screen-md lg:grid-cols-5 lg:max-w-screen-xl mx-auto w-full border-2 border-red-700  py-3 px-4 bg-gray-50 rounded-lg">
        <div className=" flex flex-col space-y-1 border-r-2 border-gray-400 px-2 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Location</h3>
          <div className="text-lg font-bold text-gray-900"> 
            New York, USA
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-2 border-gray-400 px-2 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">When</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
          Select Move In Date
          <span className=" flex items-center  bg-violet-100 rounded-full p-[6px]  text-[#7065f0]">
            <CalendarIcon />
          </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-2 border-gray-400 px-2 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Price</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
            $500 -$2500 
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px]  text-[#7065f0]">
            <ArrowDownIcon />
          </span>
          </div>
        </div>
        <div className=" flex flex-col space-y-1 border-r-2 border-gray-400 px-2 py-2 ">
          <h3 className="text-md font-medium text-gray-600 ">Property Type</h3>
          <div className="flex items-center justify-between text-lg font-bold text-gray-900">
            Houses 
            <span className=" flex items-center justify-center bg-violet-100 rounded-full p-[4px] text-[#7065f0]">
            <ArrowDownIcon />
          </span>
          </div>
        </div>
        <div className=" flex items-center justify-center  px-2 py-2">
          <button className="bg-[#7065f0] text-xl font-semibold text-white rounded-lg px-8 py-4">
            Search
          </button>
        </div>
      </div>
      {/* Property Cards  */}
          
      <div className="grid grid-cols-3 gap-x-10 gap-y-4 border-2 border-gray-900 max-w-screen-md lg:max-w-screen-xl mx-auto p-2">
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
           <PropertyCard />
      </div>
    
    </section>
  );
};

export default Home;
