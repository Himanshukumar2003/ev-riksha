"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ThumbsUp, Users, TrendingUp } from "lucide-react";
import VideoModal from "./video";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "@mui/material/Container";
import Image from "next/image";
const videos = [
  {
    id: 1,
    title: "Mahindra Electric Vehicle Success Story",
    description:
      "Real-world implementation and success metrics of electric commercial vehicles in Indian market.",
    thumbnail: "/img/banner2.png",
    videoId: "7yaRwHrDxKE",
    duration: "6:45",
    views: "892K",
    likes: "42K",
    category: "Case Study",
    channel: "Business Success",
    trending: true,
  },
  {
    id: 2,
    title: "Electric Vehicle Market Trends 2024",
    description:
      "Latest market analysis and future predictions for electric vehicle adoption worldwide.",
    thumbnail: "/img/banner2.png",
    videoId: "7yaRwHrDxKE",
    duration: "10:30",
    views: "1.5M",
    likes: "67K",
    category: "Market Analysis",
    channel: "Industry Insights",
    trending: false,
  },
  {
    id: 3,
    title: "Sustainable Business with Electric Fleets",
    description:
      "How companies are reducing costs and carbon footprint with electric vehicle fleets.",
    thumbnail: "/img/banner2.png",
    videoId: "7yaRwHrDxKE",
    duration: "8:15",
    views: "634K",
    likes: "28K",
    category: "Sustainability",
    channel: "Green Business",
    trending: true,
  },
  {
    id: 4,
    title: "EV Charging Solutions for Businesses",
    description:
      "Complete guide to setting up charging infrastructure for commercial electric vehicles.",
    thumbnail: "/img/banner2.png",
    videoId: "7yaRwHrDxKE",
    duration: "12:20",
    views: "445K",
    likes: "19K",
    category: "Infrastructure",
    channel: "EV Solutions",
    trending: false,
  },
  {
    id: 5,
    title: "ROI Calculator for Electric Vehicles",
    description:
      "Step-by-step guide to calculate return on investment for electric vehicle adoption.",
    thumbnail: "/img/banner2.png",
    duration: "9:45",
    views: "723K",
    likes: "35K",
    videoId: "7yaRwHrDxKE",

    category: "Finance",
    channel: "Business Finance",
    trending: true,
  },
  {
    id: 6,
    title: "Customer Testimonials - EV Transformation",
    description:
      "Real customer experiences and testimonials from businesses using electric vehicles.",
    thumbnail: "/img/banner2.png",
    videoId: "7yaRwHrDxKE",
    duration: "11:10",
    views: "567K",
    likes: "24K",
    category: "Testimonials",
    channel: "Customer Stories",
    trending: false,
  },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const swiperRef = useRef();

  return (
    <div className="section bg-gray-100">
      <Container maxWidth="xl">
        <div className="space-y-8 ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">
              Explore Our Exclusive EV Video Library
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dive into a curated selection of case studies, market insights,
              success stories, and more—each video designed to keep you informed
              and inspired in the electric vehicle revolution.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-gray-400",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.5 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="!pb-12"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer h-full"
                  onClick={() => setSelectedVideo(video)}
                >
                  <Card className="overflow-hidden group h-full pt-0 hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white">
                    <div className="relative">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white rounded-full p-4 shadow-lg">
                          <Play className="w-6 h-6 text-slate-800 fill-current" />
                        </div>
                      </motion.div>

                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 text-slate-800 text-xs"
                        >
                          {video.category}
                        </Badge>
                        {video.trending && (
                          <Badge className="bg-red-500 text-white text-xs flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {video.duration}
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5 pt-2">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-lg line-clamp-2 text-slate-800 leading-tight">
                          {video.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                          {video.description}
                        </p>

                        <div className="flex items-center justify-between pt-5 pb-0 border-t border-slate-100">
                          <button className="text-center bg-black mb-0 hover:bg-gray-800 text-white px-3 py-2 text-base font-medium rounded-md">
                            Watch Now
                          </button>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="w-3 h-3" />
                            {video.channel}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <VideoModal
            videos={videos}
            selectedVideo={selectedVideo}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        </div>
      </Container>
    </div>
  );
}
