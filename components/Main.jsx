/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { MdSort } from "react-icons/md";
import Menu from "./Menu";
import Ride from "./Ride";

const Main = ({ rides }) => {
  const [toggle, setToggle] = useState(false);

  const [nearest, setNearest] = useState("true");
  const [upcoming, setUpcoming] = useState(false);
  const [past, setPast] = useState(false);

  function handleNearest() {
    setNearest(true);
    setUpcoming(false);
    setPast(false);
  }
  function handleUpcoming() {
    setUpcoming(true);
    setNearest(false);
    setPast(false);
  }
  function handlePast() {
    setPast(true);
    setNearest(false);
    setUpcoming(false);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex sm:space-x-10">
          <p className="category_active" onClick={handleNearest}>
            Nearest rides
          </p>
          <p className="category" onClick={handleUpcoming}>
            Upcoming rides (4)
          </p>
          <p className="category" onClick={handlePast}>
            Past rides (2)
          </p>
        </div>

        <div className="transform transition-all duration-1000 flex items-center">
          {toggle && <Menu rides={rides} />}
          <div
            className="px-2 text-[#F2F2F2]"
            onClick={() => setToggle((toggle) => !toggle)}
          >
            <div className="text-[16px] font-[500]">
              {!toggle && (
                <div className="flex space-x-2 items-center cursor-pointer">
                  <MdSort size={18} />
                  <p>Filter</p>
                </div>
              )}
              {toggle && <p className="cursor-pointer">CLOSE</p>}
            </div>
          </div>
        </div>
      </div>
      {nearest && (
        <div>
          {rides &&
            rides.map((ride, t) => {
              return <Ride ride={ride} t={t} key={t} />;
            })}
        </div>
      )}
      {upcoming && <div className="text-white h-screen">upcoming</div>}
      {past && <div className="text-white h-screen">past</div>}
    </div>
  );
};

export default Main;
