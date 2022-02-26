import React from "react";
import { MdSort, MdOutlineArrowDropDown } from "react-icons/md";

const Sort = () => {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-10">
        <p className="category">Nearest rides</p>
        <p className="category">Upcoming rides (4)</p>
        <p className="category">Past rides (2)</p>
      </div>

      <div className="px-2 text-[#F2F2F2] flex space-x-2 items-center">
        <MdSort size={18} />
        <p className="text-[16px] font-[500]">Filter</p>
      </div>
    </div>
  );
};

export default Sort;
