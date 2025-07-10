"use client";

import { useState } from "react";
import {
  ChevronDown,
  Menu,
  Search,
  X,
  Download,
  Plus,
  Minus,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SearchSidebar from "./serchbar";
import Link from "next/link";
import Container from "@mui/material/Container";
import { products } from "@/data/vehicle-data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Group products by category using the imported data
const vehicleCategories = {
  Passenger: {
    products: products.filter(
      (product) => product.category.toLowerCase() === "passenger"
    ),
  },
  Cargo: {
    products: products.filter(
      (product) => product.category.toLowerCase() === "cargo"
    ),
  },
  Garbage: {
    products: products.filter(
      (product) => product.category.toLowerCase() === "garbage"
    ),
  },
};

export default function Navbar() {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Passenger");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const handleDownload = (fileUrl, filename) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename || "brochure.pdf"; // fallback filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleCategoryExpansion = (category) => {
    setExpandedItems((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

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

  return (
    <>
      <div className="nav-header bg-gray-50 py-2 border-b border-gray-100">
        <Container maxWidth="xl">
          <div className="flex justify-end   items-center gap-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-48 justify-between border-2 border-gray-300 hover:border-gray-400 transition-colors bg-white text-black"
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 p-2 bg-white text-black"
                align="end"
              >
                {Object.entries(vehicleCategories).map(
                  ([categoryKey, categoryData], index) => (
                    <div key={categoryKey}>
                      <div
                        className="flex items-center justify-between w-full px-2 py-2 hover:bg-gray-100 rounded-sm cursor-pointer"
                        onClick={() => toggleCategoryExpansion(categoryKey)}
                      >
                        <span className="font-medium">{categoryKey}</span>
                        {expandedItems[categoryKey] ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>

                      {expandedItems[categoryKey] && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                          {categoryData.products.map((item) => (
                            <div
                              key={item.id}
                              className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-sm text-sm flex items-center"
                              onClick={() => handleDownload(item.brochure)}
                            >
                              <Download className="h-3 w-3 mr-2" />
                              {item.model}
                            </div>
                          ))}
                        </div>
                      )}

                      {index < Object.keys(vehicleCategories).length - 1 && (
                        <DropdownMenuSeparator className="my-1" />
                      )}
                    </div>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-black flex gap-2 font-medium text-sm md:text-base">
              <Phone></Phone> 4559383834
            </span>
          </div>
        </Container>
      </div>

      <nav className="bg-white text-black shadow-xl py-2 h-[80px] flex justify-center items-center z-50 sticky top-0">
        <Container maxWidth="xl">
          <div className="flex justify-between items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={150}
              className="w-[150px]"
            />

            <div className="hidden md:flex items-center justify-between gap-10">
              <Link
                href="/"
                className="text-black hover:text-gray-700 text-lg font-medium transition-colors"
              >
                Home
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsVehiclesOpen(true)}
                onMouseLeave={() => setIsVehiclesOpen(false)}
              >
                <button className="flex items-center text-black hover:text-gray-700 text-lg font-medium transition-colors">
                  Vehicles <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Improved mega dropdown */}
                <div
                  className={`absolute left-0 top-5 mt-1 pt-7 w-[800px]  transition-opacity duration-200 ${
                    isVehiclesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="flex bg-white rounded-lg shadow-xl text-black">
                    <div className="w-1/3 bg-white rounded-l-lg border-r border-gray-200">
                      {Object.keys(vehicleCategories).map((category) => (
                        <button
                          key={category}
                          className={`w-full text-left px-4 py-3 text-lg font-medium transition-colors border-b border-gray-200 last:border-b-0 ${
                            selectedCategory === category
                              ? "bg-gray-100 text-black border-r-2 border-gray-400"
                              : "text-black hover:bg-gray-100"
                          }`}
                          onMouseEnter={() => setSelectedCategory(category)}
                        >
                          {category}
                          <ChevronDown className="float-right mt-0.5 h-4 w-4" />
                        </button>
                      ))}
                    </div>

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
                          <h3 className="text-lg font-semibold text-black mb-4">
                            {selectedCategory}
                          </h3>
                          <div className="grid grid-cols-3 gap-3">
                            {vehicleCategories[selectedCategory]?.products?.map(
                              (product) => (
                                <Link
                                  key={product.id}
                                  className="text-center group cursor-pointer"
                                  href={`/product/${product.slug}`}
                                >
                                  <div className="h-24 flex items-center justify-center">
                                    <Image
                                      height={500}
                                      width={500}
                                      src={
                                        product.navImg ||
                                        "/placeholder.svg?height=60&width=60" ||
                                        "/placeholder.svg"
                                      }
                                      alt={product.model}
                                      className="max-h-full w-auto mx-auto object-contain"
                                    />
                                  </div>
                                  <p className="text-xs font-medium text-black group-hover:text-gray-800 transition-colors">
                                    {product.model}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {product.brand}
                                  </p>
                                </Link>
                              )
                            )}
                          </div>
                          <div className="mt-6">
                            <Link
                              href={`/category/${selectedCategory.toLowerCase()}`}
                              className="text-black text-sm font-medium hover:text-gray-700"
                            >
                              View all {selectedCategory} →
                            </Link>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {[
                { href: "/about", text: "About" },
                { href: "/blog", text: "Blog" },
                { href: "#", text: "Gallery" },
                { href: "/contact", text: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-black hover:text-gray-700 text-lg font-medium transition-colors"
                >
                  {link.text}
                </Link>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="text-black hover:text-gray-700 rounded-lg transition-all duration-200 relative group"
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <Link
                href="/enquire"
                className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Enquire Now
              </Link>
            </div>

            <div className="hidden md:flex items-center">
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
                className="text-black hover:text-gray-700 p-2"
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

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-[55px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  Home
                </Link>

                {/* Mobile vehicles dropdown */}
                <div className="block px-3 py-2">
                  <div
                    className="flex justify-between items-center text-base font-medium text-black"
                    onClick={() => toggleCategoryExpansion("mobileVehicles")}
                  >
                    <span>Vehicles</span>
                    {expandedItems["mobileVehicles"] ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>

                  {expandedItems["mobileVehicles"] && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-gray-200 pl-2">
                      {Object.keys(vehicleCategories).map((category) => (
                        <div key={category} className="py-1">
                          <div
                            className="flex justify-between items-center text-sm font-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategoryExpansion(`mobile-${category}`);
                            }}
                          >
                            <span>{category}</span>
                            {expandedItems[`mobile-${category}`] ? (
                              <Minus className="h-3 w-3" />
                            ) : (
                              <Plus className="h-3 w-3" />
                            )}
                          </div>

                          {expandedItems[`mobile-${category}`] && (
                            <div className="mt-1 ml-3 space-y-1">
                              {vehicleCategories[category].products.map(
                                (product) => (
                                  <Link
                                    key={product.id}
                                    href={`/product/${product.slug}`}
                                    className="block py-1 text-sm text-gray-700 hover:text-black"
                                  >
                                    {product.model}
                                  </Link>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  Contact Us
                </Link>
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-black hover:text-gray-700"
                >
                  Search
                </button>
                <Link
                  href="/enquire"
                  className="block w-full text-left bg-black hover:bg-gray-800 text-white px-3 py-3 text-base font-medium rounded-md"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
