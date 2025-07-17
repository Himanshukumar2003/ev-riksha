"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

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
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Latest News
        </h2>

        <div className="relative mt-8">
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
              bulletClass: "swiper-pagination-bullet !bg-green-400",
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
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            className="!pb-12"
          >
            {newsData.map((news) => (
              <SwiperSlide key={news.id}>
                <Link
                  href="/blog"
                  className="group relative block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                  style={{ minHeight: "320px" }}
                  aria-label={news.title}
                >
                  {/* Image with zoom + dark overlay on hover */}
                  <div className="relative    overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      height={300}
                      width={300}
                      className="object-cover  w-full transition-transform duration-500 group-hover:scale-110 overflow-hidden h-60"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white flex flex-col h-[calc(100%-192px)] sm:h-[calc(100%-224px)] md:h-[calc(100%-256px)]">
                    {/* Date badge */}
                    <div>
                      <time className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-black bg-gray-100 rounded-full">
                        {news.date}
                      </time>
                    </div>

                    {/* Title */}
                    <div className="text-lg group-hover:text-green-500 font-bold mb-4 line-clamp-3  transition-colors duration-300">
                      {news.title}
                    </div>

                    <span className="mt-auto inline-flex items-center text-black font-semibold group-hover:underline">
                      Know More
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
