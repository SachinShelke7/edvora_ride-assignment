import React from "react";

const Menu = ({ rides }) => {
  return (
    <div className="bg-[#171717] p-[35px] rounded-xl m-5">
      <h3 className="border-b pb-[12px] mb-[20px] text-[20px] font-[300] text-[#A5A5A5]">
        Filters
      </h3>
      <div className="relative max-w-xs mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full p-2.5 text-white bg-[#232323] outline-none rounded-md shadow-sm appearance-none">
          {rides &&
            rides?.map((ride, key) => {
              return <option key={key}>{ride.state}</option>;
            })}
        </select>
      </div>
      <div className="relative max-w-xs mx-auto mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <select className="w-full p-2.5 text-white bg-[#232323] outline-none rounded-md shadow-sm appearance-none">
          {rides &&
            rides?.map((ride, key) => {
              return <option key={key}>{ride.city}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default Menu;
