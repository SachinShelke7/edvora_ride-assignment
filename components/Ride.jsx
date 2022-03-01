/* eslint-disable @next/next/no-img-element */
import React from "react";

const Ride = ({ ride, index }) => {
  return (
    <div className="ride_card pt-[26px] mt-10" key={index}>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="flex flex-col sm:flex-row sm:space-x-10 justify-center sm:items-center">
          <div className="">
            <img
              src={ride.map_url}
              alt="map"
              className="w-full sm:min-w-[296px] h-[148px] object-cover rounded-[10px]"
            />
          </div>
          <div className="pt-5 md:pt-0">
            <p className="sm:text-[18px] font-[500] text-[#CFCFCF]">
              Ride ID : <span className="text-white">{ride.id}</span>
            </p>
            <p className="text-[18px] font-[500] text-[#CFCFCF]">
              Origin Station :
              <span className="text-white">{ride.origin_station_code}</span>
            </p>
            <p className="text-[18px] font-[500] text-[#CFCFCF]">
              station_path :
              <span className="text-white">{ride.station_path}</span>
            </p>
            <p className="text-[18px] font-[500] text-[#CFCFCF]">
              Date : <span className="text-white">{ride.date}</span>
            </p>
            <p className="text-[18px] font-[500] text-[#CFCFCF]">
              Distance : <span className="text-white">{ride.distance}</span>
            </p>
          </div>
        </div>
        <div className="max-w-fit h-[23px] flex space-x-2 items-center py-5 md:py-0">
          <div className="bg-[#101010] rounded-full px-4 py-2 text-[12px] font-[500] text-white cursor-pointer">
            {ride.city}
          </div>
          <div className="bg-[#101010] rounded-full px-4 py-2 text-[12px] font-[500] text-white cursor-pointer">
            {ride.state}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ride;
