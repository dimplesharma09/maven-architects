"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Quote } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Marin Medak",
    role: "Customer since 2015",
    text: `Absolutely recommended! I ordered several custom knives from Karl back in 2015. Even after 10 years, they’re still in perfect condition — sharp, durable, and beautifully crafted.

The quality of the blades and materials is outstanding — they’ve stood the test of time and heavy use without compromise. If you’re looking for a blacksmith who combines craftsmanship, durability, and aesthetics, Karl Ban is the right choice.`,
    image: "/assets/Image/testimonials-img.png",
  },
  {
    id: 2,
    name: "Peter Novak",
    role: "Professional Chef",
    text: `Karl’s knives are pure perfection! Every cut feels precise and balanced. You can instantly feel the craftsmanship and dedication behind each piece.`,
    image: "/assets/Image/testimonials-img.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-gradient-to-b from-white to-[#f9f9f9] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-[#8bb66c] text-sm uppercase tracking-widest font-semibold">
          Testimonials
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mt-3 mb-12">
          What Our Clients Say
        </h3>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          spaceBetween={40}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex + 1)}
          className="relative"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-100 rounded-2xl shadow-sm p-10 md:p-14 border border-gray-100 transition-all duration-500 ">
                {/* LEFT CONTENT */}
                <div className="text-left relative">
                  <Quote
                    size={60}
                    className="text-[#FF7020]/15 absolute -top-8 left-0"
                  />
                  <p className="text-[#4F4640] text-[17px] md:text-[18px] leading-relaxed mb-8 whitespace-pre-line">
                    {item.text}
                  </p>
                  <div>
                    <p className="text-lg font-semibold text-[#2B2B2B]">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    <div className="absolute -inset-3 shadow-none rounded-2xl blur-lg opacity-30"></div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="relative w-[250px] h-[320px] md:w-[280px] md:h-[340px] object-cover rounded-2xl shadow-none border border-gray-100"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-10">
          <button className="prev-btn bg-[#8bb66c] hover:bg-[#69a242]  transition-all duration-300 w-10 h-10 flex items-center justify-center md:p-4 rounded-full shadow-md">
            <span className="text-white text-sm font-bold"><FaArrowLeft /></span>
          </button>

          <span className="text-[#636B78] text-sm italic tracking-wide">
            {activeIndex} / {testimonials.length}
          </span>

          <button className="next-btn bg-[#8bb66c] hover:bg-[#69a242] justify-center transition-all duration-300 w-10 h-10 flex items-center md:p-4 rounded-full shadow-md">
            <span className="text-white text-sm font-bold"><FaArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
