"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const services = [
  {
    id: "01",
    title: "Transforming Rooms",
    image: "/img/auto.jpg",
    description: "Modern living spaces with contemporary design",
  },
  {
    id: "02",
    title: "Weaving Dreams",
    image: "/img/auto.jpg",
    description: "Comfortable bedroom designs for perfect rest",
  },
  {
    id: "03",
    title: "Interior Decorator",
    image: "/img/auto.jpg",
    description: "Complete interior decoration services",
  },
  {
    id: "04",
    title: "Space Planning",
    image: "/img/auto.jpg",
    description: "Optimal space utilization and planning",
  },
  {
    id: "05",
    title: "Space Planning",
    image: "/img/auto.jpg",
    description: "Optimal space utilization and planning",
  },
  {
    id: "06",
    title: "Space Planning",
    image: "/img/auto.jpg",
    description: "Optimal space utilization and planning",
  },
];

export default function OurProduct() {
  return (
    <div className=" bg-[#8BC248]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center col-span-4 px-4 lg:px-0">
            <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
              <h1 className="text-[50px]  text-white leading-tight">
                Different case, need different services.
              </h1>
              <p className="text-white text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur elit venenatis dolor sit
                amet
              </p>
            </div>
            <div className="flex gap-4 justify-start mt-8">
              <button
                className="swiper-button-prev-custom  btn-circle" // Added 'border' and 'p-2' for better styling
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="swiper-button-next-custom btn-circle" // Added 'border' and 'p-2' for better styling
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center py-8 lg:py-16 col-span-8">
            <div className="space-y-8">
              {/* Swiper */}
              <div className="relative overflow-hidden">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1.2}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1.5,
                    },
                    768: {
                      slidesPerView: 1.8,
                    },
                    1024: {
                      slidesPerView: 2.3, // Example
                    },
                  }}
                  className="!overflow-visible"
                >
                  {services.map(
                    (
                      service // Removed 'index' if not explicitly used, as 'service.id' is a better key
                    ) => (
                      <SwiperSlide key={service.id}>
                        <div className="bg-white relative cards product-card rounded-[2rem] max-w-sm  ">
                          <div className="p-4">
                            <Image
                              height={300}
                              width={300}
                              src={service.image} // Replace with your actual image path
                              alt="Transforming Rooms"
                              className="rounded-3xl w-full object-cover"
                            />
                          </div>

                          <div className="px-6 pb-6">
                            <p className="text-sm  font-medium mb-1">
                              {service.id}
                            </p>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                              {service.title}
                            </h2>
                            <hr className="  my-3 " />
                            <p className="text-sm text-gray-500   pr-10">
                              {service.description}
                            </p>
                          </div>

                          <Link
                            href=""
                            className="h-[50px] w-[50px] z-12 bg-[var(--color-secondary)] rounded-full flex justify-center items-center absolute bottom-0 right-0"
                          >
                            <MdArrowOutward className="text-white w-5 h-5" />
                          </Link>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
