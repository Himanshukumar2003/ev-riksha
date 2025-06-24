import { ArrowUpRight, Building2, Home, Monitor, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MdArrowOutward, MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "Modern Living Area",
    description: "Iterative methods of developing the corporate strategy.",
  },
  {
    id: 2,
    icon: Home,
    title: "Interior Design",
    description: "We create the complete set of project information.",
  },
  {
    id: 3,
    icon: Monitor,
    title: "3D Design Layouts",
    description: "Iterative methods of developing the corporate strategy.",
  },
  {
    id: 4,
    icon: Hammer,
    title: "Remodel Spaces",
    description: "We create the complete set of project information.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="  container mx-auto">
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
      </div>
    </section>
  );
}
