export const products = [
  {
    id: "product-1",
    slug: "tejas-dhl",
    category: "passenger",
    brand: "Mac Auto",
    navImg: "/img/mac-tejas-dhl.png",
    model: "Tejas DHL",
    type: "Passenger (Double Headlight)",
    description:
      "The Tejas DHL is designed for urban mobility with comfort, reliability, and cutting-edge electric drive. A smart solution for everyday transport.",
    viewer360: {
      imagePath: "/bajaj/",
      imageCount: 8,
    },
    colors: [
      {
        id: "color-1",
        name: "Crimson Red",
        color: "#DC143C",
        filter: "contrast(110%)",
      },
      {
        id: "color-2",
        name: "Pearl White",
        color: "#FFFFFF",
        filter: "brightness(110%)",
      },
      {
        id: "color-3",
        name: "Sky Blue",
        color: "#87CEEB",
        filter: "hue-rotate(30deg)",
      },
    ],
    pricing: {
      states: [
        {
          id: "state-1",
          name: "Uttar Pradesh",
          basePrice: 160000,
          cities: [
            {
              id: "city-1",
              name: "Lucknow",
              priceModifier: 5000,
            },
            {
              id: "city-2",
              name: "Kanpur",
              priceModifier: 4500,
            },
          ],
        },
        {
          id: "state-2",
          name: "Maharashtra",
          basePrice: 165000,
          cities: [
            {
              id: "city-3",
              name: "Mumbai",
              priceModifier: 7000,
            },
            {
              id: "city-4",
              name: "Pune",
              priceModifier: 5500,
            },
          ],
        },
      ],
    },
    emiCalculator: {
      defaultValues: {
        downPayment: 20000,
        loanTenure: 24,
        interestRate: 11.0,
      },
      ranges: {
        downPayment: {
          min: 10000,
          step: 1000,
        },
        loanTenure: {
          min: 12,
          max: 48,
          step: 12,
        },
        interestRate: {
          min: 7.0,
          max: 14.0,
          step: 0.5,
        },
      },
      financingCompanies: [
        {
          id: "company-1",
          name: "Urban Finance Co.",
          interestRate: 10.0,
          color: "#3B82F6",
        },
        {
          id: "company-2",
          name: "Shakti FinCorp",
          interestRate: 11.25,
          color: "#F59E0B",
        },
        {
          id: "company-3",
          name: "RideNow Loans",
          interestRate: 12.0,
          color: "#10B981",
        },
      ],
    },
    featuresSteps: {
      header: {
        title: "Key Features",
        subtitle: "Why Tejas DHL stands out",
        description:
          "Loaded with next-gen features, Tejas DHL offers comfort, safety, and performance for city commuting.",
      },
      steps: [
        {
          number: "1",
          title: "Comfort-First Design",
          text: "Designed to offer ample legroom, ergonomic seating, and vibration-free rides.",
          image: "/img/auto.jpg",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Spacious Cabin",
                  description: "Comfortably fits 5 including the driver.",
                },
                {
                  strong: "Noise Reduction",
                  description: "Minimal road noise and smooth drive.",
                },
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Smart Dashboard & Safety",
          text: "Real-time data with essential indicators, along with upgraded braking system.",
          image: "/img/banner1.png",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Digital Speedometer",
                  description: "Clear visibility and essential indicators.",
                },
                {
                  strong: "Hydraulic Brakes",
                  description: "Responsive braking for safe urban driving.",
                },
              ],
            },
          ],
        },
      ],
    },
    vehicleSpecs: {
      performance: {
        icon: "Gauge",
        specs: [
          {
            label: "Top Speed",
            value: "28 km/h",
          },
          {
            label: "Seating / Payload",
            value: "Driver + 4 Passengers",
          },
          {
            label: "Tyres",
            value: "3.75 x 12",
          },
          {
            label: "Suspension",
            value: "Hydraulic Front, Leaf Rear",
          },
        ],
      },
      battery: {
        icon: "Battery",
        specs: [
          {
            label: "Battery Type",
            value: "Lead Acid / Lithium",
          },
          {
            label: "Range",
            value: "85-100 km",
          },
          {
            label: "Charge Time",
            value: "5-6 hours",
          },
          {
            label: "Battery Warranty",
            value: "18 Months / 3 Years",
          },
        ],
      },
      drivetrain: {
        icon: "Settings",
        specs: [
          {
            label: "Motor",
            value: "1000W BLDC",
          },
          {
            label: "Controller",
            value: "48V/24 Tube",
          },
          {
            label: "Charger",
            value: "Smart Automatic Charger",
          },
          {
            label: "Motor Warranty",
            value: "12 Months",
          },
          {
            label: "Controller Warranty",
            value: "12 Months",
          },
          {
            label: "Vehicle Warranty",
            value: "1 Year",
          },
        ],
      },
    },
    gallery: {
      header: {
        title: "Explore the Gallery",
        subtitle: "Tejas DHL Visual Highlights",
        description:
          "Take a closer look at the design, comfort, and features through our curated gallery.",
      },
      images: [
        {
          id: "image-1",
          src: "/img/banner2.png",
          alt: "Tejas DHL Front View",
        },
        {
          id: "image-2",
          src: "/img/auto.jpg",
          alt: "Tejas DHL Cabin View",
        },
        {
          id: "image-3",
          src: "/img/download.webp",
          alt: "Tejas DHL Side View",
        },
        {
          id: "image-4",
          src: "/img/heo-img.jpg",
          alt: "Tejas DHL Rear View",
        },
      ],
    },
    faq: {
      header: {
        title: "Frequently Asked Questions",
        subtitle: "Your questions answered",
        description:
          "Explore answers to common questions about the Tejas DHL electric rickshaw.",
      },
      questions: [
        {
          question: "What is the battery life of Tejas DHL?",
          answer:
            "The battery typically lasts between 18 months to 3 years depending on usage and type.",
        },
        {
          question: "How many passengers can it carry?",
          answer: "It can comfortably seat the driver and 4 passengers.",
        },
        {
          question: "Is financing available?",
          answer:
            "Yes, multiple EMI options are available from leading finance companies.",
        },
        {
          question: "Can I choose between lead-acid and lithium batteries?",
          answer: "Yes, depending on the variant, you can opt for either.",
        },
      ],
    },
  },
  {
    id: "product-2",
    slug: "tejas",
    category: "passenger",
    brand: "Mac Auto",
    navImg: "/img/mac-tejas.png",
    model: "Tejas",
    type: "Passenger",
    description:
      "Experience the future of driving with the Electric Car X. This innovative vehicle combines cutting-edge technology with sustainable design, offering a smooth and eco-friendly ride.",
    viewer360: {
      imagePath: "/bajaj/",
      imageCount: 8,
    },
    colors: [
      {
        id: "color-1",
        name: "Midnight Black",
        color: "#000000",
        filter: "grayscale(100%)",
      },
      {
        id: "color-2",
        name: "Ocean Blue",
        color: "#0077BE",
        filter: "sepia(50%)",
      },
      {
        id: "color-3",
        name: "Forest Green",
        color: "#228B22",
        filter: "invert(75%)",
      },
    ],
    pricing: {
      states: [
        {
          id: "state-1",
          name: "California",
          basePrice: 45000,
          cities: [
            {
              id: "city-1",
              name: "Los Angeles",
              priceModifier: 1500,
            },
            {
              id: "city-2",
              name: "San Francisco",
              priceModifier: 2000,
            },
          ],
        },
        {
          id: "state-2",
          name: "Texas",
          basePrice: 43000,
          cities: [
            {
              id: "city-3",
              name: "Austin",
              priceModifier: 1000,
            },
            {
              id: "city-4",
              name: "Dallas",
              priceModifier: 1200,
            },
          ],
        },
      ],
    },
    emiCalculator: {
      defaultValues: {
        downPayment: 10000,
        loanTenure: 36,
        interestRate: 10.5,
      },
      ranges: {
        downPayment: {
          min: 5000,
          step: 500,
        },
        loanTenure: {
          min: 12,
          max: 60,
          step: 12,
        },
        interestRate: {
          min: 5.0,
          max: 15.0,
          step: 0.5,
        },
      },
      financingCompanies: [
        {
          id: "company-1",
          name: "Green Loans",
          interestRate: 9.5,
          color: "#34D399",
        },
        {
          id: "company-2",
          name: "Eco Finance",
          interestRate: 10.0,
          color: "#22C55E",
        },
        {
          id: "company-3",
          name: "Clean Credit",
          interestRate: 10.25,
          color: "#16A34A",
        },
        {
          id: "company-4",
          name: "Future Bank",
          interestRate: 10.75,
          color: "#15803D",
        },
      ],
    },
    featuresSteps: {
      header: {
        title: "Key Features",
        subtitle: "Explore the advanced features of the Electric Car X",
        description:
          "The Electric Car X is packed with innovative features designed to enhance your driving experience and promote sustainability.",
      },
      steps: [
        {
          number: "1",
          title: "Advanced Battery Technology",
          text: "Our state-of-the-art battery provides a long-lasting charge and quick recharge times, ensuring you're always ready to go.",
          image: "/img/auto.jpg",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Long Range",
                  description: "Up to 400 miles on a single charge.",
                },
                {
                  strong: "Fast Charging",
                  description: "80% charge in just 30 minutes.",
                },
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Smart Driving Assistance",
          text: "Experience a safer and more convenient drive with our intelligent driver assistance systems.",
          image: "/img/banner1.png",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Adaptive Cruise Control",
                  description: "Maintains a safe distance from other vehicles.",
                },
                {
                  strong: "Lane Keep Assist",
                  description: "Helps you stay in your lane.",
                },
              ],
            },
          ],
        },
      ],
    },
    vehicleSpecs: {
      performance: {
        icon: "Gauge",
        specs: [
          {
            label: "Vehicle Type",
            value: "Passenger",
          },
          {
            label: "Top Speed",
            value: "25-30 km/h",
          },
          {
            label: "Seating / Payload",
            value: "Driver + 4 Passengers",
          },
          {
            label: "Tyres",
            value: "3.75-12",
          },
          {
            label: "Suspension",
            value: "Telescopic (Front), Leaf Spring (Rear)",
          },
        ],
      },
      battery: {
        icon: "Battery",
        specs: [
          {
            label: "Battery Type",
            value: "Lithium-Ion, 48V/120Ah",
          },
          {
            label: "Range",
            value: "90-100 km",
          },
          {
            label: "Charge Time",
            value: "4-5 hours",
          },
          {
            label: "Battery Warranty",
            value: "3 Years",
          },
        ],
      },
      drivetrain: {
        icon: "Settings",
        specs: [
          {
            label: "Motor",
            value: "1000-1200W BLDC",
          },
          {
            label: "Controller",
            value: "48V 40A",
          },
          {
            label: "Charger",
            value: "15A Smart Charger",
          },
          {
            label: "Motor Warranty",
            value: "1 Year",
          },
          {
            label: "Controller Warranty",
            value: "1 Year",
          },
          {
            label: "Vehicle Warranty",
            value: "1 Year",
          },
        ],
      },
    },
    gallery: {
      header: {
        title: "Explore the Gallery",
        subtitle: "View stunning images of the Electric Car X",
        description:
          "Browse our gallery to see the Electric Car X from every angle. Discover its sleek design and innovative features.",
      },
      images: [
        {
          id: "image-1",
          src: "/img/banner2.png",
          alt: "Electric Car X - Front View",
        },
        {
          id: "image-2",
          src: "/img/auto.jpg",
          alt: "Electric Car X - Interior",
        },
        {
          id: "image-3",
          src: "/img/download.webp",
          alt: "Electric Car X - Side View",
        },
        {
          id: "image-4",
          src: "/img/heo-img.jpg",
          alt: "Electric Car X - Back View",
        },
      ],
    },
    faq: {
      header: {
        title: "Frequently Asked Questions",
        subtitle: "Get answers to common questions about the Electric Car X",
        description:
          "Find answers to the most frequently asked questions about the Electric Car X, including information about its features, performance, and sustainability.",
      },
      questions: [
        {
          question: "What is the range of the Electric Car X?",
          answer:
            "The Electric Car X has a range of up to 400 miles on a single charge.",
        },
        {
          question: "How long does it take to charge the Electric Car X?",
          answer:
            "It takes approximately 8 hours to fully charge the Electric Car X using a 240V charger. Fast charging options are also available.",
        },
        {
          question: "What safety features does the Electric Car X have?",
          answer:
            "The Electric Car X is equipped with advanced safety features, including airbags, ABS, and intelligent driver assistance systems.",
        },
        {
          question: "Is the Electric Car X environmentally friendly?",
          answer:
            "Yes, the Electric Car X is designed to be environmentally friendly, producing zero emissions and promoting sustainable transportation.",
        },
      ],
    },
  },
  {
    id: "product-3",
    slug: "mac-900",
    category: "passenger",
    navImg: "/img/mac-tejas.png",

    brand: "Mac Auto",
    model: "Mac 900",
    type: "Electric Car",
    description:
      "Experience the future of driving with the Electric Car X. This innovative vehicle combines cutting-edge technology with sustainable design, offering a smooth and eco-friendly ride.",
    viewer360: {
      imagePath: "/bajaj/",
      imageCount: 8,
    },
    colors: [
      {
        id: "color-1",
        name: "Midnight Black",
        color: "#000000",
        filter: "grayscale(100%)",
      },
      {
        id: "color-2",
        name: "Ocean Blue",
        color: "#0077BE",
        filter: "sepia(50%)",
      },
      {
        id: "color-3",
        name: "Forest Green",
        color: "#228B22",
        filter: "invert(75%)",
      },
    ],
    pricing: {
      states: [
        {
          id: "state-1",
          name: "California",
          basePrice: 81669,
          cities: [
            {
              id: "city-1",
              name: "Los Angeles",
              priceModifier: 1500,
            },
            {
              id: "city-2",
              name: "San Francisco",
              priceModifier: 2000,
            },
          ],
        },
        {
          id: "state-2",
          name: "Texas",
          basePrice: 43000,
          cities: [
            {
              id: "city-3",
              name: "Austin",
              priceModifier: 1000,
            },
            {
              id: "city-4",
              name: "Dallas",
              priceModifier: 1200,
            },
          ],
        },
      ],
    },
    emiCalculator: {
      defaultValues: {
        downPayment: 10000,
        loanTenure: 36,
        interestRate: 10.5,
      },
      ranges: {
        downPayment: {
          min: 5000,
          step: 500,
        },
        loanTenure: {
          min: 12,
          max: 60,
          step: 12,
        },
        interestRate: {
          min: 5.0,
          max: 15.0,
          step: 0.5,
        },
      },
      financingCompanies: [
        {
          id: "company-1",
          name: "Green Loans",
          interestRate: 9.5,
          color: "#34D399",
        },
        {
          id: "company-2",
          name: "Eco Finance",
          interestRate: 10.0,
          color: "#22C55E",
        },
        {
          id: "company-3",
          name: "Clean Credit",
          interestRate: 10.25,
          color: "#16A34A",
        },
        {
          id: "company-4",
          name: "Future Bank",
          interestRate: 10.75,
          color: "#15803D",
        },
      ],
    },
    featuresSteps: {
      header: {
        title: "Key Features",
        subtitle: "Explore the advanced features of the Electric Car X",
        description:
          "The Electric Car X is packed with innovative features designed to enhance your driving experience and promote sustainability.",
      },
      steps: [
        {
          number: "1",
          title: "Advanced Battery Technology",
          text: "Our state-of-the-art battery provides a long-lasting charge and quick recharge times, ensuring you're always ready to go.",
          image: "/img/auto.jpg",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Long Range",
                  description: "Up to 400 miles on a single charge.",
                },
                {
                  strong: "Fast Charging",
                  description: "80% charge in just 30 minutes.",
                },
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Smart Driving Assistance",
          text: "Experience a safer and more convenient drive with our intelligent driver assistance systems.",
          image: "/img/banner1.png",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Adaptive Cruise Control",
                  description: "Maintains a safe distance from other vehicles.",
                },
                {
                  strong: "Lane Keep Assist",
                  description: "Helps you stay in your lane.",
                },
              ],
            },
          ],
        },
      ],
    },
    vehicleSpecs: {
      performance: {
        icon: "Gauge",
        specs: [
          {
            label: "Vehicle Type",
            value: "Passenger",
          },
          {
            label: "Top Speed",
            value: "25-30 km/h",
          },
          {
            label: "Seating / Payload",
            value: "Driver + 4 Passengers",
          },
          {
            label: "Tyres",
            value: "3.75-12",
          },
          {
            label: "Suspension",
            value: "Hydraulic",
          },
        ],
      },
      battery: {
        icon: "Battery",
        specs: [
          {
            label: "Battery Type",
            value: "Li-ion (48V/100-120Ah) / Lead Acid (130-140Ah)",
          },
          {
            label: "Range",
            value: "90-100 km (Li-ion), 60-80 km (Lead Acid)",
          },
          {
            label: "Charge Time",
            value: "4-5 hrs (Li-ion), 7-8 hrs (Lead Acid)",
          },
          {
            label: "Battery Warranty",
            value: "3 Years (Li-ion), 12 Months (Lead Acid)",
          },
        ],
      },
      drivetrain: {
        icon: "Settings",
        specs: [
          {
            label: "Motor",
            value: "1000-1200W BLDC",
          },
          {
            label: "Controller",
            value: "48V 40-50A",
          },
          {
            label: "Charger",
            value: "15A Smart Charger / Lead Acid Charger",
          },
          {
            label: "Motor Warranty",
            value: "1 Year",
          },
          {
            label: "Controller Warranty",
            value: "1 Year",
          },
          {
            label: "Vehicle Warranty",
            value: "1 Year",
          },
        ],
      },
    },
    gallery: {
      header: {
        title: "Explore the Gallery",
        subtitle: "View stunning images of the Electric Car X",
        description:
          "Browse our gallery to see the Electric Car X from every angle. Discover its sleek design and innovative features.",
      },
      images: [
        {
          id: "image-1",
          src: "/img/banner2.png",
          alt: "Electric Car X - Front View",
        },
        {
          id: "image-2",
          src: "/img/auto.jpg",
          alt: "Electric Car X - Interior",
        },
        {
          id: "image-3",
          src: "/img/download.webp",
          alt: "Electric Car X - Side View",
        },
        {
          id: "image-4",
          src: "/img/heo-img.jpg",
          alt: "Electric Car X - Back View",
        },
      ],
    },
    faq: {
      header: {
        title: "Frequently Asked Questions",
        subtitle: "Get answers to common questions about the Electric Car X",
        description:
          "Find answers to the most frequently asked questions about the Electric Car X, including information about its features, performance, and sustainability.",
      },
      questions: [
        {
          question: "What is the range of the Electric Car X?",
          answer:
            "The Electric Car X has a range of up to 400 miles on a single charge.",
        },
        {
          question: "How long does it take to charge the Electric Car X?",
          answer:
            "It takes approximately 8 hours to fully charge the Electric Car X using a 240V charger. Fast charging options are also available.",
        },
        {
          question: "What safety features does the Electric Car X have?",
          answer:
            "The Electric Car X is equipped with advanced safety features, including airbags, ABS, and intelligent driver assistance systems.",
        },
        {
          question: "Is the Electric Car X environmentally friendly?",
          answer:
            "Yes, the Electric Car X is designed to be environmentally friendly, producing zero emissions and promoting sustainable transportation.",
        },
      ],
    },
  },
  {
    id: "product-4",
    slug: "mac-multi-utility-w-cart",
    brand: "Mac Auto",
    category: "Cargo",
    navImg: "/img/multiutility.png",

    model: "Mac Multi Utility E-Cart",
    type: "Cargo",
    description:
      "Experience the future of driving with the Electric Car X. This innovative vehicle combines cutting-edge technology with sustainable design, offering a smooth and eco-friendly ride.",
    viewer360: {
      imagePath: "/bajaj/",
      imageCount: 8,
    },
    colors: [
      {
        id: "color-1",
        name: "Midnight Black",
        color: "#000000",
        filter: "grayscale(100%)",
      },
      {
        id: "color-2",
        name: "Ocean Blue",
        color: "#0077BE",
        filter: "sepia(50%)",
      },
      {
        id: "color-3",
        name: "Forest Green",
        color: "#228B22",
        filter: "invert(75%)",
      },
    ],
    pricing: {
      states: [
        {
          id: "state-1",
          name: "California",
          basePrice: 45000,
          cities: [
            {
              id: "city-1",
              name: "Los Angeles",
              priceModifier: 1500,
            },
            {
              id: "city-2",
              name: "San Francisco",
              priceModifier: 2000,
            },
          ],
        },
        {
          id: "state-2",
          name: "Texas",
          basePrice: 43000,
          cities: [
            {
              id: "city-3",
              name: "Austin",
              priceModifier: 1000,
            },
            {
              id: "city-4",
              name: "Dallas",
              priceModifier: 1200,
            },
          ],
        },
      ],
    },
    emiCalculator: {
      defaultValues: {
        downPayment: 10000,
        loanTenure: 36,
        interestRate: 10.5,
      },
      ranges: {
        downPayment: {
          min: 5000,
          step: 500,
        },
        loanTenure: {
          min: 12,
          max: 60,
          step: 12,
        },
        interestRate: {
          min: 5.0,
          max: 15.0,
          step: 0.5,
        },
      },
      financingCompanies: [
        {
          id: "company-1",
          name: "Green Loans",
          interestRate: 9.5,
          color: "#34D399",
        },
        {
          id: "company-2",
          name: "Eco Finance",
          interestRate: 10.0,
          color: "#22C55E",
        },
        {
          id: "company-3",
          name: "Clean Credit",
          interestRate: 10.25,
          color: "#16A34A",
        },
        {
          id: "company-4",
          name: "Future Bank",
          interestRate: 10.75,
          color: "#15803D",
        },
      ],
    },
    featuresSteps: {
      header: {
        title: "Key Features",
        subtitle: "Explore the advanced features of the Electric Car X",
        description:
          "The Electric Car X is packed with innovative features designed to enhance your driving experience and promote sustainability.",
      },
      steps: [
        {
          number: "1",
          title: "Advanced Battery Technology",
          text: "Our state-of-the-art battery provides a long-lasting charge and quick recharge times, ensuring you're always ready to go.",
          image: "/img/auto.jpg",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Long Range",
                  description: "Up to 400 miles on a single charge.",
                },
                {
                  strong: "Fast Charging",
                  description: "80% charge in just 30 minutes.",
                },
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Smart Driving Assistance",
          text: "Experience a safer and more convenient drive with our intelligent driver assistance systems.",
          image: "/img/banner1.png",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Adaptive Cruise Control",
                  description: "Maintains a safe distance from other vehicles.",
                },
                {
                  strong: "Lane Keep Assist",
                  description: "Helps you stay in your lane.",
                },
              ],
            },
          ],
        },
      ],
    },
    vehicleSpecs: {
      performance: {
        icon: "Gauge",
        specs: [
          {
            label: "Vehicle Type",
            value: "Cargo",
          },
          {
            label: "Top Speed",
            value: "25-30 km/h",
          },
          {
            label: "Seating / Payload",
            value: "400-500 kg Payload",
          },
          {
            label: "Tyres",
            value: "3.75-12",
          },
        ],
      },
      battery: {
        icon: "Battery",
        specs: [
          {
            label: "Battery Type",
            value: "Lithium-Ion, 48V/120Ah",
          },
        ],
      },
      drivetrain: {
        icon: "Settings",
        specs: [
          {
            label: "Motor",
            value: "1200W BLDC",
          },
          {
            label: "Controller",
            value: "48V 50A",
          },
          {
            label: "Charger",
            value: "15A Smart Charger",
          },
        ],
      },
    },
    gallery: {
      header: {
        title: "Explore the Gallery",
        subtitle: "View stunning images of the Electric Car X",
        description:
          "Browse our gallery to see the Electric Car X from every angle. Discover its sleek design and innovative features.",
      },
      images: [
        {
          id: "image-1",
          src: "/img/banner2.png",
          alt: "Electric Car X - Front View",
        },
        {
          id: "image-2",
          src: "/img/auto.jpg",
          alt: "Electric Car X - Interior",
        },
        {
          id: "image-3",
          src: "/img/download.webp",
          alt: "Electric Car X - Side View",
        },
        {
          id: "image-4",
          src: "/img/heo-img.jpg",
          alt: "Electric Car X - Back View",
        },
      ],
    },
    faq: {
      header: {
        title: "Frequently Asked Questions",
        subtitle: "Get answers to common questions about the Electric Car X",
        description:
          "Find answers to the most frequently asked questions about the Electric Car X, including information about its features, performance, and sustainability.",
      },
      questions: [
        {
          question: "What is the range of the Electric Car X?",
          answer:
            "The Electric Car X has a range of up to 400 miles on a single charge.",
        },
        {
          question: "How long does it take to charge the Electric Car X?",
          answer:
            "It takes approximately 8 hours to fully charge the Electric Car X using a 240V charger. Fast charging options are also available.",
        },
        {
          question: "What safety features does the Electric Car X have?",
          answer:
            "The Electric Car X is equipped with advanced safety features, including airbags, ABS, and intelligent driver assistance systems.",
        },
        {
          question: "Is the Electric Car X environmentally friendly?",
          answer:
            "Yes, the Electric Car X is designed to be environmentally friendly, producing zero emissions and promoting sustainable transportation.",
        },
      ],
    },
  },

  {
    id: "product-5",
    slug: "mac-dhoom",
    brand: "Mac Auto",
    category: "passenger",
    model: "Mac Dhoom",
    navImg: "/img/mac-doom.png",

    type: "Passenger",
    description:
      "Experience the future of driving with the Electric Car X. This innovative vehicle combines cutting-edge technology with sustainable design, offering a smooth and eco-friendly ride.",
    viewer360: {
      imagePath: "/bajaj/",
      imageCount: 8,
    },
    colors: [
      {
        id: "color-1",
        name: "Midnight Black",
        color: "#000000",
        filter: "grayscale(100%)",
      },
      {
        id: "color-2",
        name: "Ocean Blue",
        color: "#0077BE",
        filter: "sepia(50%)",
      },
      {
        id: "color-3",
        name: "Forest Green",
        color: "#228B22",
        filter: "invert(75%)",
      },
    ],
    pricing: {
      states: [
        {
          id: "state-1",
          name: "California",
          basePrice: 87808,
          cities: [
            {
              id: "city-1",
              name: "Los Angeles",
              priceModifier: 1500,
            },
            {
              id: "city-2",
              name: "San Francisco",
              priceModifier: 2000,
            },
          ],
        },
        {
          id: "state-2",
          name: "Texas",
          basePrice: 43000,
          cities: [
            {
              id: "city-3",
              name: "Austin",
              priceModifier: 1000,
            },
            {
              id: "city-4",
              name: "Dallas",
              priceModifier: 1200,
            },
          ],
        },
      ],
    },
    emiCalculator: {
      defaultValues: {
        downPayment: 10000,
        loanTenure: 36,
        interestRate: 10.5,
      },
      ranges: {
        downPayment: {
          min: 5000,
          step: 500,
        },
        loanTenure: {
          min: 12,
          max: 60,
          step: 12,
        },
        interestRate: {
          min: 5.0,
          max: 15.0,
          step: 0.5,
        },
      },
      financingCompanies: [
        {
          id: "company-1",
          name: "Green Loans",
          interestRate: 9.5,
          color: "#34D399",
        },
        {
          id: "company-2",
          name: "Eco Finance",
          interestRate: 10.0,
          color: "#22C55E",
        },
        {
          id: "company-3",
          name: "Clean Credit",
          interestRate: 10.25,
          color: "#16A34A",
        },
        {
          id: "company-4",
          name: "Future Bank",
          interestRate: 10.75,
          color: "#15803D",
        },
      ],
    },
    featuresSteps: {
      header: {
        title: "Key Features",
        subtitle: "Explore the advanced features of the Electric Car X",
        description:
          "The Electric Car X is packed with innovative features designed to enhance your driving experience and promote sustainability.",
      },
      steps: [
        {
          number: "1",
          title: "Advanced Battery Technology",
          text: "Our state-of-the-art battery provides a long-lasting charge and quick recharge times, ensuring you're always ready to go.",
          image: "/img/auto.jpg",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Long Range",
                  description: "Up to 400 miles on a single charge.",
                },
                {
                  strong: "Fast Charging",
                  description: "80% charge in just 30 minutes.",
                },
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Smart Driving Assistance",
          text: "Experience a safer and more convenient drive with our intelligent driver assistance systems.",
          image: "/img/banner1.png",
          icon: "/travel.png",
          features: [
            {
              list: [
                {
                  strong: "Adaptive Cruise Control",
                  description: "Maintains a safe distance from other vehicles.",
                },
                {
                  strong: "Lane Keep Assist",
                  description: "Helps you stay in your lane.",
                },
              ],
            },
          ],
        },
      ],
    },
    vehicleSpecs: {
      performance: {
        icon: "Gauge",
        specs: [
          {
            label: "Vehicle Type",
            value: "Cargo",
          },
          {
            label: "Top Speed",
            value: "25-30 km/h",
          },
          {
            label: "Seating / Payload",
            value: "400-500 kg Payload",
          },
          {
            label: "Tyres",
            value: "3.75-12",
          },
        ],
      },
      battery: {
        icon: "Battery",
        specs: [
          {
            label: "Battery Type",
            value: "Lithium-Ion, 48V/120Ah",
          },
        ],
      },
      drivetrain: {
        icon: "Settings",
        specs: [
          {
            label: "Motor",
            value: "1200W BLDC",
          },
          {
            label: "Controller",
            value: "48V 50A",
          },
          {
            label: "Charger",
            value: "15A Smart Charger",
          },
        ],
      },
    },
    gallery: {
      header: {
        title: "Explore the Gallery",
        subtitle: "View stunning images of the Electric Car X",
        description:
          "Browse our gallery to see the Electric Car X from every angle. Discover its sleek design and innovative features.",
      },
      images: [
        {
          id: "image-1",
          src: "/img/banner2.png",
          alt: "Electric Car X - Front View",
        },
        {
          id: "image-2",
          src: "/img/auto.jpg",
          alt: "Electric Car X - Interior",
        },
        {
          id: "image-3",
          src: "/img/download.webp",
          alt: "Electric Car X - Side View",
        },
        {
          id: "image-4",
          src: "/img/heo-img.jpg",
          alt: "Electric Car X - Back View",
        },
      ],
    },
    faq: {
      header: {
        title: "Frequently Asked Questions",
        subtitle: "Get answers to common questions about the Electric Car X",
        description:
          "Find answers to the most frequently asked questions about the Electric Car X, including information about its features, performance, and sustainability.",
      },
      questions: [
        {
          question: "What is the range of the Electric Car X?",
          answer:
            "The Electric Car X has a range of up to 400 miles on a single charge.",
        },
        {
          question: "How long does it take to charge the Electric Car X?",
          answer:
            "It takes approximately 8 hours to fully charge the Electric Car X using a 240V charger. Fast charging options are also available.",
        },
        {
          question: "What safety features does the Electric Car X have?",
          answer:
            "The Electric Car X is equipped with advanced safety features, including airbags, ABS, and intelligent driver assistance systems.",
        },
        {
          question: "Is the Electric Car X environmentally friendly?",
          answer:
            "Yes, the Electric Car X is designed to be environmentally friendly, producing zero emissions and promoting sustainable transportation.",
        },
      ],
    },
  },
];
