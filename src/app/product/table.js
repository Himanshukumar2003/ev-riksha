"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Battery,
  Shield,
  Gauge,
  Armchair,
  Ruler,
  Settings,
} from "lucide-react";
import Container from "@mui/material/Container";
const iconMap = {
  Gauge: <Gauge />,
  Battery: <Battery />,
  Shield: <Shield />,
  Armchair: <Armchair />,
  Ruler: <Ruler />,
  Settings: <Settings />,
};

export default function VehicleSpecsTable({ product }) {
  const [activeTab, setActiveTab] = useState("performance");
  const { vehicleSpecs } = product;

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className=" section bg-gray-100">
      <Container maxWidth="xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed specifications and features of the {product.brand}{" "}
            {product.model}
          </p>
        </div>

        <Tabs
          defaultValue="performance"
          className="w-full"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-6 h-14 p-1 bg-green-100 rounded-xl">
            {Object.entries(vehicleSpecs).map(([key, data]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg transition-all duration-300"
              >
                <div className="h-5 w-5">{iconMap[data.icon]}</div>
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
                    <div className="p-2 rounded-lg bg-green-600 text-white">
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
                        className={`group flex items-center justify-between py-4 px-5 rounded-xl border transition-all duration-300 ${
                          spec.highlight
                            ? "bg-green-50 border-green-200 hover:border-green-300 hover:shadow-lg"
                            : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
                        }`}
                      >
                        <span className="font-medium text-slate-700">
                          {spec.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">
                            {spec.value}
                          </span>
                          {spec.badge && (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-700"
                            >
                              {spec.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}
