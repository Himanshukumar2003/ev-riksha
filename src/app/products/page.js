"use client";

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
import { useData } from "@/components/DataContext";

export default function Products() {
  const { data: vehicles = [], loading } = useData();

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Get bigger savings on our Electric, Diesel and CNG vehicles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our full range of available vehicles
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {vehicles.map((product, index) => (
            <Card
              key={product.id}
              className="group rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm pt-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={`https://macapi.brandingwaale.com/${product.carousel[0].replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800 shadow-lg backdrop-blur-sm border-0 font-semibold">
                  {product.category}
                </Badge>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2 mb-4">
                    {product.colors?.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold group-hover:text-green-500 text-gray-900 transition-colors duration-300">
                      {product.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wide">
                      {product.brand || ""}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </CardDescription>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <p className="text-xs text-gray-700 uppercase tracking-wide mb-1">
                      Starting from
                    </p>
                    <p className="text-xl text-gray-700 font-bold">
                      {formatPrice(product.starting_from || 0)}
                    </p>
                  </div>
                  <Link href={`/products/${product.slug}`} className="btn">
                    View Details
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Products */}
        {vehicles.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No vehicles available
            </h3>
            <p className="text-gray-500 text-lg max-w-md mx-auto">
              Currently, there are no vehicles listed. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
