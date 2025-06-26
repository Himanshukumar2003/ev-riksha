"use client";

import { useState } from "react";
import vehicleData from "@/data/vehicle-data.json"; // ✅ renamed to avoid conflict
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Battery,
  Shield,
  Gauge,
  Armchair,
  Ruler,
  Settings,
} from "lucide-react";

const iconMap = {
  Gauge: <Gauge />,
  Battery: <Battery />,
  Shield: <Shield />,
  Armchair: <Armchair />,
  Ruler: <Ruler />,
  Settings: <Settings />,
};

export default function VehicleSpecsTable() {
  const [activeTab, setActiveTab] = useState("performance");
  const { vehicleSpecs } = vehicleData.vehicleShowcase;

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="bg-gray-100 section">
      <div className="w-full max-w-6xl mx-auto">
        <Tabs
          defaultValue="performance"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-6 h-14 p-1 bg-green-200 rounded-xl">
            {Object.entries(vehicleSpecs).map(([key, data]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 data-[state=active]:bg-[var(--color-secondary)] data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                <div className="first:h-5 first:w-5">{iconMap[data.icon]}</div>
                <span className="hidden sm:inline font-medium">
                  {key === "drivetrain"
                    ? "Drive Train"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(vehicleSpecs).map(([key, data]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <Card className="border-0 shadow-md bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl text-black">
                    <div className="p-2 rounded-lg bg-[var(--color-secondary)] text-white">
                      {iconMap[data.icon]}
                    </div>
                    {key === "drivetrain"
                      ? "Drive Train"
                      : key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                    Specifications
                  </CardTitle>
                  <Separator className="bg-slate-300" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {data.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between py-4 px-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                      >
                        <span className="font-medium text-slate-700">
                          {spec.label}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
