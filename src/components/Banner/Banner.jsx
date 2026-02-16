import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div>
      <Swiper
        Pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


        <SwiperSlide>
            <div
            className="w-full h-125 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/xtvWFv6J/Chat-GPT-Image-Feb-16-2026-06-41-03-PM.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 flex items-center justify-start">
              <div className="text-white px-4 flex-1 pl-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Next-Gen Model{" "}
                  <span className="font-normal italic">Management</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                  Simplify your AI workflow with a powerful inventory system.
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
            
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-125 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/4qJfwT7/Headers-BCI-png2.png')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 flex items-center justify-start">
              <div className="text-white px-4 flex-1 pl-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                 Built for AI Developers & 
                  <span className="font-normal italic">Researchers</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                 A modern platform to manage TensorFlow, PyTorch, and cutting-edge AI models in one place.
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-125 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/KzF4WQSP/Pngtree-technology-ai-technology-blue-business-1482225.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 flex items-center justify-start">
              <div className="text-white px-4 flex-1 pl-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                Track Latest & Popular
                  <span className="font-normal italic"> AI Models</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                Explore the newest AI models, monitor updates, and manage your collection efficiently.
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-125 bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/3mMFwnKj/Pngtree-ai-machine-future-business-background-963287.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/50 flex items-center justify-start">
              <div className="text-white px-4 flex-1 pl-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                Manage Your AI Models  
                  <span className="font-normal italic">Effortlessly</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                Organize, track, and control all your AI models in one powerful inventory system.
                </p>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
