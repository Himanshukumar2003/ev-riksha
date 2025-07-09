"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/vehicle-data";

const categories = [
  {
    id: "passenger",
    name: "Passenger",
    icon: "/img/treo-zor.png",
    description: "Eco-friendly electric vehicles",
  },
  {
    id: "cargo",
    name: "Cargo",
    icon: "/img/treo-zor.png",
    description: "Petrol-powered vehicles",
  },
  {
    id: "garbage",
    name: "Garbage",
    icon: "/img/treo-zor.png",
    description: "Diesel engine vehicles",
  },
];

export default function VehicleCategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("passenger");

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === selectedCategory.toLowerCase()
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Get bigger savings on our Electric, Diesel and CNG vehicles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your preferred vehicle category and discover amazing deals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative flex flex-col items-center p-8 min-w-[140px] rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-black shadow-2xl ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "bg-gray-100 "
              }`}
            >
              <div className="relative mb-4">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-bold  text-lg mb-2">{category.name}</span>
              <span className="text-sm text-center   opacity-80 leading-tight">
                {category.description}
              </span>
              {selectedCategory === category.id && (
                <div className="absolute -bottom-2  left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="group rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm pt-0"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={
                    product.gallery?.images[0]?.src ||
                    "/placeholder.svg?height=200&width=300"
                  }
                  alt={
                    product.gallery?.images[0]?.alt || `${product.model} image`
                  }
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm border-0 font-semibold">
                  {product.type}
                </Badge>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2 mb-4">
                    {product.colors?.map((color) => (
                      <div
                        key={color.id}
                        title={color.name}
                        className="w-6 h-6 rounded-full cursor-pointer border-2 border-gray-300"
                        style={{
                          backgroundColor: color.color,
                          filter: color.filter || "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {product.model}
                    </CardTitle>
                    <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">
                      {product.brand}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </CardDescription>

                <div className="flex justify-between items-end g-4">
                  <div>
                    <p className="text-xs text-gray-700 uppercase tracking-wide mb-1">
                      Starting from
                    </p>
                    <p className="text-xl text-gray-700 font-bold">
                      {formatPrice(
                        product.pricing?.states?.[0]?.basePrice || 0
                      )}
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="text-center bg-black hover:bg-gray-800 text-white px-3 py-2 text-base font-medium rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              We couldn’t find any vehicles in the{" "}
              {selectedCategoryData?.name.toLowerCase()} category. Try selecting
              a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
