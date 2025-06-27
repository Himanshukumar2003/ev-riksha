"use client";

import { useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";

// Fancybox import (make sure it's installed via `npm install @fancyapps/ui`)
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Gallery({ product }) {
  const { gallery } = product;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: true,
      });

      return () => {
        Fancybox.unbind("[data-fancybox='gallery']");
      };
    }
  }, []);

  return (
    <div className="section bg-gray-100">
      <Container maxWidth="xl">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-8">
          <div className="mb-5">
            <h1 className="text-4xl font-bold mb-6">{gallery.header.title}</h1>
            <p className="text-xl text-gray-700">{gallery.header.subtitle}</p>
          </div>

          <div>
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              {gallery.header.description}
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {gallery.images.map((image) => (
            <a
              key={image.id}
              href={image.src}
              data-fancybox="gallery"
              data-caption={image.alt}
              className="block break-inside-avoid cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg?height=400&width=300"}
                alt={image.alt}
                width={300}
                height={400}
                className="w-full h-auto rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
