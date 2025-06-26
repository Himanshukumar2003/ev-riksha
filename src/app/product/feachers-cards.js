"use client";
import Image from "next/image";
import Container from "@mui/material/Container";
import vehicleData from "@/data/vehicle-data.json";

const StepsSection = () => {
  const { featuresSteps } = vehicleData.vehicleShowcase;
  return (
    <section className="section py-16">
      <Container maxWidth="xl">
        <div className="grid grid-cols-2 mb-10">
          <div className="mb-5">
            <h2 className=" font-bold mb-6">{featuresSteps.header.title}</h2>
            <p>{featuresSteps.header.subtitle}</p>
          </div>

          <div className="">
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              {featuresSteps.header.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16">
          {featuresSteps.steps.map((step, index) => {
            const stepNum = Number.parseInt(step.number);
            const isEven = stepNum % 2 === 0;

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image Block */}
                <div
                  className={`h-full bg-cover min-h-[400px] bg-center rounded-xl bg-fixed shadow-md 
      ${isEven ? "md:order-1" : "md:order-2"} order-1`}
                  style={{ backgroundImage: `url(${step.image})` }}
                ></div>

                {/* Content Block */}
                <div
                  className={`relative flex flex-col justify-center h-full 
      ${
        isEven
          ? "md:order-2 items-start text-left"
          : "md:order-1 items-end text-right"
      } order-2`}
                >
                  <Image
                    src={step.icon || "/placeholder.svg"}
                    alt="icon"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <h2 className="text-4xl font-light mb-4">{step.title}</h2>
                  <p className="mb-4 max-w-xl">{step.text}</p>

                  <div
                    className={`absolute text-[130px] lg:text-[250px] font-bold text-gray-100 z-[-1] -top-[100px] ${
                      isEven ? "right-8" : "left-8"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mt-4">
                    <h2 className="text-2xl">Features</h2>
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
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StepsSection;
