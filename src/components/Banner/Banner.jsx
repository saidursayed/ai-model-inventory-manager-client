import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const slides = [
  {
    title: "Track Latest & ",
    subtitle: "Popular AI Models",
    description:
      "Explore the newest AI models, monitor updates, and manage your collection efficiently.",
    image:
      "https://i.ibb.co/KzF4WQSP/Pngtree-technology-ai-technology-blue-business-1482225.jpg",
  },
  {
    title: "Next-Gen Model ",
    subtitle: " Management",
    description: "Simplify your AI workflow with a powerful inventory system.",
    image:
      "https://i.ibb.co/xtvWFv6J/Chat-GPT-Image-Feb-16-2026-06-41-03-PM.png",
  },
  {
    title: "Built for AI Developers & ",
    subtitle: "Researchers",
    description:
      "A modern platform to manage TensorFlow, PyTorch, and cutting-edge AI models in one place.",
    image: "https://i.ibb.co/4qJfwT7/Headers-BCI-png2.png",
  },
  {
    title: "Manage Your AI ",
    subtitle: "Models Effortlessly",
    description:
      "Organize, track, and control all your AI models in one powerful inventory system.",
    image:
      "https://i.ibb.co/3mMFwnKj/Pngtree-ai-machine-future-business-background-963287.jpg",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-100 md:h-125 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-black/70 flex items-center">
                <div className="text-left text-white px-6 md:px-12 max-w-2xl">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                    <span className="text-white">{slide.title}</span>{" "}
                    <span className="text-indigo-400 font-medium italic">
                      {slide.subtitle}
                    </span>
                  </h1>
                  <p className="mt-4 text-base md:text-lg lg:text-xl  bg-clip-text text-transparent bg-linear-to-r from-gray-200 via-gray-300 to-white">
                    {slide.description}
                  </p>

                  <Link
                    to="/models"
                    className="mt-6 px-8 py-3 bg-linear-to-r from-[#8B3DFF] via-indigo-500 to-[#5A00FF] text-white font-semibold rounded-lg shadow-lg hover:scale-102 hover:shadow-xl transition transform duration-300 ease-in-out flex items-center gap-2 w-max"
                  >
                    <span>Get Started</span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
