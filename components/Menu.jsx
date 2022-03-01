/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Menu = ({
  rides,
  setSelectedCity,
  setSelectedState,
  statesArray,
  cityArray,
  selectedState,
  selectedCity,
}) => {
  return (
    <div className="bg-[#171717] p-[35px] rounded-xl m-5 fixed top-0 right-[50px] w-[300px] border border-white">
      <h3 className="border-b pb-[12px] mb-[20px] text-[20px] font-[300] text-[#A5A5A5]">
        Filters
      </h3>
      <div className="relative max-w-xs mx-auto">
        <MdOutlineArrowDropDown
          size={30}
          color="white"
          className="absolute right-2 top-2"
        />
        <select
          className="menu_select"
          onChange={(e) => setSelectedState(e.target.value)}
          value={selectedState}
        >
          {statesArray &&
            statesArray?.map((ride, index) => {
              return <option key={index}>{ride}</option>;
            })}
        </select>
      </div>
      <div className="relative max-w-xs mx-auto mt-5">
        <MdOutlineArrowDropDown
          size={30}
          color="white"
          className="absolute right-2 top-2"
        />
        <select
          className="menu_select"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          {cityArray &&
            cityArray?.map((city, key) => {
              return <option key={key}>{city}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default Menu;
