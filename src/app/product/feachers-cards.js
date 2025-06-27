"use client";
import Image from "next/image";
import Container from "@mui/material/Container";

const StepsSection = ({ product }) => {
  const { featuresSteps } = product;

  return (
    <section className="section py-16">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
          <div className="mb-5">
            <h2 className="text-4xl font-bold mb-6">
              {featuresSteps.header.title}
            </h2>
            <p className="text-xl text-gray-700">
              {featuresSteps.header.subtitle}
            </p>
          </div>

          <div>
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
                  style={{
                    backgroundImage: `url(${step.image})`,
                    backgroundSize: "   cover",
                  }}
                  className={`h-full bg-center bg-fixed min-h-[400px]   bg-no-repeat rounded-xl shadow-md relative overflow-hidden
                    ${isEven ? "md:order-1" : "md:order-2"} order-1`}
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
                    src={step.icon || "/placeholder.svg?height=60&width=60"}
                    alt="icon"
                    width={60}
                    height={60}
                    className="mb-4 "
                  />
                  <h2 className="text-4xl font-light mb-4">{step.title}</h2>
                  <p className="mb-4 max-w-xl text-gray-600">{step.text}</p>

                  <div
                    className={`absolute text-[130px] lg:text-[250px] font-bold text-gray-100 z-[-1] -top-[100px] ${
                      isEven ? "right-8" : "left-8"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mt-4">
                    <h3 className="text-2xl font-semibold">Key Features</h3>
                    {step.features.map((feature, fIndex) => (
                      <ul key={fIndex} className="space-y-2">
                        {feature.list.map((item, i) => (
                          <li key={i} className="text-sm leading-relaxed">
                            <strong className="text-green-600">
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
