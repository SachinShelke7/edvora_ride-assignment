/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = ({ user }) => {
  // console.log(user);
  return (
    <div className="navbar">
      <div>
        <h3 className="text-xl sm:text-[2.25rem] font-[700] cursor-pointer">
          Edvora
        </h3>
      </div>
      <div className="flex justify-between items-center space-x-5">
        <div>
          <h5 className="sm:text-[20px] cursor-pointer">{user.name}</h5>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
          <img src={user.url} alt="profile" className="hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
