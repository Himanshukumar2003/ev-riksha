"use client";

import Image from "next/image";
import WhyChoose from "./why-choose-us";
import Container from "@mui/material/Container";
import VideoModal from "../home/video";
import { useState } from "react";
import { Play } from "lucide-react";

export default function About() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/img/about-mask-img.jpg"
                  alt="Interior design team collaborating on projects"
                  width={600}
                  height={400}
                  onClick={() =>
                    setSelectedVideo(
                      "https://www.youtube.com/embed/hQQBAcQwwyY?si=g01MIwSXdbqRCbOj"
                    )
                  }
                  className="w-full h-auto object-cover about-two-img relative cursor-pointer"
                />
                <div className="absolute z-[99] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <Play className="w-6 h-6 text-slate-800 fill-current" />
                  </div>
                </div>

                {/* Satisfaction Guarantee Badge */}
                <div className="absolute bottom-0 bg-white left-0 text-white pl-0 pb-0 p-4">
                  <div className="bg-green-700 p-10 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold mb-1">100%</div>
                    <div className="text-sm font-medium">
                      Satisfaction
                      <br />
                      Guarantee
                    </div>
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
                  Mac Auto – Leading the Way in E-Rickshaw Innovation Since 2014
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Mac Auto began its journey in early 2014 as a visionary
                  organization and has today grown into one of the leading
                  players in the electric mobility industry with a strong PAN
                  India presence. We are proud to be among the pioneers in the
                  manufacturing of Electric Rickshaws, their spare parts, and
                  accessories in India.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  All our products are certified by i-CAT (International Centre
                  for Automotive Technology) under the Government of India, and
                  we are recognized for our patented technologies and modern
                  design capabilities. We manufacture eco-friendly Electric
                  Rickshaws for passengers and Electric Carts for cargo.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our skilled technical team is dedicated to enhancing
                  performance and aesthetics while contributing to the green
                  mobility movement. With a well-equipped manufacturing unit and
                  experienced staff, we continue to innovate and shape a
                  cleaner, greener future in electric transportation.
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
