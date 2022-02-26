import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h3 className="text-[2.25rem] font-[700]">Edvora</h3>
      </div>
      <div className="flex justify-between items-center space-x-5">
        <div>
          <h5 className="text-[20px]">User Name</h5>
        </div>
        <div className="bg-white w-7 h-7 p-5 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
