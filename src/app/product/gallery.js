"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ product }) {
  const { gallery } = product;
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % gallery.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? gallery.images.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <>
      <div className="section bg-gray-100">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
            <div className="mb-5">
              <h1 className="text-4xl font-bold mb-6">
                {gallery.header.title}
              </h1>
              <p className="text-xl text-gray-700">{gallery.header.subtitle}</p>
            </div>

            <div>
              <p className="text-gray-500 max-w-3xl leading-relaxed">
                {gallery.header.description}
              </p>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {gallery.images.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid block cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg?height=400&width=300"}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            <Image
              src={
                gallery.images[selectedImage].src ||
                "/placeholder.svg?height=600&width=800"
              }
              alt={gallery.images[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-sm">{gallery.images[selectedImage].alt}</p>
              <p className="text-xs opacity-75">
                {selectedImage + 1} of {gallery.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
