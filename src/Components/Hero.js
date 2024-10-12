import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Img1 from "../assets/img/heroSlider/4.jpg";
import Img2 from "../assets/img/heroSlider/5.jpg";
import Img3 from "../assets/img/heroSlider/6.jpg";

const slides = [
  {
    title: "Enjoy a Luxury Experience",
    bg: Img1,
    btnText: "Rooms & Suites",
  },
  {
    title: "The Perfect Base For You",
    bg: Img2,
    btnText: "Rooms & Suites",
  },
  {
    title: "Enjoy The Best Moments Of The Life",
    bg: Img3,
    btnText: "Rooms & Suites",
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="heroSlider h-[600px] lg:h-[860px] cursor-pointer"
        
      >
        {slides.map((slide, index) => {
          const { title, bg, btnText } = slide;
          return (
            <SwiperSlide
              className="relative flex items-center justify-center h-[700px]"
              key={index}
            >
              {/* Image Layer */}
              <div className="absolute top-0 w-full h-[700px] bg-fixed">
                <img
                  className="object-cover w-full h-full"
                  src={bg}
                  alt={title}
                />
              </div>

              {/* Overlay for better text visibility */}
              <div className="absolute w-full h-[700px] bg-black/30" />

              {/* Centered Text Layer */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center -mt-40 text-white font-custom">
              <div className="text-2xl tracking-[6px] mb-3 text-amber-500">★★★★★</div>
                <div className="uppercase font-thin tracking-[6px] mb-10">
                  Unique Place to Enjoy and Relax
                </div>
                <h1 className="text-[58px] font-extralight uppercase tracking-[8px] max-w-[920px]  leading-tight mb-6">
                  {title}
                </h1>
                <button
                  onClick={() => navigate("/home")}
                  className="px-8 uppercase tracking-[3px] py-3 font-light text-white transition duration-300 text-m bg-accent focus:ring-yellow-600 hover:bg-yellow-900 focus:outline-none focus:ring-2"
                >
                  {btnText}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
    
  );
};

export default HeroSlider;
