"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const images = [
  {
    url: "https://www.fourbrothersdc.com/fb/fb_assets/fb-services-kitchens-main.jpg",
  },
  {
    url: "https://cardinalrealtors.com/wp-content/uploads/2015/07/remodeling_landing_top.jpg",
  },
  {
    url: "https://kowalske.com/wp-content/uploads/2020/06/wauwatosa-wi-remodel-3.jpg",
  },
  {
    url: "https://dam.thdstatic.com/content/production/wufmqjI9Mt9u_V5mDVS4cg/UblksmO86yQF_HGZTVnSdQ/Original%20file/11-creative-deck-railing-ideas-hero.jpg",
  },
  {
    url: "https://mylandmark.la/wp-content/uploads/2020/08/kitchen-remodeling-in-beverly-hills.jpg",
  },
];

export default function PortfolioGallery() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-auto max-w-7xl py-16 px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-base/7 font-semibold text-[#CD7F32]">
            Portfolio
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Our recent work
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={16}
          slidesPerView="auto"
          grabCursor
          className="overflow-x-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="!w-auto !flex-none">
              <img
                src={img.url}
                alt={`Project ${index + 1}`}
                className="h-[500px] w-auto object-cover rounded-lg hover:opacity-90 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
