import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LatestModels from "../../components/LatestModels/LatestModels";
import AboutAIModels from "../../components/AboutAIModels/AboutAIModels";
import GetStarted from "../../components/GetStarted/GetStarted";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const data = useLoaderData();

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
