"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useData } from "@/components/DataContext";

export default function AllVehiclesSwiper() {
  const { data: vehicles = [], loading } = useData();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const formatPrice = (p) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(p);

  return (
    <div className=" bg-gradient-to-br ">
      {!loading && vehicles.length > 0 ? (
        <div className="relative">
          {/* Buttons OUTSIDE Swiper */}
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
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {vehicles.map((product) => (
              <SwiperSlide key={product.id}>
                <Card className="group rounded-2xl pt-0 overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                  <div className="relative h-50 bg-gray-100 overflow-hidden">
                    <Image
                      src={`https://macapi.brandingwaale.com/${
                        product.carousel?.[0]?.replace(/\\/g, "/") || ""
                      }`}
                      alt={product.title}
                      fill
                      className="    object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 shadow-lg font-semibold">
                      {product.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-green-500 text-gray-900 transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold">
                        {formatPrice(product.starting_from || 0)}
                      </p>
                      <Link href={`/products/${product.slug}`} className="btn">
                        View Details
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-3xl">🚫</span>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">
            No vehicles available
          </h3>
        </div>
      )}
    </div>
  );
}
