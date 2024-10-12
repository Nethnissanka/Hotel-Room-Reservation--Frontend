import React, { useEffect } from "react";
import HeroSlider from "../Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import fontimg1 from "../Screens/images/5-2.jpg";
import fontimg2 from "../Screens/images/home1-intro-1.jpg";
import serviceimg1 from "../Screens/images/1.jpg";
import serviceimg2 from "../Screens/images/2-2.jpg";
import serviceimg3 from "../Screens/images/3-2.jpg";
import serviceimg5 from "../Screens/images/home1-restaurant-4.jpg";
import section3 from "../Screens/images/section 3.jpeg";

function Landing() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <div>
      <HeroSlider />
      <div>
        <section>
          <div className="container p-8 mx-auto mt-0 mb-20 font-custom">
            <div className="grid grid-cols-2 gap-8">
              {/* Left Side - Text Content */}
              <div
                className="space-y-3 text-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center">
                  <div className="text-2xl text-yellow-500">★★★★★</div>
                </div>
                <div className="text-sm tracking-widest text-gray-500 uppercase">
                  The Cappa Luxury Hotel
                </div>
                <h1 className="text-5xl font-thin text-accent leading-tight tracking-[2px] transition-transform transform hover:scale-105">
                  Enjoy a Luxury Experience
                </h1>
                <p className="leading-normal text-gray-500 transition-opacity hover:opacity-80">
                  Welcome to the best five-star deluxe hotel in Sri Lanka. Hotel
                  elementum sesue the aucan vestibulum aliquam justo in sapien
                  rutrum volutpat. Donec in quis the pellentesque velit. Donec
                  id velit ac arcu posuere blane.
                </p>
                <p className="leading-normal text-gray-500 transition-opacity hover:opacity-80">
                  Hotel ut nisl quam vestibulum ac quam nec odio elementum
                  sceisue the aucan ligula. Orci varius natoque penatibus et
                  magnis dis parturient montes nascete ridiculus mus.
                </p>
                <div className="flex items-center space-x-2">
                  <i className="mt-10 text-accent fas fa-phone-alt"></i>
                  <span className="mt-10 text-xl font-semibold text-gray-800">
                    011 224 4580
                  </span>
                </div>
              </div>

              {/* Right Side - Images */}
              <div className="grid grid-cols-2 gap-4">
                <div data-aos="zoom-in" data-aos-delay="300">
                  <img
                    src={fontimg1}
                    alt="Dining area"
                    className="object-cover w-full h-[400px] rounded-lg mt-20 transition-transform transform hover:scale-105"
                  />
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                  <img
                    src={fontimg2}
                    alt="Bedroom"
                    className="object-cover w-full rounded-lg h-[400px] transition-transform transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="transition-shadow bg-neutral-800">
          <div className="container p-8 mx-auto mt-20 mb-20 font-custom">
            <div className="grid grid-cols-3 gap-20 mt-20 mb-20">
              {/* services 1 and 2 */}
              <div className="grid grid-cols-1 gap-8 drop-shadow-2xl">
                <div
                  className="transition-shadow drop-shadow-2xl bg-zinc-100"
                  data-aos="fade-right"
                >
                  <img
                    src={serviceimg1}
                    alt="Room cleaning"
                    className="object-cover w-full h-[300px] transition delay-150 duration-300 ease-in-out"
                  />
                  <h1 className="mt-6 text-2xl font-semibold tracking-[1px] text-accent">
                    Room Cleaning
                  </h1>
                  <h1 className="mb-3 text-xl text-slate-950">
                    $50<span className="text-gray-500 text-s">/Month</span>
                  </h1>
                </div>
                <div className="transition-shadow drop-shadow-2xl bg-zinc-100" data-aos="fade-right" data-aos-delay="200">
                  <img
                    src={serviceimg2}
                    alt="Drinks Included"
                    className="object-cover w-full h-[300px] transition delay-150 duration-300 ease-in-out"
                  />
                  <h1 className="mt-6 text-2xl font-semibold tracking-[1px] text-accent">
                    Drinks Included
                  </h1>
                  <h1 className="mb-3 text-xl text-slate-950">
                    $15<span className="text-gray-500 text-s">/Daily</span>
                  </h1>
                </div>
              </div>

              {/* services 3 and 4 */}
              <div className="grid grid-cols-1 gap-8 drop-shadow-2xl">
                <div className="transition-shadow drop-shadow-2xl bg-zinc-100" data-aos="fade-left">
                  <img
                    src={serviceimg3}
                    alt="Spa"
                    className="object-cover w-full h-[300px] transition delay-150 duration-300 ease-in-out"
                  />
                  <h1 className="mt-6 text-2xl font-semibold tracking-[1px] text-accent">
                    Spa
                  </h1>
                  <h1 className="mb-3 text-xl text-slate-950">
                    $80<span className="text-gray-500 text-s">/Month</span>
                  </h1>
                </div>
                <div className="transition-shadow drop-shadow-2xl bg-zinc-100" data-aos="fade-left" data-aos-delay="200">
                  <img
                    src={serviceimg5}
                    alt="Breakfast"
                    className="object-cover w-full h-[300px] transition delay-150 duration-300 ease-in-out"
                  />
                  <h1 className="mt-6 text-2xl font-semibold tracking-[1px] text-accent">
                    Breakfast
                  </h1>
                  <h1 className="mb-3 text-xl text-slate-950">
                    $20<span className="text-gray-500 text-s">/Month</span>
                  </h1>
                </div>
              </div>

              {/* Extra Services Text */}
              <div className="space-y-3 text-start" data-aos="fade-up">
                <div className="text-sm tracking-widest uppercase text-accent text-start">
                  Best Prices
                </div>
                <h1 className="text-5xl font-thin text-white leading-tight tracking-[2px]">
                  Extra Services
                </h1>
                <p className="leading-normal text-gray-500">
                  The best prices for your relaxing vacation.
                </p>
                <p className="leading-normal text-gray-500">
                  Orci varius natoque penatibus et magnis.
                </p>
                <div className="grid grid-cols-1">
                  <p className="mt-10 mb-1 text-lg text-white">For Information</p>
                  <div className="flex items-center space-x-2">
                    <i className="text-accent fas fa-phone-alt"></i>
                    <span className="text-lg font-medium text-gray-100 ">
                      011 224 4580
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="transition-shadow bg-white opacity-85">
          <div className="container p-8 mx-auto mt-0 mb-20 text-start font-custom">
            <div className="space-y-4 text-sm tracking-widest text-gray-500 uppercase text-start">
              Our Services
            </div>
            <h1 className="text-5xl font-thin text-accent leading-tight tracking-[2px]">
              Hotel Facilities
            </h1>
          </div>
          <div className="-mt-20 ">
            <img
              className="object-cover w-full h-full"
              src={section3}
              alt="hotel facilities"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
