"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { DataProvider } from "../DataContext";

export default function Layout({ children }) {
  const pathname = usePathname();
  const notShow = pathname === "/enquire";
  const routes = ["/enquire"];

  if (routes.includes(pathname)) return children;
  return (
    <DataProvider>
      <div>
        <Navbar />
        {children}
        <Footer></Footer>
      </div>
    </DataProvider>
  );
}
