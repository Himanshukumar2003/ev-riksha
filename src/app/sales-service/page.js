"use client";

import Link from "next/link";
import {
  Phone,
  LogIn,
  Wrench,
  Video,
  FileText,
  CalendarCheck,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SalesService() {
  const portalContent = {
    title: "Mac Care – After Sales Service Portal",
    description:
      "Your dedicated hub for all Mac Auto after-sales services, ensuring your vehicle runs smoothly and efficiently.",
    sections: [
      {
        id: "login",
        title: "Customer Login",
        description:
          "Access your vehicle dashboard, service history, AMC details & raise service tickets.",
        details: "Secure portal for registered Mac Auto customers.",
        actionText: "Login Now",
        actionLink: "#",
        icon: LogIn,
      },
      {
        id: "helpline",
        title: "QR Code & Helpline Number",
        description:
          "Scan the QR code on your vehicle for instant service access.",
        details:
          "24x7 Helpline: +91-XXXXXXXXXX. Call us for emergency support or roadside assistance.",
        actionText: "Call Now",
        actionLink: "tel:+91-XXXXXXXXXX",
        icon: Phone,
      },
      {
        id: "parts",
        title: "Spare Parts Option",
        description:
          "Explore our range of genuine Mac Auto spare parts for all models:",
        details: [
          "Batteries",
          "Controllers",
          "Tyres",
          "Brake sets",
          "Chargers & more",
        ],
        actionText: "Order Now",
        actionLink: "#",
        icon: Wrench,
      },
      {
        id: "videos",
        title: "Troubleshooting Video",
        description:
          "Facing an issue? Get help through our easy step-by-step video guides.",
        details: [
          "How to reset your controller",
          "Battery charging tips",
          "Fuse and wiring checks",
          "Safety checks before daily use",
        ],
        actionText: "Watch Videos",
        actionLink: "#",
        icon: Video,
      },
      {
        id: "matrix",
        title: "Service Matrix",
        description:
          "Know what service your vehicle needs – and when! View the complete service lifecycle with our Mac Care Service Matrix:",
        details: [
          "First free check-up",
          "Preventive maintenance",
          "Part replacement intervals",
          "Warranty-based repairs",
        ],
        actionText: "Download Service Matrix PDF",
        actionLink: "#",
        icon: FileText,
      },
      {
        id: "amc",
        title: "AMC Plan",
        description: "Keep your vehicle running worry-free with our AMC Plans.",
        coverage: [
          "Periodic servicing",
          "Priority support",
          "Spare parts discounts",
          "Extended vehicle health checks",
        ],
        plans: ["6 Months", "1 Year", "2 Years"],
        actionText: "View Plans",
        actionLink: "#",
        icon: CalendarCheck,
      },
    ],
  };

  return (
    <div
      className="container mx-auto px-4 py-8 md:py-12"
      style={{
        "--primary": "hsl(142.1, 76.2%, 36.3%)",
        "--primary-foreground": "hsl(355.7, 100%, 97.3%)",
        "--muted-foreground": "hsl(215.4, 16.3%, 46.9%)",
      }}
    >
      <div className="space-y-6 text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[color:var(--primary)]">
          {portalContent.title}
        </h1>
        <p className="text-lg text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
          {portalContent.description}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Login Section */}
        <Card className="lg:col-span-3 bg-[color:var(--primary)] rounded-[20px]  text-[color:var(--primary-foreground)] border-[color:var(--primary)]">
          <CardHeader className="text-center">
            <LogIn className="h-10 w-10 mx-auto mb-2" />
            <CardTitle className="text-3xl">
              {portalContent.sections[0].title}
            </CardTitle>
            <CardDescription className="text-[color:var(--primary-foreground)]/80">
              {portalContent.sections[0].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-[color:var(--primary-foreground)]/90 mb-4">
              {portalContent.sections[0].details}
            </p>
            <Link
              href={portalContent.sections[0].actionLink}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-[color:var(--primary-foreground)] text-[color:var(--primary)] hover:bg-[color:var(--primary-foreground)]/90"
            >
              {portalContent.sections[0].actionText}
            </Link>
          </CardContent>
        </Card>

        {/* Sections 2–6 */}
        {portalContent.sections.slice(1).map((section) => (
          <Card
            key={section.id}
            className="flex flex-col rounded-[20px] justify-between border-[color:var(--primary)]/20"
          >
            <CardHeader>
              <section.icon className="h-8 w-8 mb-2 text-[color:var(--primary)]" />
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>

              {/* Render different types of details */}
              {Array.isArray(section.details) && (
                <ul className="mt-4 list-disc list-inside space-y-1 text-gray-700 text-sm">
                  {section.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {typeof section.details === "string" && (
                <p className="mt-2 text-sm text-gray-600">{section.details}</p>
              )}

              {section.coverage && (
                <>
                  <h4 className="mt-4 text-sm font-medium text-gray-700">
                    Coverage Includes:
                  </h4>
                  <ul className="mt-1 space-y-1 text-gray-700 text-sm">
                    {section.coverage.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 mt-1 text-green-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {section.plans && (
                <>
                  <h4 className="mt-4 text-sm font-medium text-gray-700">
                    Plans available for:
                  </h4>
                  <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                    {section.plans.map((plan, i) => (
                      <li key={i}>{plan}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardHeader>

            <CardFooter>
              <Link
                href={section.actionLink}
                className="btn w-full  text-center"
              >
                {section.actionText}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
