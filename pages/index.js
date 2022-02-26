import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

export default function Home() {
  const [user, setUser] = useState([]);
  const getUser = () => {
    axios.get("https://assessment.api.vweb.app/user").then((response) => {
      setUser(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const [rides, setRides] = useState("");
  const getRides = () => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) => {
      setRides(response.data);
    });
  };
  useEffect(() => {
    getRides();
  }, []);

  return (
    <div className="main">
      <div className="main_section">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Navbar user={user} />
          <div className="px-5">
            <Main rides={rides} />
          </div>
        </div>
      </div>
    </div>
  );
}
