"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const NavBar = {
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

export default function MahindraNavbar() {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("3W Passenger");
  const [expandedFuelType, setExpandedFuelType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-2 items-center ">
          {/* Logo */}
          <Image src="/logo.png" alt="logo" width={150} height={150}></Image>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {}
              {/* <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
                  onMouseEnter={() => setIsVehiclesOpen(true)}
                  onMouseLeave={() => setIsVehiclesOpen(false)}
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
                      className="absolute left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200"
                      onMouseEnter={() => setIsVehiclesOpen(true)}
                      onMouseLeave={() => setIsVehiclesOpen(false)}
                    >
                      <div className="flex">
                        {}
                        <div className="w-1/3 bg-gray-50 rounded-l-lg">
                          {Object.keys(vehicleCategories).map((category) => (
                            <button
                              key={category}
                              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-200 last:border-b-0 ${
                                selectedCategory === category
                                  ? "bg-red-50 text-[var(--color-secondary)] border-r-2 border-[  var(--color-secondary)]"
                                  : "text-gray-700 hover:bg-gray-100"
                              }`}
                              onMouseEnter={() => setSelectedCategory(category)}
                            >
                              {category}
                              <ChevronDown className="float-right mt-0.5 h-4 w-4" />
                            </button>
                          ))}
                        </div>

                        {}
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
                              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                {selectedCategory}
                              </h3>

                              {}
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
                                      className="border border-gray-200 rounded-lg overflow-hidden"
                                    >
                                      <button
                                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-red-50 hover:border-red-200 transition-all duration-200 group"
                                        onClick={() =>
                                          toggleFuelType(categoryFuelKey)
                                        }
                                        onMouseEnter={() => {
                                          
                                          
                                        }}
                                      >
                                        <span className="font-medium text-gray-800 group-hover:text-[var(--color-secondary)] transition-colors">
                                          {fuelType}
                                        </span>
                                        <ChevronDown
                                          className={`h-4 w-4 text-gray-500 group-hover:text-[var(--color-secondary)] transition-all duration-200 ${
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
                                            <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                                              <div className="grid grid-cols-2 gap-3 mt-3">
                                                {fuelData.products.map(
                                                  (product, index) => (
                                                    <div
                                                      key={index}
                                                      className="text-center group cursor-pointer"
                                                    >
                                                      <div className="bg-white rounded-lg p-3 mb-2 group-hover:bg-red-50 group-hover:shadow-md transition-all duration-200 border border-transparent group-hover:border-red-100">
                                                        <img
                                                          src={
                                                            product.image ||
                                                            "/placeholder.svg"
                                                          }
                                                          alt={product.name}
                                                          className="w-12 h-12 mx-auto object-contain"
                                                        />
                                                      </div>
                                                      <p className="text-xs font-medium text-gray-700 group-hover:text-[var(--color-secondary)] transition-colors">
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
                                <button className="text-[var(--color-secondary)] text-sm font-medium hover:underline">
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
              </div> */}

              <a
                href="#"
                className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>

              <a
                href="#"
                className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Dealer Locator
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Become a Dealer
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Blogs
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors"
              >
                Uday Nxt
              </a>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[var(--color-secondary)] px-3 py-2 text-sm font-medium transition-colors">
              Contact Us
            </button>

            <button className="bg-gray-800 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
              Enquire Now
            </button>
            <Image
              src="/logo-manufaturer.png"
              alt="logo"
              width={150}
              height={150}
            ></Image>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[var(--color-secondary)] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Vehicles
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Dealer Locator
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Become a Dealer
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Uday Nxt
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-secondary)]"
              >
                Contact Us
              </a>
              <button className="w-full text-left bg-gray-800 text-white px-3 py-2 text-base font-medium rounded-md">
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
