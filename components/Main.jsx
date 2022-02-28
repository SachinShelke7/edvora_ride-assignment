/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import Menu from "./Menu";
import Ride from "./Ride";

const Main = ({ rides }) => {
  const [toggle, setToggle] = useState(false);

  const [nearest, setNearest] = useState("true");
  const [upcoming, setUpcoming] = useState(false);
  const [past, setPast] = useState(false);
  const [styleNearest, setStyleNearest] = useState("category_active");
  const [styleUpcoming, setStyleUpcoming] = useState("category");
  const [stylePast, setStylePast] = useState("category");
  const [upcomingRides, setUpcomingRides] = useState([]);
  const [pastRides, setPastRides] = useState([]);

  const date = new Date();
  let upcomingLength = upcomingRides.length;
  let pastLength = pastRides.length;

  useEffect(() => {
    {
      rides &&
        setUpcomingRides(rides.filter((ride) => new Date(ride.date) >= date));
      setPastRides(rides.filter((ride) => new Date(ride.date) <= date));
    }
  }, []);

  function handleNearest() {
    setNearest(true);
    setUpcoming(false);
    setPast(false);
    setStyleNearest("category_active");
    setStyleUpcoming("category");
    setStylePast("category");
  }
  function handleUpcoming() {
    setUpcoming(true);
    setNearest(false);
    setPast(false);
    setStyleNearest("category");
    setStyleUpcoming("category_active");
    setStylePast("category");
  }
  function handlePast() {
    setPast(true);
    setNearest(false);
    setUpcoming(false);
    setStyleNearest("category");
    setStyleUpcoming("category");
    setStylePast("category_active");
  }

  console.log(upcomingRides);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex sm:space-x-10">
          <p className={`${styleNearest}`} onClick={handleNearest}>
            Nearest rides
          </p>
          <p className={`${styleUpcoming}`} onClick={handleUpcoming}>
            Upcoming rides ({upcomingLength})
          </p>
          <p className={`${stylePast}`} onClick={handlePast}>
            Past rides ({pastLength})
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
      {past && (
        <div>
          {pastRides &&
            pastRides.map((ride, t) => {
              return <Ride ride={ride} t={t} key={t} />;
            })}
        </div>
      )}
      {upcoming && (
        <div>
          {upcomingRides &&
            upcomingRides.map((ride, t) => {
              return <Ride ride={ride} t={t} key={t} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Main;
