import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  Users,
  Lightbulb,
  Handshake,
  Rocket,
  Award,
  DollarSign,
  Zap,
  Wrench,
  Star,
  CreditCard,
  Megaphone,
  FileCheck,
  FileText,
  CheckCircle,
  Truck,
  Store,
  Car,
  Battery,
  Smartphone,
  MailIcon,
} from "lucide-react";
import Container from "@mui/material/Container";
export default function Component() {
  const benefits = [
    {
      title: "Core Advantages",
      icon: <Star className="w-8 h-8" />,
      gradient: "from-blue-500 to-blue-600",
      items: [
        "Low Initial Investment",
        "Attractive Distributor/Dealer Margins",
        "Branding, Display & Marketing Materials",
        "Access to Online Leads & Enquiries",
        "AMC & After-Sales Service Training",
      ],
    },
    {
      title: "Dedicated Dealer Portal",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-purple-600",
      items: [
        "Order & Inventory Management",
        "Service Scheduling",
        "Customer & Lead Management",
        "Vehicle Delivery Records",
        "Billing & Accounting Integration",
      ],
    },
    {
      title: "Financing & Support",
      icon: <CreditCard className="w-8 h-8" />,
      gradient: "from-emerald-500 to-emerald-600",
      items: [
        "Tie-ups with leading NBFCs & Financial Institutions",
        "Customer & Dealer Financing Options",
        "On-ground assistance for loan processing",
      ],
    },
    {
      title: "Marketing Support",
      icon: <Megaphone className="w-8 h-8" />,
      gradient: "from-orange-500 to-orange-600",
      items: [
        "Social Media Promotions & Ad Campaigns",
        "Area-wise Lead Allocation",
        "Posters, Flyers, Hoardings & Local Branding",
        "WhatsApp, SMS & Email Campaign Templates",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description:
        "Fill out the dealer interest form with your business details and requirements",
      icon: <FileText className="w-8 h-8" />,
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "02",
      title: "Screening & Discussion",
      description:
        "Our team will connect with you to discuss opportunities and requirements",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "03",
      title: "Dealership Agreement",
      description:
        "Complete documentation, legal formalities and initial investment payment",
      icon: <FileCheck className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Start operations with comprehensive onboarding and marketing support",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-700 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];
  const applicants = [
    {
      title: "Automobile Dealers",
      description: "Existing car dealers looking to expand into EV segment",
      icon: <Car className="w-12 h-12" />,
      gradient: "from-green-400 to-green-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "EV Showroom Aspirants",
      description: "Entrepreneurs planning to start EV retail business",
      icon: <Store className="w-12 h-12" />,
      gradient: "from-green-500 to-green-600",
      bgPattern: "bg-gradient-to-br from-green-100 to-green-150",
    },
    {
      title: "Garage & Spare Parts",
      description: "Service centers and parts dealers expanding services",
      icon: <Wrench className="w-12 h-12" />,
      gradient: "from-green-600 to-green-700",
      bgPattern: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      title: "Fleet Operators",
      description: "Commercial fleet owners and transport entrepreneurs",
      icon: <Truck className="w-12 h-12" />,
      gradient: "from-green-700 to-green-800",
      bgPattern: "bg-gradient-to-br from-green-100 to-green-150",
    },
  ];

  const products = [
    {
      name: "E-Rickshaws (Passenger)",
      description:
        "Comfortable and efficient last-mile passenger transport with eco-friendly technology.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-400 to-green-500",
      features: ["3-Wheeler", "Passenger Transport", "Eco-Friendly"],
    },
    {
      name: "E-Carts (Garbage & Utility)",
      description:
        "Robust electric carts for waste management and utility tasks with heavy-duty performance.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Truck className="w-8 h-8" />,
      gradient: "from-green-500 to-green-600",
      features: ["Heavy Duty", "Utility Purpose", "Waste Management"],
    },
    {
      name: "Delivery Scooters",
      description:
        "Fast and reliable electric scooters for urban deliveries with extended range capability.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-600 to-green-700",
      features: ["Fast Delivery", "Urban Mobility", "Extended Range"],
    },
    {
      name: "Battery Options",
      description:
        "Flexible lithium & lead-acid battery choices for diverse operational needs and budgets.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Battery className="w-8 h-8" />,
      gradient: "from-green-700 to-green-800",
      features: ["Lithium-Ion", "Lead-Acid", "Flexible Options"],
    },
    {
      name: "Smart IoT Vehicles",
      description:
        "Advanced vehicles with GPS tracking, IoT connectivity and comprehensive app management.",
      image: "/placeholder.svg?height=300&width=400",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-green-500 to-green-700",
      features: ["GPS Tracking", "IoT Enabled", "App Control"],
    },
  ];
  return (
    <main>
      {/* Hero Section */}

      <section className="relative w-full h-[100vh] md:h-[70vh] flex items-center justify-center text-center  bg-gradient-to-br from-green-700/70 to-green-900 text-white overflow-hidden">
        <Image
          src="/img/banner2.png"
          width={1920}
          height={1080}
          alt="Modern EV Rickshaw driving through a city street"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          priority
        />
        <div className="relative z-10 px-4 md:px-6 max-w-6xl text-white space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Drive the Future with Mac Auto
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto  text-white opacity-90">
            Become an Authorized Dealer and lead India&apos;s E-Mobility
            Revolution with our innovative EV range.
          </p>
          <Button asChild className="btn">
            <Link href="#rental-plans">Explore Our Plans</Link>
          </Button>
        </div>
      </section>

      <section className=" section">
        <Container maxWidth="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8 sticky top-25">
              <div className="space-y-6">
                <p className="text-green-500 font-medium text-sm uppercase tracking-wide">
                  India’s Fastest Growing EV Brand
                </p>

                <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Why Partner with{" "}
                  <span className="text-green-700">Mac Auto</span>?
                </h1>

                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    At Mac Auto, we are redefining last-mile mobility with
                    innovative electric rickshaws, loaders, and scooters.
                  </p>
                  <p>
                    Partnering with us gives you access to a fast-moving market,
                    cutting-edge products, and unmatched support from a trusted
                    EV brand.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Wrench className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  High-Margin Business Model
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Benefit from a lucrative business model designed for maximum
                  profitability and growth.
                </p>
              </div>

              {/* Fast-Moving Products */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Zap className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Ready Inventory & Fast-Moving Products
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access popular products with high demand and readily available
                  stock to meet market needs.
                </p>
              </div>

              {/* Dealer Portal */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Executive Dealer Portal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Streamlined management for orders, leads, service, and
                  accounts through a dedicated platform.
                </p>
              </div>

              {/* Financing Support */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Handshake className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Easy Financing with NBFC Tie-Ups
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Hassle-free financing options with multiple Non-Banking
                  Financial Company partnerships.
                </p>
              </div>

              {/* Marketing Support */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Rocket className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Marketing & Lead Generation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive support for marketing campaigns and effective
                  lead generation strategies.
                </p>
              </div>

              {/* 24x7 Service */}
              <div className="space-y-4  ">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="font-xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  24x7 Direct Customer Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Unmatched support with dedicated territory and brand rights,
                  ensuring peace of mind.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="products"
        className="w-full section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      >
        <Container maxWidth="xl">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  Product Range
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of electric vehicles designed
                for every business need
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <CardContent className="p-0">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        width={400}
                        height={300}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay with Icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white shadow-lg`}
                          >
                            {product.icon}
                          </div>
                        </div>
                      </div>

                      {/* Features Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-green-700">
                          {product.features[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.gradient}`}
                    ></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section
        id="benefits"
        className="w-full section bg-gradient-to-br from-gray-50 to-white"
      >
        <Container maxWidth="xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Exclusive
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Dealer Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network and unlock a world of opportunities with
              comprehensive support and exclusive advantages
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group relative h-full overflow-hidden rounded-[20px] bg-white border-0 shadow-lg pt-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${benefit.gradient} p-6 text-white relative`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="mb-4 text-white/90">{benefit.icon}</div>
                    <div className="text-lg font-bold leading-tight">
                      {benefit.title}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle2 className="w-5 h-5 text-green-500 group-hover/item:text-green-600 transition-colors" />
                        </div>
                        <span className="ml-3 text-gray-700 group-hover/item:text-gray-900 transition-colors leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="section  flex justify-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <span className="text-gray-600 font-medium">
                Ready to get started?
              </span>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105">
                Become a Dealer
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Steps to Join Section */}
      <section id="join" className="w-full  section bg-gray-50">
        <Container maxWidth="xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Steps to <span> </span>
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Join as a Dealer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our simple 4-step process to become a part of our growing
              dealer network
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Desktop Progress Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-300 to-green-400 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card
                    className={`group h-full relative rounded-[20px] overflow-hidden bg-white border-2 ${step.borderColor} hover:border-opacity-60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3`}
                  >
                    <CardContent className="p-8 text-center">
                      {/* Step Number with Icon */}
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {step.icon}
                        </div>
                        <div
                          className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {step.description}
                      </p>

                      {/* Hover Effect Background */}
                      <div
                        className={`absolute inset-0 ${step.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`}
                      ></div>
                    </CardContent>
                  </Card>

                  {/* Mobile Arrow */}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-green-300 rounded-full"></div>
        </div>

        <Container maxWidth="xl" className=" relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Who Can{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                Apply
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We welcome diverse business backgrounds to join our growing dealer
              network
            </p>
          </div>

          {/* Applicant Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {applicants.map((applicant, index) => (
              <Card
                key={index}
                className="group h-full p-0 relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1"
              >
                <CardContent className="p-8 text-center relative h-full">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 ${applicant.bgPattern} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                  ></div>

                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${applicant.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      {applicant.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors">
                      {applicant.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {applicant.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-xl border border-green-100">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apply Now?
                </h3>
                <p className="text-gray-600">
                  Fill out our Dealer Inquiry Form or contact us today
                </p>
                <div className="flex gap-2 items-center font-bold">
                  <MailIcon className="text-green-600 mt-2"></MailIcon>{" "}
                  <a
                    className="text-gray-600 mt-2"
                    href="mailto:dealers@macauto.in"
                    target="_blank"
                  >
                    dealers@macauto.in
                  </a>
                </div>
              </div>
              <button className=" flex gap-2 bg-gradient-to-r  from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Phone></Phone>
                <a href="tel:+91-XXXXXXXXXX" target="_blank">
                  +91-XXXXXXXXXX
                </a>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Apply Now / Contact Section */}
      {/* <section
          id="apply"
          className="w-full py-20 md:py-36 lg:py-48 bg-gradient-to-br from-green-100 to-white"
        >
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-10 max-w-4xl mx-auto">
              <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl text-gray-900">
                Ready to <span className="text-green-700">Join Us</span>?
              </h2>
              <p className="mx-auto max-w-[800px] text-xl md:text-2xl text-gray-700">
                Fill out our Dealer Inquiry Form or contact us today:
              </p>
              <form className="flex flex-col sm:flex-row gap-5 w-full max-w-2xl mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email to get started"
                  className="flex-1 h-14 text-xl px-6 border-green-300 focus:border-green-600 focus:ring-green-200 rounded-lg shadow-md"
                />
                <Button
                  type="submit"
                  size="xl"
                  className="h-14 px-10 text-xl bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-lg"
                >
                  Submit Inquiry
                </Button>
              </form>
              <div className="flex flex-col gap-8 sm:flex-row justify-center text-xl pt-8">
                <Link
                  href="tel:+91-XXXXXXXXXX"
                  className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Phone className="h-7 w-7 text-green-600" />
                  <span>+91-XXXXXXXXXX</span>
                </Link>
                <Link
                  href="mailto:dealers@macauto.in"
                  className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Mail className="h-7 w-7 text-green-600" />
                  <span>dealers@macauto.in</span>
                </Link>
                <Link
                  href="https://www.macauto.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Globe className="h-7 w-7 text-green-600" />
                  <span>www.macauto.in</span>
                </Link>
              </div>
              <p className="text-2xl mt-16 text-gray-900">
                Mac Auto - Drive the Future of Mobility
              </p>
            </div>
          </div>
        </section> */}
    </main>
  );
}
