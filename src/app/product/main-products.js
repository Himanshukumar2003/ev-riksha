"use client";
import { useState, useEffect } from "react";
import { Download, MessageCircle, MapPin, Palette } from "lucide-react";
import Container from "@mui/material/Container";
import React360Viewer from "react-360-view";

import vehicleData from "@/data/vehicle-data.json";
const MainProductViewer = () => {
  const { mainProduct } = vehicleData.vehicleShowcase;
  const [selectedColor, setSelectedColor] = useState(mainProduct.colors[0].id);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currentPrice, setCurrentPrice] = useState(185000);

  const [loanAmount, setLoanAmount] = useState(0);
  const [downPayment, setDownPayment] = useState(
    mainProduct.emiCalculator.defaultValues.downPayment
  );
  const [loanTenure, setLoanTenure] = useState(
    mainProduct.emiCalculator.defaultValues.loanTenure
  );
  const [interestRate, setInterestRate] = useState(
    mainProduct.emiCalculator.defaultValues.interestRate
  );
  const [emiAmount, setEmiAmount] = useState(0);

  const currentColorFilter =
    mainProduct.colors.find((c) => c.id === selectedColor)?.filter || "";

  // Update price when state and city change
  useEffect(() => {
    if (selectedState && selectedCity) {
      const state = mainProduct.pricing.states.find(
        (s) => s.id === selectedState
      );
      const city = state?.cities?.find((c) => c.id === selectedCity);

      if (state && city) {
        setCurrentPrice(state.basePrice + city.priceModifier);
      }
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
    const principal = currentPrice - downPayment;
    if (principal > 0) {
      setLoanAmount(principal);
      const emi = calculateEMI(principal, interestRate, loanTenure);
      setEmiAmount(emi);
    }
  }, [currentPrice, downPayment, interestRate, loanTenure]);

  const getCurrentLocation = () => {
    if (selectedState && selectedCity) {
      const state = mainProduct.pricing.states.find(
        (s) => s.id === selectedState
      );
      const city = state?.cities?.find((c) => c.id === selectedCity);
      return `${city?.name}, ${state?.name}`;
    }
    return "New Delhi";
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCity(""); // Reset city when state changes
  };

  return (
    <>
      <div className="section bg-gray-100">
        <div className="min-h-screen ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* 360 Viewer Placeholder */}
              <div className="relative">
                <div className=" ">
                  <div
                    className=" mx-auto transition-all "
                    // style={{
                    //   filter: currentColorFilter,
                    // }}
                  >
                    <React360Viewer
                      amount={8}
                      imagePath="/bajaj/"
                      fileName="{index}.png"
                      autoplay={false}
                      loop={true}
                      dragSpeed={100}
                      buttonClass="hidden"
                    />
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
              <div className="bg-white rounded-3xl shadow-md p-8 border border-white/20 backdrop-blur-sm  transition-all duration-300">
                {/* Header */}
                <div className="border-b border-gray-100 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[var(--color-primary-dark)] rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">
                        {mainProduct.brand.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 font-medium">
                        {mainProduct.brand}
                      </div>
                      <div className="font-bold text-xl text-gray-800">
                        {mainProduct.model}
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold leading-tight bg-gradient-to-r text-[var(--color-secondary)]  bg-clip-text ">
                    {mainProduct.type}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {mainProduct.description}
                  </p>
                </div>

                {/* Color Selection */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5 text-[var(--color-primary-dark)]" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Select Color
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3">
                    {mainProduct.colors.map((color) => (
                      <button
                        key={color.id}
                        className={`relative w-8 h-8 rounded-xl border-2 border-transparent transition-all duration-300 transform hover:scale-110 ${
                          selectedColor === color.id
                            ? "border-[var(--color-primary-dark)] ring-2 ring-green-200 scale-110 shadow-xl"
                            : "border-gray-300 hover:border-[var(--color-primary-light)] hover:shadow-lg"
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
                </div>

                {/* Pricing Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-[var(--color-primary-dark)]" />
                    <h3 className="text-lg font-semibold text-gray-700">
                      Pricing Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <select
                      className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-[  var(--color-secondary)] transition-all duration-300 bg-white shadow-sm"
                      value={selectedState}
                      onChange={(e) => handleStateChange(e.target.value)}
                    >
                      <option value="">Select State*</option>
                      {mainProduct.pricing.states.map((state) => (
                        <option key={state.id} value={state.id}>
                          {state.name}
                        </option>
                      ))}
                    </select>

                    <select
                      className="border-2 border-green-200 py-3 px-4 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-[  var(--color-secondary)] transition-all duration-300 bg-white shadow-sm"
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      disabled={!selectedState}
                    >
                      <option value="">Select City*</option>
                      {selectedState &&
                        mainProduct.pricing.states
                          .find((s) => s.id === selectedState)
                          ?.cities?.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                    </select>
                  </div>

                  <div className="bg-green-200 p-4 rounded-2xl border border-green-500">
                    <div className="flex items-baseline gap-2 mb-2 italic">
                      <span className="text-4xl font-bold text-[var(--color-secondary)]">
                        ₹
                      </span>
                      <span className="text-3xl font-bold text-gray-800 ">
                        {formatPrice(currentPrice)}
                      </span>
                      <span className="text-lg text-gray-600">/-</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ex-showroom Price{" "}
                      <span className="font-semibold text-[var(--color-primary-dark)]">
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
                <div className=" flex gap-2 items-center ">
                  <button className=" bg-gray-800  w-full flex gap-2 items-center justify-center hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                    <Download className="w-4 h-4" />
                    Download Brochure
                  </button>
                  <button className=" bg-gray-800  flex gap-2 w-full justify-center items-center  hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                    <MessageCircle className="w-4 h-4" />
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMI Calculator */}
      <div className="section">
        <Container maxWidth="xl">
          <div className="bg-white rounded-3xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              EMI Calculator
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 justify-center items-center">
              {/* Left Side - Inputs */}
              <div className="space-y-6">
                {/* Down Payment */}
                <div>
                  <label className="block text-sm font-medium  text-[var(--color-secondary)] mb-3">
                    Down Payment Amount
                  </label>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    ₹{formatPrice(downPayment)}
                  </div>
                  <input
                    type="range"
                    min={mainProduct.emiCalculator.ranges.downPayment.min}
                    max={currentPrice * 0.5}
                    step={mainProduct.emiCalculator.ranges.downPayment.step}
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      ₹
                      {formatPrice(
                        mainProduct.emiCalculator.ranges.downPayment.min
                      )}
                    </span>
                    <span>₹{formatPrice(currentPrice * 0.5)}</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-secondary)]  mb-3">
                    Loan Tenure (Months)
                  </label>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {loanTenure} months
                  </div>
                  <input
                    type="range"
                    min={mainProduct.emiCalculator.ranges.loanTenure.min}
                    max={mainProduct.emiCalculator.ranges.loanTenure.max}
                    step={mainProduct.emiCalculator.ranges.loanTenure.step}
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      {mainProduct.emiCalculator.ranges.loanTenure.min} months
                    </span>
                    <span>
                      {mainProduct.emiCalculator.ranges.loanTenure.max} months
                    </span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-secondary)] mb-3">
                    Interest Rate (Annual)
                  </label>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {interestRate}%
                  </div>
                  <input
                    type="range"
                    min={mainProduct.emiCalculator.ranges.interestRate.min}
                    max={mainProduct.emiCalculator.ranges.interestRate.max}
                    step={mainProduct.emiCalculator.ranges.interestRate.step}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 accent-[var(--color-secondary)] bg-green-100 rounded-lg appearance-none cursor-pointer slider-green"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      {mainProduct.emiCalculator.ranges.interestRate.min}%
                    </span>
                    <span>
                      {mainProduct.emiCalculator.ranges.interestRate.max}%
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300">
                  Calculate EMI
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="space-y-6 relative">
                {/* Pie Chart Representation */}
                <div className="flex items-center justify-center   absolute -top-15  right-0  ">
                  <div className="relative w-32 h-32 ">
                    <svg
                      className="w-32 h-32 transform -rotate-90 "
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="10"
                        strokeDasharray={`${
                          (downPayment / currentPrice) * 251.2
                        } 251.2`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[var(--color-secondary)]">
                        <div className="text-sm font-bold text-gray-600">
                          {((downPayment / currentPrice) * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs text-gray-500">Down</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Loan Summary */}
                <div className="bg-gray-50 rounded-t-2xl p-4  pt-10 m-0">
                  <h3 className="font-semibold text-gray-700 text-2xl border-b border-gray-200 pb-2">
                    Loan Summary
                  </h3>
                  <div className="pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">
                        Vehicle Price
                      </span>
                      <span className="font-semibold">
                        ₹{formatPrice(currentPrice)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">
                        Down Payment
                      </span>
                      <span className="font-semibold">
                        ₹{formatPrice(downPayment)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600 text-lg">Loan Amount</span>
                      <span className="font-semibold">
                        ₹{formatPrice(loanAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-300 to-green-300 rounded-b-2xl p-6 text-white">
                  <h3 className="font-semibold mb-4">Required Payments</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm opacity-90">Monthly EMI</div>
                      <div className="text-2xl font-bold">
                        ₹{formatPrice(emiAmount)}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Total Interest</div>
                      <div className="text-2xl font-bold">
                        ₹{formatPrice(emiAmount * loanTenure - loanAmount)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm opacity-90">
                      Total Amount Payable
                    </div>
                    <div className="text-xl font-bold">
                      ₹{formatPrice(emiAmount * loanTenure + downPayment)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainProductViewer;
