"use client";

import { useContext, useState, useEffect } from "react";
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useData } from "./DataContext";

export default function Navbar() {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const { data: vehicles = [], loading } = useData();

  const vehicleCategories = vehicles.reduce((acc, vehicle) => {
    const category = vehicle.category?.toLowerCase() || "uncategorized";
    if (!acc[category]) acc[category] = { products: [] };
    acc[category].products.push(vehicle);
    return acc;
  }, {});

  useEffect(() => {
    const categories = Object.keys(vehicleCategories);
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [vehicleCategories]);

  const handleDownload = (fileUrl, filename) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = filename || "brochure.pdf";
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
      {/* Top Header */}
      <div className="nav-header py-2 overflow-hidden">
        <Container maxWidth="xl">
          <div className="flex justify-end items-center gap-4 md:gap-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-48 justify-between px-2 border-2 border-white/30 hover:border-white/50 hover:text-white transition-all bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                >
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg p-2 bg-white border-0 text-black"
                align="center"
              >
                {Object.entries(vehicleCategories).map(
                  ([categoryKey, categoryData], index) => (
                    <div key={categoryKey}>
                      <div
                        className="flex items-center justify-between w-full px-2 rounded-sm cursor-pointer"
                        onClick={() => toggleCategoryExpansion(categoryKey)}
                      >
                        <span className="font-medium capitalize">
                          {categoryKey}
                        </span>
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
                              onClick={() =>
                                handleDownload(item.brochure, item.title)
                              }
                            >
                              <Download className="h-3 w-3 mr-2" />
                              {item.title}
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
            <span className="text-white flex gap-2 font-medium text-sm md:text-base">
              <Phone /> 4559383834
            </span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-between gap-6 lg:gap-10">
              <Link
                href="/"
                className="text-lg font-medium hover:text-gray-700"
              >
                Home
              </Link>
              <div
                className="relative group"
                onMouseEnter={() => setIsVehiclesOpen(true)}
                onMouseLeave={() => setIsVehiclesOpen(false)}
              >
                <button className="flex items-center text-lg font-medium hover:text-gray-700">
                  Vehicles <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Mega Menu */}
                <div
                  className={`absolute top-5 mt-1 pt-7 w-[700px] transition-opacity duration-200 ${
                    isVehiclesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="flex bg-white rounded-lg shadow-xl text-black">
                    <div className="w-1/3 border-r border-gray-200">
                      {Object.keys(vehicleCategories).map((category) => (
                        <button
                          key={category}
                          className={`w-full text-left px-4 py-3 text-lg font-medium border-b border-gray-200 last:border-b-0 ${
                            selectedCategory === category
                              ? "bg-gray-100 text-black border-r-2 border-gray-400"
                              : "hover:bg-gray-100"
                          }`}
                          onMouseEnter={() => setSelectedCategory(category)}
                        >
                          {category}
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
                          <h3 className="text-lg font-semibold mb-4 capitalize">
                            {selectedCategory}
                          </h3>
                          <div className="grid grid-cols-3 gap-3">
                            {vehicleCategories[selectedCategory]?.products?.map(
                              (product) => (
                                <Link
                                  key={product.id}
                                  href={`/products/${product.slug}`}
                                  className="text-center group cursor-pointer"
                                >
                                  <div className="h-24 flex items-center justify-center">
                                    <Image
                                      height={60}
                                      width={60}
                                      src={`https://macapi.brandingwaale.com/${product.carousel[0].replace(
                                        /\\/g,
                                        "/"
                                      )}`}
                                      alt={product.title}
                                      className="max-h-full w-auto object-contain"
                                    />
                                  </div>
                                  <p className="text-xs font-medium group-hover:text-gray-800">
                                    {product.title}
                                  </p>
                                </Link>
                              )
                            )}
                          </div>
                          <div className="mt-6">
                            <Link
                              href={`/category/${selectedCategory.toLowerCase()}`}
                              className="text-sm font-medium hover:text-gray-700"
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

              {/* Static Links */}
              <Link
                href="/about"
                className="text-lg font-medium hover:text-gray-700"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium hover:text-gray-700"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-lg font-medium hover:text-gray-700"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-gray-700"
              >
                Contact Us
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </motion.button>
              <Link href="/enquire" className="btn">
                Enquire Now
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black p-2"
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

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              className="md:hidden bg-white px-4 pb-4 pt-2 space-y-2"
            >
              <Link href="/" className="block font-medium hover:text-gray-700">
                Home
              </Link>
              <div>
                <button
                  onClick={() => setIsVehiclesOpen(!isVehiclesOpen)}
                  className="flex items-center justify-between w-full font-medium"
                >
                  Vehicles <ChevronDown className="h-4 w-4" />
                </button>
                {isVehiclesOpen && (
                  <div className="pl-4 pt-2 space-y-2">
                    {Object.keys(vehicleCategories).map((category) => (
                      <Link
                        key={category}
                        href={`/category/${category.toLowerCase()}`}
                        className="block text-sm hover:text-gray-700"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="block font-medium hover:text-gray-700"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="block font-medium hover:text-gray-700"
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className="block font-medium hover:text-gray-700"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block font-medium hover:text-gray-700"
              >
                Contact Us
              </Link>
              <Link
                href="/enquire"
                className="block font-medium hover:text-gray-700"
              >
                Enquire Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Sidebar */}
      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
