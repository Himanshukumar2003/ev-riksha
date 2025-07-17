"use client";
import { useState, useEffect } from "react";
import { Download, MessageCircle, MapPin, Palette } from "lucide-react";
import PaymentBreakdownChart from "./payment-breakdown-chart";
import React360Viewer from "react-360-view";
import StepsSection from "./features-cards";
import Container from "@mui/material/Container";
import Vedios from "./vido-section";
import { Data, FinancerData } from "../try/@guasiuasi";
import Image from "next/image";
// import { financerData, Data } from "./main-products";

export default function MainProductViewer({ product }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTenure, setLoanTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(10.5);
  const [emiAmount, setEmiAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [availableDealers, setAvailableDealers] = useState([]);

  // Initialize product data
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0].id);
      setDownPayment(product.emiCalculator.defaultValues.downPayment);
      setLoanTenure(product.emiCalculator.defaultValues.loanTenure);
      setInterestRate(product.emiCalculator.defaultValues.interestRate);

      // Set initial price
      if (product.pricing.states.length > 0) {
        setCurrentPrice(product.pricing.states[0].basePrice);
      }
    }
  }, [product]);

  // Update price when state and city change
  useEffect(() => {
    if (selectedState && selectedCity) {
      const matched = [];

      for (const dealer in Data) {
        if (selectedState in Data[dealer]) {
          if (Data[dealer][selectedState].includes(selectedCity)) {
            matched.push({
              id: dealer,
              name: dealer,
              interestRate: FinancerData[dealer].interestRate,
              color: FinancerData[dealer].color,
              logo: FinancerData[dealer].logo,
            });
          }
        }
      }

      setAvailableDealers(matched);
    } else {
      setAvailableDealers([]);
    }
  }, [selectedState, selectedCity]);

  const formatPrice = (price) => {
    return price.toLocaleString("en-IN");
  };

  const calculateEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / (12 * 100);
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
  };

  // Calculate EMI when price or loan parameters change
  useEffect(() => {
    if (currentPrice > 0) {
      const principal = currentPrice - downPayment;
      if (principal > 0) {
        setLoanAmount(principal);
        const emi = calculateEMI(principal, interestRate, loanTenure);
        setEmiAmount(emi);
        setTotalInterest(emi * loanTenure - principal);
      }
    }
  }, [currentPrice, downPayment, interestRate, loanTenure]);

  const getCurrentLocation = () => {
    if (selectedState && selectedCity && product) {
      const state = product.pricing.states.find((s) => s.id === selectedState);
      const city = state?.cities?.find((c) => c.id === selectedCity);
      return `${city?.name}, ${state?.name}`;
    }
    return "Select Location";
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCity(""); // Reset city when state changes
  };

  // Auto-rotate images
  useEffect(() => {
    if (product) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % product.viewer360.imageCount
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="section">
        <div className="min-h-screen">
          <Container maxWidth="xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className=" ">
                  <div
                    className=" mx-auto transition-all "
                    // style={{
                    //   filter: currentColorFilter,
                    // }}
                  >
                    <div className="no-zoom" style={{ touchAction: "none" }}>
                      <React360Viewer
                        amount={8}
                        imagePath="/bajaj/"
                        fileName={`index.png`}
                        autoplay={false}
                        loop={true}
                        dragSpeed={100}
                        buttonClass="hidden"
                      />
                    </div>
                  </div>

                  {/* 360 Indicator */}
                  <div className="flex justify-center mt-6">
                    <div className=" text-[var(--color-secondary)] px-4 py-2 rounded-full shadow-lg">
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
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-3xl shadow-md p-8 border border-white/20 backdrop-blur-sm transition-all duration-300">
                {/* Header */}
                <div className="border-b border-gray-100 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">
                        {product.brand.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">
                        {product.brand}
                      </div>
                      <div className="font-bold text-xl text-gray-800">
                        {product.model}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Color Selection */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Select Color
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.id}
                        className={`relative w-8 h-8 rounded-xl border-2 border-transparent transition-all duration-300 transform hover:scale-110 ${
                          selectedColor === color.id
                            ? "border-green-600 ring-2 ring-green-200 scale-110 shadow-xl"
                            : "border-gray-300 hover:border-green-400 hover:shadow-lg"
                        }`}
                        style={{ backgroundColor: color.color }}
                        onClick={() => setSelectedColor(color.id)}
                      >
                        {selectedColor === color.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full shadow-lg animate-pulse" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Selected:{" "}
                    {product.colors.find((c) => c.id === selectedColor)?.name}
                  </p>
                </div>

                {/* Pricing Section */}
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
                      {product.pricing.states.map((state) => (
                        <option key={state.id} value={state.id}>
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
                        product.pricing.states
                          .find((s) => s.id === selectedState)
                          ?.cities?.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                    </select>
                  </div>

                  <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-green-600">
                        ₹
                      </span>
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

                {/* Action Buttons */}
                <div className="flex gap-2 items-center">
                  <button className="bg-gray-800 w-full flex gap-2 items-center justify-center hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </button>
                  <button className="bg-gray-800 flex gap-2 w-full justify-center items-center hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Vedios></Vedios>

      <StepsSection product={product} />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              EMI Calculator
            </h2>
            {/* Dealer Location Selector */}
            <div className="bg-white rounded-2xl shadow-md p-6 border mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Select Your Location
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {/* State Dropdown */}
                <select
                  className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedCity("");
                  }}
                >
                  <option value="">Select State*</option>
                  {Object.keys(
                    [
                      ...new Set(
                        Object.values(Data).flatMap((d) => Object.keys(d))
                      ),
                    ].reduce((acc, cur) => {
                      acc[cur] = true;
                      return acc;
                    }, {})
                  ).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                {/* City Dropdown */}
                <select
                  className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 bg-white shadow-sm"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedState}
                >
                  <option value="">Select City*</option>
                  {selectedState &&
                    Array.from(
                      new Set(
                        Object.values(Data).flatMap(
                          (dealers) => dealers[selectedState] || []
                        )
                      )
                    ).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 justify-center items-center overflow-visible">
              {/* Left Side - Inputs */}
              <div className="space-y-6">
                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-3">
                    Down Payment Amount
                  </label>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    ₹{formatPrice(downPayment)}
                  </div>
                  <input
                    type="range"
                    min={product.emiCalculator.ranges.downPayment.min}
                    max={currentPrice * 0.5}
                    step={product.emiCalculator.ranges.downPayment.step}
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      ₹
                      {formatPrice(
                        product.emiCalculator.ranges.downPayment.min
                      )}
                    </span>
                    <span>₹{formatPrice(currentPrice * 0.5)}</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-3">
                    Loan Tenure (Months)
                  </label>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {loanTenure} months
                  </div>
                  <input
                    type="range"
                    min={product.emiCalculator.ranges.loanTenure.min}
                    max={product.emiCalculator.ranges.loanTenure.max}
                    step={product.emiCalculator.ranges.loanTenure.step}
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      {product.emiCalculator.ranges.loanTenure.min} months
                    </span>
                    <span>
                      {product.emiCalculator.ranges.loanTenure.max} months
                    </span>
                  </div>
                </div>

                {/* Financing Companies */}
                <div>
                  <label className="block text-sm font-medium text-green-600 mb-3">
                    Select Financing Partner
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {availableDealers.map((company) => (
                      <button
                        key={company.id}
                        onClick={() => setInterestRate(company.interestRate)}
                        className={` border-2 transition-all rounded-[20px] bg-gray-100 p-2 overflow-hidden duration-300 hover:scale-105 ${
                          Math.abs(interestRate - company.interestRate) < 0.1
                            ? "border-green-500 bg-green-50 shadow-lg ring-2 ring-green-200"
                            : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
                        }`}
                      >
                        <div className="text-center">
                          <Image
                            width={200}
                            height={200}
                            src={company.logo}
                            alt={company.name}
                            className=" max-h-[100px] w-full"
                          />

                          {/* <div className="text-sm font-semibold text-gray-800 mb-1">
                            {company.name}
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            {company.interestRate}%
                          </div> */}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className=" relative    ">
                {/* Loan Summary */}
                <div className="bg-gray-50 rounded-t-2xl p-6">
                  <h3 className="font-semibold text-gray-700 text-xl mb-4">
                    Loan Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle Price</span>
                      <span className="font-semibold">
                        ₹{formatPrice(currentPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Down Payment</span>
                      <span className="font-semibold">
                        ₹{formatPrice(downPayment)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loan Amount</span>
                      <span className="font-semibold">
                        ₹{formatPrice(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate</span>
                      <span className="font-semibold">
                        {interestRate}% p.a.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-b-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4">Monthly Payment</h3>
                  <div className="mt-6 pb-4 border-b border-green-400">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm opacity-90">Total Interest</span>
                      <span className="font-bold">
                        ₹{formatPrice(totalInterest)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm opacity-90">
                        Total Amount Payable
                      </span>
                      <span className="font-bold">
                        ₹{formatPrice(emiAmount * loanTenure + downPayment)}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-4xl font-bold mb-2">
                      ₹{formatPrice(emiAmount)}
                    </div>
                    <div className="text-sm opacity-90">
                      per month for {loanTenure} months
                    </div>
                  </div>
                </div>
                <PaymentBreakdownChart
                  loanAmount={loanAmount}
                  totalInterest={totalInterest}
                  downPayment={downPayment}
                  formatPrice={formatPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
