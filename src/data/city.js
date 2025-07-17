"use client";

import { useEffect, useState } from "react";

export default function VehicleList({ params }) {
  const { slug } = params;

  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch(
          `https://hjv2pvkv-3001.inc1.devtunnels.ms/v1/vehicles/${slug}`
        );
        const data = await response.json();

        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [slug]);

  console.log(vehicles);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Vehicles</h2>
      <ul className="list-disc pl-6">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => (
            <li key={index} className="mb-2">
              {vehicle.name || JSON.stringify(vehicle)}
            </li>
          ))
        ) : (
          <p>No vehicles found for slug: {slug}</p>
        )}
      </ul>
    </div>
  );
}
