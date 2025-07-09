"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    description:
      "Outstanding service and quality! The team exceeded my expectations with their professionalism and attention to detail. Highly recommended for anyone looking for reliable solutions.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    description:
      "Exceptional experience from start to finish. The product quality is top-notch and the customer support is incredibly responsive. We'll definitely use their services again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    description:
      "Very impressed with the results! The team delivered exactly what was promised on time and within budget. Great communication throughout the entire process.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    description:
      "Fantastic service! They've understood our requirements perfectly and provided solutions that exceeded our expectations. Professional, reliable, and highly skilled team.",
    rating: 5,
  },
];

export default function CustomerTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don`&quot;`t just take our word for it. Here`&quot;`s what our
            valued customers have to say about their experience with us.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative py-2">
          {/* Navigation buttons */}
          <button
            ref={prevRef}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            ref={nextRef}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              if (typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="px-8"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="py-5">
                <Card className="bg-white shadow-lg   transition-shadow duration-300 border-0 h-full">
                  <CardContent className="p-6">
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Description with normal quotes */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                      {testimonial.description}
                    </p>

                    {/* Customer Name */}
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
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
