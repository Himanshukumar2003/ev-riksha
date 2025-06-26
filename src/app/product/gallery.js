"use client";

import { useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import vehicleData from "@/data/vehicle-data.json";
export default function Gallery() {
  const { gallery } = vehicleData.vehicleShowcase;

  useEffect(() => {
    // Fancybox initialization would go here
    // Fancybox.bind("[data-fancybox='gallery']", {
    //   Thumbs: false,
    //   Toolbar: true,
    // });

    return () => {
      // Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <>
      <div className="section bg-gray-100">
        <Container maxWidth="xl">
          <div className="grid grid-cols-2 mb-10">
            <div className="mb-5">
              <h1 className="  mb-6">{gallery.header.title}</h1>
              <p>{gallery.header.subtitle}</p>
            </div>

            <div className="">
              <p className="text-gray-500 max-w-3xl leading-relaxed">
                {gallery.header.description}
              </p>
            </div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {gallery.images.map((image) => (
              <a
                key={image.id}
                data-fancybox="gallery"
                href={image.src}
                data-caption={image.alt}
                className="break-inside-avoid block"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
