import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import Container from "@mui/material/Container";
import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";

import Breadcrumb from "@/components/breadcrumb";
import { data } from "./_data";
export default async function Page({ params }) {
  const { slug } = await params;
  const content = data.find((item) => item.slug === slug);

  if (!content) {
    return <p>Product Not Found</p>;
  }
  return (
    <>
      <Breadcrumb title={content.title} />

      <div className="section">
        <Container maxWidth="xl">
          <div className="">
            {/* Left side - Images */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/img/blogs-img.jpeg"
                  alt="Interior design team collaborating on projects"
                  width={2000}
                  height={2000}
                  className="w-full h-auto object-contain   shadow-2xl  relative "
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="section bg-gray-50">
        <Container maxWidth="xl">
          {/* Hero/Introduction Section */}
          <div className=" max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight ">
              {content.title}
            </h2>
            {content.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Container>
      </div>

      <div className="section">
        <Container maxWidth="xl">
          <div className="mb-8">
            <h2 className="text-3xl  md:text-4xl font-bold tracking-tight text-center  ">
              {content.driverBenefits.title}
            </h2>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.driverBenefits.benefits.map((benefit, i) => (
              <Card
                key={i}
                className="group rounded-[20px] mb-4 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white mb-0">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <section className="bg-gray-50 section">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="  lg:sticky top-[100px]">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {content.featuresPerformance.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mt-6">
                  {content.featuresPerformance.description}
                </p>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {content.featuresPerformance.features.map((feature, i) => (
                <div
                  key={i}
                  className="space-y-4 p-4 border-l-2 border-l-green-500  border-1 border-green-300 rounded-[20px]"
                >
                  <div className="text-lg font-semibold text-gray-900 ">
                    {feature.title}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-0">
            {content.brandReputation.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.brandReputation.points.map((point, i) => (
            <Card
              key={i}
              className="rounded-[20px] shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  {point.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
