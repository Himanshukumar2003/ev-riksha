"use client";
import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "/travel.png",
    image: "/demo.webp",
    title: "Space Feasibility Consultation",
    text: `Engage us even before securing your property—whether corporate or residential. Not every space will align with your goals. With our expert evaluation, we ensure your investment in real estate is optimized for both function and value, helping you make informed decisions early on.`,
    features: [
      {
        list: [
          {
            strong: "Big Powerful Battery",
            description: "12.1 kWh LFP battery that lasts for an entire day.",
          },
          {
            strong: "Eco Mode",
            description: "Optimizes performance and power usage automatically.",
          },
          {
            strong: "Fast Charging",
            description: "Recharge to 80% in just 1 hour.",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    icon: "/travel.png",
    image: "/demo.webp",
    title: "Space Layout Design",
    text: `Engage us even before securing your property—whether corporate or residential. Not every space will align with your goals. With our expert evaluation, we ensure your investment in real estate is optimized for both function and value, helping you make informed decisions early on.`,
    features: [
      {
        list: [
          {
            strong: "Smart Layouts",
            description: "Optimized for productivity and space efficiency.",
          },
          {
            strong: "Natural Light",
            description: "Maximizes daylight for energy efficiency.",
          },
          {
            strong: "Modular Design",
            description: "Flexible elements for growth and change.",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    icon: "/travel.png",
    image: "/demo.webp",
    title: "Technical Services Design",
    text: `Engage us even before securing your property—whether corporate or residential. Not every space will align with your goals. With our expert evaluation, we ensure your investment in real estate is optimized for both function and value, helping you make informed decisions early on.`,
    features: [
      {
        list: [
          {
            strong: "Integrated HVAC",
            description: "Ensures comfort and clean airflow.",
          },
          {
            strong: "Smart Automation",
            description: "Remote control and automation features.",
          },
          {
            strong: "Optimized Cabling",
            description: "Reduces clutter and improves safety.",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    icon: "/travel.png",
    image: "/demo.webp",
    title: "Engage us even before securing ",
    text: `Engage us even before securing your property—whether corporate or residential. Not every space will align with your goals. With our expert evaluation, we ensure your investment in real estate is optimized for both function and value, helping you make informed decisions early on.`,
    features: [
      {
        list: [
          {
            strong: "Material Variety",
            description: "Choose from durable and elegant finishes.",
          },
          {
            strong: "Mood Boards",
            description: "Visual direction before execution.",
          },
          {
            strong: "Eco-Friendly Options",
            description: "Sustainable and stylish materials.",
          },
        ],
      },
    ],
  },
  // Add other steps here as needed...
];

const StepsSection = () => {
  return (
    <section className="section py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-center text-3xl font-semibold mb-12">
          8 Steps to Your <b>Dream Space</b>
        </h1>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => {
            const stepNum = parseInt(step.number);
            const isEven = stepNum % 2 === 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image Block */}
                <div
                  className={`h-full bg-cover min-h-[400px] bg-center rounded-xl bg-fixed shadow-md order-${
                    isEven ? "1" : "2"
                  } md:order-${isEven ? "1" : "2"}`}
                  style={{ backgroundImage: `url(${step.image})` }}
                ></div>

                {/* Content Block */}
                <div
                  className={`order-${isEven ? "2" : "1"} md:order-${
                    isEven ? "2" : "1"
                  }`}
                >
                  <div
                    className={`relative flex flex-col justify-center h-full 
                    ${
                      isEven ? "text-left items-start" : "text-right items-end"
                    }`}
                  >
                    <Image
                      src={step.icon}
                      alt="icon"
                      width={60}
                      height={60}
                      className="mb-4 "
                    />
                    <h2 className="text-4xl   font-light mb-4">{step.title}</h2>
                    <p className="mb-4 max-w-xl">{step.text}</p>

                    <h1
                      className={`absolute text-[130px] lg:text-[250px] font-bold text-gray-100 z-[-1] -top-[100px] ${
                        isEven ? "right-8" : "left-8"
                      }`}
                    >
                      {step.number}
                    </h1>

                    {/* Features */}

                    <div className="space-y-4 mt-4 ">
                      <h2 className="text-2xl">Feachers</h2>
                      {step.features.map((feature, fIndex) => (
                        <ul key={fIndex} className="space-y-2">
                          {feature.list.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm leading-relaxed italic"
                            >
                              <strong className="text-emerald-600">
                                {item.strong}
                              </strong>
                              {`: ${item.description}`}
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
