"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import Container from "@mui/material/Container";
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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#8BC248] py-12">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <h1 className=" text-white leading-tight font-bold">
              Different case, need different services.
            </h1>
            <p className="text-white text-sm leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet consectetur elit venenatis dolor sit
              amet
            </p>

            <div className="flex gap-4 mt-4">
              <button ref={prevRef} className="btn-circle border bg-white p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button ref={nextRef} className="btn-circle border bg-white p-2">
                <ChevronRight className="w-5 h-5 " />
              </button>
            </div>
          </div>

          {/* Swiper Content */}
          <div className="lg:col-span-8">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={1.2}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.3,
                },
                768: {
                  slidesPerView: 1.8,
                },
                9: {
                  slidesPerView: 2.3,
                },
                1280: {
                  slidesPerView: 3,    // xl
                },
                1536: {
                  slidesPerView: 3,    // 2xl
                },
              }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="bg-white  relative rounded-[2rem] max-w-sm mx-auto">
                    <div className="p-4">
                      <Image
                        height={300}
                        width={300}
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl w-full object-cover"
                      />
                    </div>
                    <div className="px-6 pb-6">
                      <p className="text-sm font-medium mb-1">{service.id}</p>
                      <h4 className=" font-semibold text-gray-800 mb-2">
                        {service.title}
                      </h4>
                      <hr className="my-3" />
                      <p className="text-sm text-gray-500 pr-10">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="h-[50px] w-[50px] z-12 bg-[var(--color-secondary)] rounded-full flex justify-center items-center absolute bottom-0 right-0"
                    >
                      <MdArrowOutward className="text-white w-5 h-5" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
}
