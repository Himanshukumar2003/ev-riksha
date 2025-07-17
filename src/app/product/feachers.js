"use client";
import Container from "@mui/material/Container";
import { useState } from "react";

const bikeData = [
  {
    id: "frameset",
    name: "Frameset",
    color: "bg-blue-500",
    description: "The main structure of your bike",
    image: "/img/auto.jpg",
  },
  {
    id: "drivetrain",
    name: "Drivetrain",
    color: "bg-purple-500",
    description: "Power transmission system",
    image: "/img/auto.jpg",
  },
  {
    id: "wheels",
    name: "Wheels",
    color: "bg-green-500",
    description: "Rolling components",
    image: "/bike-wheel.png",
  },
  {
    id: "components",
    name: "Components",
    color: "bg-orange-500",
    description: "Various bike parts",
    image: "/img/multiutility.png",
  },
  {
    id: "others",
    name: "Others",
    color: "bg-gray-500",
    description: "Additional accessories",
    image: "/img/multiutility.png",
  },
];

export default function BikeExplorer() {
  const [activeSection, setActiveSection] = useState("wheels");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImage, setCurrentImage] = useState("/bike-wheel.png");

  const toggleSection = (sectionId) => {
    if (sectionId === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      const section = bikeData.find((s) => s.id === sectionId);
      setCurrentImage(
        section?.image || "/placeholder.svg?height=400&width=600"
      );
      setTimeout(() => setIsTransitioning(false), 50);
    }, 250);
  };

  const activeData = bikeData.find((section) => section.id === activeSection);

  return (
    <div className=" bg-gray-100 flex ">
      <Container maxWidth="xl">
        <div className="grid grid-cols-3 gap-0 min-h-screen">
          {/* Left Panel */}
          <div className="col-span-1 bg-gradient-to-br from-green-800 to-green-900 text-white flex flex-col rounded-l-[20px]">
            <div className="p-12 flex-1">
              <div className="space-y-4 ">
                {bikeData.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className={`w-full text-left p-4 rounded-[20px]  transition-all duration-300 group ${
                      activeSection === section.id
                        ? "bg-white/10 backdrop-blur-sm border border-white/20"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-white-500 w-12">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          {section.name}
                        </h3>
                        {/* Remove this line if you already removed description from data */}
                        <p className="text-gray-200 text-sm">
                          {section.description}
                        </p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full  ${
                          activeSection === section.id
                            ? "scale-125 bg-green-500"
                            : "scale-100 bg-white"
                        } transition-transform duration-300 `}
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
                {activeData?.name}
              </h2>
              {/* Remove this line if description is removed */}
              {/* <p className="text-gray-600 text-lg">{activeData?.description}</p> */}
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
                  {/* <img
                    src={currentImage || "/placeholder.svg"}
                    alt="Bike Part"
                    className="w-full h-full object-contain"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
