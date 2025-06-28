import dynamic from "next/dynamic";
import React from "react";
import ReviewsSection from "@/components/review";
import HeroSection from "./home/hero";
import ContingentSection from "./home/about";
import Blogs from "@/components/blog";
import OurProduct from "@/components/products";
import Bajaj360Viewer from "@/components/fecher-products";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContingentSection />
      <OurProduct />
      <ReviewsSection></ReviewsSection>
      <Blogs />
    </>
  );
}
