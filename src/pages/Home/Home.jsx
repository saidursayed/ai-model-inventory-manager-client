import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LatestModels from "../../components/LatestModels/LatestModels";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <LatestModels data={data}></LatestModels>

    </div>
  );
};

export default Home;
