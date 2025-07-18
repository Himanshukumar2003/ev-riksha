"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VehicleSpecsTable({ product }) {
  const specifications = product?.specifications || [];
  const [activeTab, setActiveTab] = useState(specifications[0]?.tab_name || "");

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="section bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Specifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Detailed specifications and features of the {product?.brand ?? ""}{" "}
            {product?.model ?? ""}
          </p>
        </div>

        {specifications.length > 0 ? (
          <Tabs
            value={activeTab}
            className="w-full"
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1 bg-green-100 rounded-xl mb-4">
              {specifications.map((spec, index) => (
                <TabsTrigger
                  key={index}
                  value={spec.tab_name}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-lg px-2 py-2 transition-all duration-300"
                >
                  {spec.tab_name}
                </TabsTrigger>
              ))}
            </TabsList>

            {specifications.map((spec, index) => (
              <TabsContent key={index} value={spec.tab_name}>
                <Card className="border-0 shadow-md bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-black">
                      {spec.tab_name}
                    </CardTitle>
                    <Separator className="bg-slate-300 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {spec.specs && spec.specs.length > 0 ? (
                        spec.specs.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between py-4 px-5 rounded-xl border bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
                          >
                            <span className="font-medium text-slate-700">
                              {item.label}
                            </span>
                            <span className="font-semibold text-slate-900">
                              {item.value}
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 py-4">
                          No specifications available.
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center text-gray-500 py-8">
            No technical specifications available.
          </div>
        )}
      </div>
    </div>
  );
}
