"use client"; // Add this if you're in the App Router (Next.js 13+)

import dynamic from "next/dynamic";
import React from "react";
import MahindraNavbar from "@/components/nav";
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
      <Blogs />
    </>
  );
}
