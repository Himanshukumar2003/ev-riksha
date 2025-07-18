"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Image from "next/image";

export default function BikeExplorer({ product }) {
  const features = product.features.map((item, index) => ({
    ...item,
    id: `feature-${index}`,
  }));

  const [activeSection, setActiveSection] = useState(features[0]?.id || "");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImage, setCurrentImage] = useState(
    features[0]?.image
      ? `https://macapi.brandingwaale.com/${features[0].image.replace(
          /\\/g,
          "/"
        )}`
      : "/placeholder.svg"
  );

  const toggleSection = (sectionId) => {
    if (sectionId === activeSection) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(sectionId);
      const section = features.find((s) => s.id === sectionId);
      const imageUrl = section?.image
        ? `https://macapi.brandingwaale.com/${section.image.replace(
            /\\/g,
            "/"
          )}`
        : "/placeholder.svg";
      setCurrentImage(imageUrl);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  const activeData = features.find((section) => section.id === activeSection);

  return (
    <div className="bg-gray-100 flex section">
      <Container maxWidth="xl">
        <div className="grid grid-cols-3 gap-0 ">
          {/* Left Panel */}
          <div className="col-span-1 bg-gradient-to-br from-green-800 to-green-900 text-white flex flex-col rounded-l-[20px]">
            <div className="p-12 flex-1">
              <div className="space-y-4">
                {features.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className={`w-full text-left p-4 rounded-[20px] transition-all duration-300 group ${
                      activeSection === section.id
                        ? "bg-white/10 backdrop-blur-sm border border-white/20"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-white w-12">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {section.heading}
                        </h3>
                        <p className="text-gray-200 text-sm">
                          {section.sub_heading}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full ${
                          activeSection === section.id
                            ? "scale-125 bg-green-500"
                            : "scale-100 bg-white"
                        } transition-transform duration-300`}
                      ></div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-span-2 bg-white flex flex-col">
            <div className="p-12 border-b border-gray-200">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                {activeData?.heading}
              </h2>
              <p className="text-gray-600 text-lg">{activeData?.sub_heading}</p>
            </div>

            <div className="flex-1 p-12">
              <div className="relative h-full bg-gray-50 rounded-2xl overflow-hidden">
                <div
                  className={`w-full h-full transition-all duration-700 ease-out ${
                    isTransitioning
                      ? "opacity-0 scale-90 rotate-2"
                      : "opacity-100 scale-100 rotate-0"
                  }`}
                >
                  <Image
                    src={currentImage}
                    alt="Bike Feature"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800">
                      {activeData?.heading}
                    </h3>
                    <p className="text-gray-600">{activeData?.sub_heading}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
