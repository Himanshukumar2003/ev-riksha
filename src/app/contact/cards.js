import { ArrowUpRight, Building2, Home, Monitor, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowOutward } from "react-icons/md";
import { MapPin, PhoneCall, Wrench, Mail } from "lucide-react";
import Container from "@mui/material/Container";
const services = [
  {
    id: 1,
    icon: MapPin,
    title: "Head Office Address",
    description:
      "121A, 121B Gurukul Indraprastha Industrial. Green Valley Faridabad, Haryana -121010",
  },
  {
    id: 2,
    icon: PhoneCall,
    title: "Sales (Call Us 24x7)",
    description: "8090629062",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Service Support",
    description: "service@macauto.in",
  },
  {
    id: 4,
    icon: Mail,
    title: "Mail Us",
    description: "info@macauto.in",
  },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className=" relative cards  shadow-none
    border-0 bg-gray-100 rounded-[2rem] group transition-transform duration-500   hover:-translate-y-2 "
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="flex   items-center gap-4   ">
                      <div className="w-15 h-15  bg-white flex  items-center rounded-full justify-center transition-all duration-300 group-hover:bg-[var(--color-secondary)]">
                        <IconComponent className="w-10 h-10 text-[var(--color-secondary)] group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-600  leading-tight transition-all duration-300 ">
                        {service.title}
                      </h3>
                    </div>
                    <div className="relative h-[2px] bg-gray-200 overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-0 bg-[var(--color-secondary)] transition-all duration-500 group-hover:w-full"></div>
                    </div>{" "}
                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {/* Arrow */}
                    <Link
                      href=""
                      className="h-[50px] w-[50px] z-12 bg-[var(--color-secondary)] rounded-full flex justify-center items-center absolute bottom-0 right-0"
                    >
                      <MdOutlineArrowOutward className="text-white w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
