"use client";

import Image from "next/image";
import WhyChoose from "./why-choose-us";
import Container from "@mui/material/Container";
import VideoModal from "../home/video";
import { useState } from "react";
import { Play } from "lucide-react";

export default function About() {
  const videos = [
    "https://www.youtube.com/embed/hQQBAcQwwyY?si=g01MIwSXdbqRCbOj",
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                onClick={() => setSelectedVideo(videos[0])}
              >
                <Image
                  src="/img/youtub/img-1.jpg"
                  alt="Interior design team collaborating on projects
                  "
                  width={600}
                  height={400}
                  className="w-full cursor-pointer h-auto object-cover  relative "
                />
                <div className="absolute  top-[50%] left-[50%] flex items-center justify-center  group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <Play className="w-6 h-6 text-slate-800 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-4">
              <div>
                <div className="text-[var(--color-primary-light)] text-sm font-medium mb-4 flex items-center">
                  <span className="w-8 h-px bg-[var(--color-primary-light)] mr-3"></span>
                  SINCE 2014
                </div>
                <h1 className="text-2xl md:text-4xl leading-tight mb-6">
                  Mac Auto – Driving E-Rickshaw Innovation Since 2014
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2014, Mac Auto started as a visionary venture and
                  has grown into one of India’s top electric mobility brands
                  with a strong PAN India presence.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in manufacturing Electric Rickshaws, spare
                  parts, and accessories. All products are i-CAT certified and
                  known for our patented technology and modern designs.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our lineup includes eco-friendly Electric Rickshaws for
                  passengers and Electric Carts for cargo transportation, built
                  to support sustainable mobility.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  With a skilled technical team and a well-equipped
                  manufacturing setup, we continue to innovate and contribute to
                  a cleaner, greener future.
                </p>
              </div>
            </div>
          </div>

          {/* Video Modal */}
          <VideoModal
            videos={videos}
            selectedVideo={selectedVideo}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        </Container>
      </div>

      <WhyChoose />

      <section className="section py-10">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/img/reviewer-02.webp"
                alt="Founder"
                width={500}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>

            <div>
              <h2 className="font-bold mb-6 text-black">
                Our focus enables us to provide customized, actionable
                recommendations.
              </h2>
              <blockquote className="border-l-4 border-green-500 pl-5 italic text-gray-800 mb-6">
                Let me start by saying that Environment & Entrepreneurship go
                hand in hand...
              </blockquote>
              <p className="text-gray-800 mb-5 leading-relaxed">
                Years ago, I stumbled upon the Electric Vehicle industry...
              </p>
              <p className="text-gray-800 mb-5 leading-relaxed">
                Today, I feel grateful for the experiences that led me here...
              </p>
              <p className="text-gray-800 mb-5 leading-relaxed">
                As we continue this journey, we remain committed to empowering
                lives through cleaner transport...
              </p>
              <div className="mt-6">
                <p className="font-bold text-black">Abhijeet Wassan</p>
                <p className="uppercase text-gray-500 tracking-wider">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
