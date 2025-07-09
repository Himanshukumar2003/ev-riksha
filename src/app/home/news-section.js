"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsData = [
  {
    id: 1,
    date: "April 1, 2025",
    title:
      "Mahindra Last Mile Mobility Limited is India's No.1 electric commercial vehicle manufacturer in FY25",
    image: "/img/about-mask-img.jpg",
    slug: "mahindra-electric-vehicle-leader",
  },
  {
    id: 2,
    date: "March 8, 2025",
    title:
      "Mahindra WE (Women Entrepreneurs) Hunnar project: Puts women in the driving seat",
    image: "/img/about-mask-img.jpg",
    slug: "women-entrepreneurs-project",
  },
  {
    id: 3,
    date: "November 5, 2024",
    title:
      "India's No.1 Commercial EV manufacturer, Mahindra Last Mile Mobility Limited, surpasses 200000 electric vehicle Milestone",
    image: "/img/about-mask-img.jpg",
    slug: "200000-milestone-achievement",
  },
  {
    id: 4,
    date: "October 15, 2024",
    title:
      "Mahindra launches new range of sustainable electric vehicles for urban mobility",
    image: "/img/about-mask-img.jpg",
    slug: "sustainable-urban-mobility",
  },
  {
    id: 5,
    date: "September 22, 2024",
    title:
      "Partnership announcement: Mahindra collaborates with leading battery manufacturers",
    image: "/img/about-mask-img.jpg",
    slug: "battery-partnership-announcement",
  },
];

export default function NewsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Latest News
        </h2>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              // Assign refs to Swiper navigation
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-400",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <Card className="h-full bg-white pt-0 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="pt-0 px-6 pb-0">
                    <div className="text-sm text-gray-500 mb-3 font-medium">
                      {news.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4  leading-relaxed line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="mb-4   line-clamp-2"> {news.title}</p>
                    <button className="w-full bg-gray-800  hover:bg-gray-900 text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
                      Know More
                    </button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
