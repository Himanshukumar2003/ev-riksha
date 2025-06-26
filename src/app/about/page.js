import Image from "next/image";
import WhyChoose from "./why-choose-us";
import Container from "@mui/material/Container";

export default function About() {
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
                  className="w-full h-auto object-cover  about-two-img   relative "
                />

                {/* Satisfaction Guarantee Badge */}
                <div className="absolute bottom-0 bg-white  left-0  text-white pl-0 pb-0 p-4  ">
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
              {/* Header */}
              <div>
                <div className="text-[var(--color-primary-light)] text-sm font-medium mb-4 flex items-center">
                  <span className="w-8 h-px bg-[var(--color-primary-light)] mr-3"></span>
                  SINCE 1986
                </div>
                <h1 className="text-2xl md:text-4xl   leading-tight mb-6">
                  We design thoughtful, livable spaces.
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed ">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <WhyChoose></WhyChoose>
    </>
  );
}
