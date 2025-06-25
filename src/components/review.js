"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Container } from "@mui/material";

const reviews = [
  {
    id: 1,
    name: "Robert Gold",
    location: "Georgia, USA",
    rating: 5,
    text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
    avatar: "/img/reviewer-02.webp",
  },
  {
    id: 2,
    name: "Olivia Cruz",
    location: "Georgia, USA",
    rating: 5,
    text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
    avatar: "/img/reviewer-02.webp",
  },
  {
    id: 3,
    name: "Martin Bailey",
    location: "Georgia, USA",
    rating: 5,
    text: "Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.",
    avatar: "/img/reviewer-02.webp",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    location: "Florida, USA",
    rating: 5,
    text: "Exceptional service and outstanding results. The team delivered exactly what we needed and exceeded our expectations. Highly recommend their services.",
    avatar: "/img/reviewer-02.webp",
  },
  {
    id: 5,
    name: "Michael Chen",
    location: "California, USA",
    rating: 5,
    text: "Professional, reliable, and creative. They transformed our vision into reality with incredible attention to detail. Worth every penny!",
    avatar: "/img/reviewer-02.webp",
  },
];

export default function ReviewsSection() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-[var(--color-primary-light)] text-[var(--color-primary-light)]"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-white section">
      <Container >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--color-primary-light)] text-sm font-medium tracking-wide">
              <div className="w-8 h-px bg-[var(--color-primary-light)]"></div>
              CLIENT FEEDBACK
            </div>
            <h2 className=" font-bold text-gray-900 leading-tight">
              Hear from clients.
            </h2>

            <div className="flex gap-4 mt-6">
              <button className="prev-btn btn-circle border p-2">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="next-btn btn-circle border p-2">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Review Swiper */}
          <div className="lg:col-span-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.3,
                },
              }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <Card className="relative cards border-0 bg-gray-100 shadow-none rounded-3xl h-full">
                    <CardContent className="p-6 h-full flex flex-col justify-between ">
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-6 relative">
                        <div>
                          <h4 className="font-semibold text-[var(--color-primary-light)]">
                            {review.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {review.location}
                          </p>
                        </div>
                        <div className="h-[50px] w-[50px] overflow-hidden z-12 rounded-full flex justify-center items-center absolute -bottom-10 -right-7">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={50}
                            height={50}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
