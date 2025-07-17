"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  {
    src: "/img/banner2.png",
    alt: "Image 1",
  },
  {
    src: "/img/banner1.png",
    alt: "Image 2",
  },
  {
    src: "/img/banner2.png",
    alt: "Image 3",
  },
  {
    src: "/img/banner1.png",
    alt: "Image 4",
  },
  {
    src: "/img/banner2.png",
    alt: "Image 5",
  },
];

export default function ImageSwiper() {
  return (
    <div className="relative ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt || "Banner image"}
                width={2000}
                height={2000}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
