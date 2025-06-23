"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Battery,
  Shield,
  Zap,
  Gauge,
  Armchair,
  Ruler,
  Settings,
  CheckCircle,
  Clock,
  Droplets,
  Star,
  Award,
  Wifi,
} from "lucide-react";

const vehicleData = {
  performance: {
    icon: <Gauge />,
    specs: [
      { label: "Top Speed", value: "70 km/h" },
      { label: "Acceleration", value: "4.2s" },
      { label: "Motor Power", value: "3.5 kW", badge: "High Performance" },
      { label: "Motor Type", value: "BLDC Hub Motor" },
      { label: "Range (IDC)", value: "125 km", highlight: true },
      { label: "Range (Real World)", value: "100-110 km" },
      { label: "Power Mode", value: "Eco, Normal, Sport", badge: "3 Modes" },
    ],
  },
  battery: {
    icon: <Battery />,
    specs: [
      { label: "Battery Capacity", value: "12.1 kWh" },
      { label: "Charger", value: "On Board Charger", badge: "Built-in" },
      {
        label: "Charging Time",
        value: "5 hrs 30 mins < 4 hrs (80%)",
        highlight: true,
      },
      { label: "Water Resistance", value: "IP67", badge: "Waterproof" },
      { label: "Battery Type", value: "Lithium-ion", badge: "Advanced" },
      { label: "Warranty", value: "3 Years" },
      { label: "Fast Charging", value: "Available", badge: "Quick Charge" },
    ],
  },
  safety: {
    icon: <Shield />,
    specs: [
      { label: "Brakes", value: "Front: Drum Rear: Drum" },
      { label: "Regenerative Braking", value: "Yes", badge: "Energy Recovery" },
      {
        label: "Tyres",
        value: "Radial Tubeless - 120/80 R12",
        badge: "Premium",
      },
      {
        label: "Suspension",
        value:
          "Front: Telescopic Fork Type, Rear: Swing Arm with Helical Coil Spring",
      },
      { label: "Lighting", value: "LED Front & Rear Lighting", badge: "LED" },
      {
        label: "Anti-theft",
        value: "Remote Lock/Unlock",
        badge: "Smart Security",
      },
      {
        label: "Side Stand Sensor",
        value: "Available",
        badge: "Safety Feature",
      },
    ],
  },
  comfort: {
    icon: <Armchair />,
    specs: [
      {
        label: "Seat Type",
        value: "Single Seat with Backrest",
        badge: "Ergonomic",
      },
      {
        label: "Storage",
        value: "Under Seat Storage + Front Compartment",
        badge: "Spacious",
      },
      {
        label: "Display",
        value: "Digital LCD Display",
        badge: "Smart Display",
      },
      {
        label: "Connectivity",
        value: "Bluetooth + Mobile App",
        badge: "Connected",
      },
      { label: "USB Charging", value: "Available", badge: "Convenient" },
      { label: "Riding Modes", value: "Eco, Normal, Sport", badge: "3 Modes" },
      { label: "Keyless Start", value: "Smart Key", badge: "Premium" },
    ],
  },
  dimensions: {
    icon: <Ruler />,
    specs: [
      { label: "Length", value: "1,859 mm" },
      { label: "Width", value: "684 mm" },
      { label: "Height", value: "1,115 mm" },
      { label: "Wheelbase", value: "1,285 mm", highlight: true },
      { label: "Ground Clearance", value: "165 mm", badge: "High Clearance" },
      { label: "Kerb Weight", value: "99 kg", badge: "Lightweight" },
      { label: "Load Capacity", value: "150 kg", badge: "Heavy Duty" },
    ],
  },
  drivetrain: {
    icon: <Settings />,
    specs: [
      { label: "Drive Type", value: "Rear Wheel Drive", badge: "RWD" },
      {
        label: "Transmission",
        value: "Automatic (Single Speed)",
        badge: "Smooth",
      },
      { label: "Motor Position", value: "Rear Hub Mounted" },
      { label: "Controller", value: "BLDC Controller", badge: "Advanced" },
      { label: "Throttle", value: "Twist Grip Throttle" },
      { label: "Reverse Mode", value: "Available", badge: "Utility" },
      { label: "Cruise Control", value: "Available", badge: "Comfort Feature" },
    ],
  },
};

export default function VehicleSpecsTable() {
  const [activeTab, setActiveTab] = useState("performance");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="w-full max-w-6xl mx-auto ">
      <Tabs
        defaultValue="performance"
        className="w-full"
        onValueChange={handleTabChange}
      >
        <TabsList className="grid w-full grid-cols-6 h-14 p-1 bg-slate-100 rounded-xl">
          {Object.entries(vehicleData).map(([key, data]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="flex items-center gap-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <div className="first:h-5 first:w-5 ">{data.icon}</div>
              <span className="hidden sm:inline font-medium">
                {key === "drivetrain"
                  ? "Drive Train"
                  : key.charAt(0).toUpperCase() + key.slice(1)}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(vehicleData).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-8">
            <Card className="border-0 shadow-md bg-white">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-black">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    {data.icon}
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
  );
}
