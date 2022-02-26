import Image from "next/image";
import React from "react";
import { MdSort, MdOutlineArrowDropDown } from "react-icons/md";
import map from "../assets/map.svg";

const Sort = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-10">
          <p className="category">Nearest rides</p>
          <p className="category">Upcoming rides (4)</p>
          <p className="category">Past rides (2)</p>
        </div>

        <div className="px-2 text-[#F2F2F2] flex space-x-2 items-center cursor-pointer">
          <MdSort size={18} />
          <p className="text-[16px] font-[500]">Filter</p>
        </div>
      </div>

      <div className="ride_card pt-[26px]">
        <div className="flex justify-between">
          <div className="flex space-x-10">
            <div>
              <Image src={map} alt="map" />
            </div>
            <div>
              <p className="text-[18px] font-[500] text-[#CFCFCF]">
                Ride ID : <span className="text-white">002</span>
              </p>
              <p className="text-[18px] font-[500] text-[#CFCFCF]">
                Origin Station : <span className="text-white">20</span>
              </p>
              <p className="text-[18px] font-[500] text-[#CFCFCF]">
                station_path :{" "}
                <span className="text-white">
                  [20, 39, 40, 42, 54, 63, 72, 88, 98]
                </span>
              </p>
              <p className="text-[18px] font-[500] text-[#CFCFCF]">
                Date : <span className="text-white">15th Feb 2022 16:33</span>
              </p>
              <p className="text-[18px] font-[500] text-[#CFCFCF]">
                Distance : <span className="text-white">0</span>
              </p>
            </div>
          </div>
          <div className="max-w-fit h-[23px] flex space-x-2 items-center">
            <div className="bg-black rounded-full px-4 py-2 text-[12px] font-[500] text-white">
              City Name
            </div>
            <div className="bg-black rounded-full px-4 py-2 text-[12px] font-[500] text-white">
              State Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
