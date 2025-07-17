"use client";
import { useState, useEffect } from "react";
import { MapPin, Palette } from "lucide-react";
import React360Viewer from "react-360-view";
import Container from "@mui/material/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "@/app/home/video";
import EMICalculator from "./emi-calculator";
import FinancerLogos from "./financers";
import EnquiryFormModal from "./form";
export default function MainProductViewer({ product }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interest, setInterestRate] = useState(0);
  const handleInterestRateChange = (rate) => {
    setInterestRate(rate);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Format price (e.g., ₹1,20,000)
  const formatPrice = (price) => (price ? price.toLocaleString("en-IN") : "0");

  // Display user-friendly location
  const getCurrentLocation = () =>
    selectedCity || selectedState || "your location";

  useEffect(() => {
    if (product) {
      setSelectedColor(0); // default color index
      // Default price
      const base = product?.pricing?.[0]?.base_price || 0;
      setCurrentPrice(base);
    }
  }, [product]);

  // Update price based on city selection
  useEffect(() => {
    if (!selectedState) return;

    const stateObj = product?.pricing?.find((p) => p.name === selectedState);
    if (!stateObj) return;

    let base = stateObj.base_price || 0;

    if (selectedCity && stateObj.cities?.length) {
      const cityObj = stateObj.cities.find((c) => c.name === selectedCity);
      if (cityObj) {
        base += cityObj.price_modifier || 0;
      }
    }

    setCurrentPrice(base);
  }, [selectedState, selectedCity, product]);

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCity(""); // reset city
  };

  return (
    <div className="section">
      <div className="min-h-screen">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 360 Viewer */}
            <div className="relative">
              <div className="mx-auto transition-all">
                <div className="no-zoom" style={{ touchAction: "none" }}>
                  {/* <React360Viewer
                    amount={product?.carousel?.length}
                    imagePath="https://hjv2pvkv-3001.inc1.devtunnels.ms/images/"
                    fileName="index"
                    autoplay={false}
                    loop={false}
                    dragSpeed={100}
                    buttonClass="hidden"
                  /> */}
                </div>
              </div>

              {/* 360° Drag Indicator */}
              <div className="flex justify-center mt-6">
                <div className="text-[var(--color-secondary)] px-4 py-2 rounded-full shadow-lg">
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    360° Drag to Rotate
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-3xl shadow-md p-8 border border-white/20 backdrop-blur-sm transition-all duration-300">
              {/* Title */}
              <div className="border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">
                      {product?.title?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      {product?.category}
                    </div>
                    <div className="font-bold text-xl text-gray-800">
                      {product?.title}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {product?.description}
                </p>
              </div>

              {/* Color Picker */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-700">
                    Select Color
                  </h3>
                </div>

                {product?.colors && product.colors.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        className={`relative w-8 h-8 rounded-xl border-2 border-transparent transition-all duration-300 transform hover:scale-110 ${
                          selectedColor === index
                            ? "border-green-600 ring-2 ring-green-200 scale-110 shadow-xl"
                            : "border-gray-300 hover:border-green-400 hover:shadow-lg"
                        }`}
                        style={{ backgroundColor: color.color }}
                        onClick={() => setSelectedColor(index)}
                      >
                        {selectedColor === index && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full shadow-lg animate-pulse" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <EnquiryFormModal productId={product?.id} />
              </div>

              {/* State/City Pricing */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-700">
                    Pricing Details
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <select
                    className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                  >
                    <option value="">Select State*</option>
                    {product.pricing.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>

                  <select
                    className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState}
                  >
                    <option value="">Select City*</option>
                    {selectedState &&
                      product.pricing
                        .find((s) => s.name === selectedState)
                        ?.cities?.map((city, index) => (
                          <option key={index} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                  </select>
                </div>

                {/* Price Display */}
                <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-green-600">₹</span>
                    <span className="text-3xl font-bold text-gray-800">
                      {formatPrice(currentPrice)}
                    </span>
                    <span className="text-lg text-gray-600">/-</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ex-showroom Price{" "}
                    <span className="font-semibold text-green-600">
                      {getCurrentLocation()}
                    </span>
                  </p>
                  {selectedState && selectedCity && (
                    <div className="mt-2 text-xs text-green-600 font-medium">
                      ✓ Price updated for selected location
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>

        <EMICalculator
          product={product}
          selectedState={selectedState}
          selectedCity={selectedCity}
          onInterestRateChange={handleInterestRateChange}
        />

        <div className="section bg-gray-100">
          {product?.video_link && (
            <div className="max-w-5xl relative rounded-4xl shadow-2xl overflow-hidden mx-auto group">
              {product?.gallery?.length > 0 && (
                <Image
                  height={1000}
                  width={1000}
                  src={`https://hjv2pvkv-3001.inc1.devtunnels.ms/${product.gallery[1]}`}
                  alt="Gallery Preview"
                  className="w-full h-[400px] rounded-xl object-cover"
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={openModal} // ✅ open modal on click
              >
                <div className="bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300">
                  <Play className="w-6 h-6 text-slate-800 fill-current" />
                </div>
              </motion.div>

              {/* ✅ Video Modal with state */}
              <VideoModal
                selectedVideo={product.video_link} // just the link
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
