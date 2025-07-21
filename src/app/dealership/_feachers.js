"use client";

import {
  Flag,
  PackagePlus,
  ClipboardCheck,
  Star,
  PlusCircle,
  ShieldCheck,
  BadgeDollarSign as BadgeDollar,
  Handshake,
  GraduationCap,
  Wrench,
  Megaphone,
  MessageSquare,
  Database,
  LineChart,
  Headphones,
  RefreshCw,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function FeaturesSection() {
  const reasonsFeatures = [
    { icon: Flag, description: "Designed in India, Made in India" },
    {
      icon: PackagePlus,
      description: "Multiple products, One New Launch every 3 months",
    },
    { icon: ClipboardCheck, description: "Tested for 3 years" },
    { icon: Star, description: "Best in Class Features" },
    { icon: PlusCircle, description: "30 Plus accessories - Customizable" },
    { icon: ShieldCheck, description: "Highest Warranty 3 years" },
    { icon: BadgeDollar, description: "Attractive Consumer Schemes" },
    {
      icon: Handshake,
      description:
        "Transparent Relationship Dedicated Sales Manager & Regular Dialogue with key Management Personnel",
    },
  ];

  const investmentFeatures = [
    {
      icon: GraduationCap,
      description: "Training of Sales Team for better product understanding",
    },
    { icon: Wrench, description: "Support of Service Team" },
    {
      icon: Megaphone,
      description: "Initial on-ground amplification and in-store collaterals",
    },
    {
      icon: MessageSquare,
      description: "Social media mentions and posts from time to time",
    },
    { icon: Database, description: "CRM Platform" },
    { icon: LineChart, description: "Lead Generation" },
    { icon: Headphones, description: "Customer Care" },
    { icon: RefreshCw, description: "ERP" },
  ];

  return (
    <div className="w-full">
      {/* Section 1: 8 Reasons! */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 tracking-tight">
            8 Reasons!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasonsFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 bg-white/10 border-none rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-0 flex flex-col items-center space-y-4">
                  <feature.icon className="w-16 h-16 text-white" />
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Your Investment Plan */}
      <section className="bg-emerald-700 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
            Your Investment Plan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentFeatures.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-white justify-center text-center p-6 bg-white/10 border-none rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-0 flex flex-col items-center space-y-4">
                  <feature.icon className="w-16 h-16 " />
                  <p className="">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
