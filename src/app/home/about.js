import Image from "next/image";
import { Truck, Shield, Clock, Users, MapPin, Headphones } from "lucide-react";
import Container from "@mui/material/Container";
export default function ContingentSection() {
  const leftServices = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "EV Rickshaw Delivery",
      description:
        "Efficient and eco-friendly delivery using electric rickshaws across urban and rural areas.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Vehicle Insurance",
      description:
        "Comprehensive insurance coverage for your EV rickshaws during transport and usage.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Dispatch",
      description:
        "Fast and reliable dispatch of EV rickshaws with strict adherence to delivery timelines.",
    },
  ];

  const rightServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled Team",
      description:
        "A team of trained professionals dedicated to handling EV rickshaw logistics and support.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Live Tracking",
      description:
        "GPS-enabled tracking to monitor your EV rickshaw location in real-time.",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any inquiries or issues related to EV rickshaw services.",
    },
  ];

  return (
    <section className="section">
      <Container maxWidth="lg">
        {/* Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className=" font-bold mb-4">OUR CONTINGENT</h2>
            <p>
              “CARGO EXPERT” has been serving since 2015, offering a wide range
              of logistics solutions for EV rickshaw transportation and
              delivery.
            </p>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed">
              With years of experience, “CARGO EXPERT” is known for its timely
              and secure delivery of EV rickshaws across India and neighboring
              countries. Our expert team understands every detail of logistics
              and ensures a smooth and efficient experience for our customers.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center     ">
          {/* Left Services */}
          <div className="space-y-8 lg:-mr-[80px] z-10">
            {leftServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:shadow-2xl"
                style={{
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                }}
              >
                <div className="flex items-start space-x-4 relative">
                  <div className="w-12 h-12 absolute -top-12 -left-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-white group-hover:bg-[var(--color-primary-light)] transition duration-300">
                    {service.icon}
                  </div>
                  <div className="pl-8">
                    <h5 className="font-semibold  mb-2 group-hover:text-white">
                      {service.title}
                    </h5>
                    <p className="text-gray-400 text-sm group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src="/img/heo-img.jpg"
                alt="EV Rickshaw"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Services */}
          <div className="space-y-8 lg:-ml-[80px]">
            {rightServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 transition-all duration-300 hover:bg-[var(--color-secondary)] hover:shadow-2xl"
                style={{
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                }}
              >
                <div className="flex items-start space-x-4 relative">
                  <div className="w-12 h-12 absolute -top-12 -right-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-white group-hover:bg-[var(--color-primary-light)] transition duration-300">
                    {service.icon}
                  </div>
                  <div className="pr-8">
                    <h4 className="font-semibold  mb-2 group-hover:text-white">
                      {service.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
