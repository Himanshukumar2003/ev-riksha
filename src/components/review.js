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
    name: "Mr. Sanjay Verma",
    location: "Exclusive Dealer, Raipur",
    description:
      "Mac Auto India has always paid attention to its product and has never compromised on their quality, due to which we are standing and competing strongly in the market today, moreover growing with growth every year.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. Abhimanyu Manhas",
    location: "Dealer, Jammu",
    description:
      "After joining Mac Auto India as a Dealer our profitability has increased every year, not only their quality but also the services and support are unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. Abhilash",
    location: "Dealer, Delhi",
    description:
      "Before to join Mac Auto India as a dealer, I used to be a dealer of well known brand, but they had nothing except the name. Mac has given us the opportunity of Spares and Services Dealership along with E-Vehicle dealership as well. It has increased our revenue with 25%. Now rickshaw drivers come to get their vehicle charged with a nominal price and recommend our brand to others too. Thanks Abhijeet Sir for this opportunity!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mr. Vakeel Ahmed",
    location: "Dealer, Jhansi (M.P)",
    description:
      "Mac Auto India never let us realize that we are their Dealer, but treated as a member of Mac family. They always treat us like a partner. As far as the quality and prices are concerned, it is unmatched. Thus we always feel positive and provide best prices to our customers, which helps us to build trust and revenue as well.",
    rating: 5,
  },
];

export default function CustomerTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why They Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Their trust and words keep us moving forward — here’s what they have
            to say.
          </p>
        </div>

        <div className="relative py-2">
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            ref={nextRef}
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
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <Card className="h-full    lg:min-h-[400px]  flex flex-col justify-between shadow-lg overflow-hidden bg-white rounded-2xl border-0">
                  <CardContent className="h-full flex flex-col p-6">
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

                    <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-1">
                      {testimonial.description}
                    </p>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
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
