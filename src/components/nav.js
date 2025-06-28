"use client";

import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SearchSidebar from "./serchbar";
import Link from "next/link";
import Container from "@mui/material/Container";
const vehicleCategories = {
  "3W Passenger": {
    fuelTypes: {
      Electric: {
        products: [
          { name: "e-Alfa Mini", image: "/placeholder.svg?height=80&width=80" },
          { name: "e-Alfa Plus", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
      CNG: {
        products: [
          {
            name: "Alfa Plus Duo",
            image: "/placeholder.svg?height=80&width=80",
          },
          { name: "Alfa Load", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
    },
  },
  "3W Cargo": {
    fuelTypes: {
      Electric: {
        products: [
          {
            name: "e-Alfa Cargo",
            image: "/placeholder.svg?height=80&width=80",
          },
          { name: "Treo Zor", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
      CNG: {
        products: [
          {
            name: "Alfa Plus Duo",
            image: "/placeholder.svg?height=80&width=80",
          },
          {
            name: "Supro Profit",
            image: "/placeholder.svg?height=80&width=80",
          },
        ],
      },
      Diesel: {
        products: [
          {
            name: "Bolero Pickup",
            image: "/placeholder.svg?height=80&width=80",
          },
          { name: "Jeeto", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
    },
  },
  "4W Cargo": {
    fuelTypes: {
      Diesel: {
        products: [
          {
            name: "Bolero Pickup",
            image: "/placeholder.svg?height=80&width=80",
          },
          {
            name: "Jeeto Diesel",
            image: "/placeholder.svg?height=80&width=80",
          },
          {
            name: "Supro Profit",
            image: "/placeholder.svg?height=80&width=80",
          },
        ],
      },
      CNG: {
        products: [
          { name: "Jeeto CNG", image: "/placeholder.svg?height=80&width=80" },
          { name: "Supro CNG", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
    },
  },
  "4W Electric": {
    fuelTypes: {
      Electric: {
        products: [
          { name: "Treo Yaari", image: "/placeholder.svg?height=80&width=80" },
          { name: "e-Verito", image: "/placeholder.svg?height=80&width=80" },
          { name: "eMAX", image: "/placeholder.svg?height=80&width=80" },
        ],
      },
    },
  },
};

export default function Navbar() {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("3W Passenger");
  const [expandedFuelType, setExpandedFuelType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 

  const getAnimationDirection = (category, categories) => {
    const currentIndex = categories.indexOf(selectedCategory);
    const newIndex = categories.indexOf(category);
    return newIndex > currentIndex ? "up" : "down";
  };

  const slideVariants = {
    up: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
    },
    down: {
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 20, opacity: 0 },
    },
  };

  const toggleFuelType = (categoryFuelKey) => {
    setExpandedFuelType(
      expandedFuelType === categoryFuelKey ? null : categoryFuelKey
    );
  };

  return (
    <>
      <nav className="bg-green-800 shadow-lg py-2  z-50   sticky top-0">
        <Container maxWidth="xl">
          <div className="flex justify-between  items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="w-[150px]"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between gap-10 ">
              <Link
                href="/"
                className="text-white hover:text-lime-400  text-[16px] font-medium transition-colors"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseLeave={() => setIsVehiclesOpen(false)}
              >
                <button
                  className="flex items-center text-white hover:text-lime-400  text-sm font-medium transition-colors"
                  onMouseEnter={() => setIsVehiclesOpen(true)}
                >
                  Vehicles
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isVehiclesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-[36px] mt-2 w-[800px] bg-green-700 rounded-lg shadow-xl"
                      onMouseEnter={() => setIsVehiclesOpen(true)}
                      onMouseLeave={() => setIsVehiclesOpen(false)}
                    >
                      {/* Category Tabs */}
                      <div className="flex">
                        <div className="w-1/3 bg-green-800 rounded-l-lg">
                          {Object.keys(vehicleCategories).map((category) => (
                            <button
                              key={category}
                              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-green-500 last:border-b-0 ${
                                selectedCategory === category
                                  ? "bg-emerald-50 text-lime-600 border-r-2 border-lime-400"
                                  : "text-white hover:bg-green-600"
                              }`}
                              onMouseEnter={() => setSelectedCategory(category)}
                            >
                              {category}
                              <ChevronDown className="float-right mt-0.5 h-4 w-4" />
                            </button>
                          ))}
                        </div>

                        {/* Fuel Types and Products */}
                        <div className="w-2/3 p-6">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={selectedCategory}
                              variants={
                                slideVariants[
                                  getAnimationDirection(
                                    selectedCategory,
                                    Object.keys(vehicleCategories)
                                  )
                                ]
                              }
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              transition={{ duration: 0.3 }}
                            >
                              <h3 className="text-lg font-semibold text-white mb-4">
                                {selectedCategory}
                              </h3>
                              <div className="space-y-3">
                                {Object.entries(
                                  vehicleCategories[selectedCategory].fuelTypes
                                ).map(([fuelType, fuelData]) => {
                                  const categoryFuelKey = `${selectedCategory}-${fuelType}`;
                                  const isExpanded =
                                    expandedFuelType === categoryFuelKey;

                                  return (
                                    <div
                                      key={fuelType}
                                      className="border border-green-500 rounded-lg overflow-hidden"
                                    >
                                      <button
                                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-green-600 transition-all duration-200 group"
                                        onClick={() =>
                                          toggleFuelType(categoryFuelKey)
                                        }
                                      >
                                        <span className="font-medium text-white group-hover:text-lime-400 transition-colors">
                                          {fuelType}
                                        </span>
                                        <ChevronDown
                                          className={`h-4 w-4 text-white group-hover:text-lime-400 transition-all duration-200 ${
                                            isExpanded ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {isExpanded && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                              height: "auto",
                                              opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                              duration: 0.3,
                                              ease: "easeInOut",
                                            }}
                                            className="overflow-hidden"
                                          >
                                            <div className="px-4 pb-4 border-t border-gray-100">
                                              <div className="grid grid-cols-2 gap-3 mt-3">
                                                {fuelData.products.map(
                                                  (product, index) => (
                                                    <div
                                                      key={index}
                                                      className="text-center group cursor-pointer"
                                                    >
                                                      <div className="bg-white rounded-lg p-3 mb-2 group-hover:bg-emerald-50 group-hover:shadow-md transition-all duration-200 border border-transparent group-hover:border-green-100">
                                                        <img
                                                          src={
                                                            product.image ||
                                                            "/placeholder.svg"
                                                          }
                                                          alt={product.name}
                                                          className="w-12 h-12 mx-auto object-contain"
                                                        />
                                                      </div>
                                                      <p className="text-xs font-medium text-white group-hover:text-lime-400 transition-colors">
                                                        {product.name}
                                                      </p>
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="mt-6">
                                <button className="text-white text-sm font-medium hover:text-lime-400">
                                  View all {selectedCategory} →
                                </button>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {[
                { href: "/about", text: "About" },
                { href: "/blog", text: "Blog" },
                { href: "#", text: "Gallery" },
                { href: "/contact", text: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-white hover:text-lime-400  text-[16px] font-medium transition-colors"
                >
                  {link.text}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="  text-white hover:text-lime-400  rounded-lg transition-all duration-200 relative group"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <Link
                href="/enquire"
                className="bg-lime-500 m-0 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-lime-600 transition-colors"
              >
                Enquire Now
              </Link>
            </div>

            <div className="hidden md:flex items-center ">
              <Image
                src="/logo-manufaturer.png"
                alt="logo"
                width={150}
                height={150}
              />
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-lime-400 p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-green-700 border-t border-green-500"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  "Vehicles",
                  "Dealer Locator",
                  "Become a Dealer",
                  "Blogs",
                  "Contact Us",
                ].map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-white hover:text-lime-400"
                  >
                    {link}
                  </a>
                ))}

                <button className="w-full text-left bg-lime-500 hover:bg-lime-600 text-white px-3 py-2 text-base font-medium rounded-md">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Sidebar Rendered Outside */}
      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
