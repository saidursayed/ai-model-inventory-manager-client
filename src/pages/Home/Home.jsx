import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LatestModels from "../../components/LatestModels/LatestModels";
import AboutAIModels from "../../components/AboutAIModels/AboutAIModels";
import GetStarted from "../../components/GetStarted/GetStarted";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <LatestModels data={data}></LatestModels>
      <AboutAIModels></AboutAIModels>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
