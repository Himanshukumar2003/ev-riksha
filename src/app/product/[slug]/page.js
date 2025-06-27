"use client";

import { useState, useEffect } from "react";
import vehicleData from "@/data/vehicle-data.json";
import StepsSection from "../feachers-cards";
import VehicleSpecsTable from "../table";
import Gallery from "../gallery";
import BasicFAQ from "../faq-section";
import MainProductViewer from "../main-products";

export default function ProductPage({ params }) {
  const { slug } = params;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const product = vehicleData.vehicleShowcase.products.find(
      (val) => val.slug === slug
    );

    if (product) {
      setSelectedProduct(product);
    } else {
      setError("Product not found");
    }
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The requested product could not be found.
          </p>
        </div>
      </div>
    );
  }

  if (!selectedProduct) {
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
      <MainProductViewer productSlug={slug} />

      <VehicleSpecsTable product={selectedProduct} />

      <Gallery product={selectedProduct} />

      <div className="section">
        <BasicFAQ product={selectedProduct} />
      </div>
    </>
  );
}
