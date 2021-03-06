import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { useEffect, useState } from "react";

export default function Home({ rides, user }) {
  const [statesArray, setStatesArray] = useState([]);
  const [cityArray, setCityArray] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    setStatesArray(rides.map((item) => item.state));
  }, []);

  useEffect(() => {
    const test = rides.filter((item) => item.state === selectedState);
    setCityArray(test.map((item) => item.city));
  }, [rides, selectedState]);

  useEffect(() => {
    const a = rides.filter((item) => item.city === selectedCity);

    setResults(selectedCity && selectedState ? a : rides);
  }, [selectedCity, selectedState]);

  // const state = rides.map((item) => item.state);
  console.log(results);
  return (
    <div className="main">
      <div className="main_section">
        <Head>
          <title>Edvora</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Navbar user={user} />
          <Main
            rides={results}
            user={user}
            statesArray={statesArray}
            setSelectedState={setSelectedState}
            setSelectedCity={setSelectedCity}
            cityArray={cityArray}
            selectedState={selectedState}
            selectedCity={selectedCity}
          />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const rides = await fetch("https://assessment.api.vweb.app/rides").then(
    (response) => response.json()
  );
  const user = await fetch("https://assessment.api.vweb.app/user").then(
    (response) => response.json()
  );
  return {
    props: {
      rides,
      user,
    },
  };
}
