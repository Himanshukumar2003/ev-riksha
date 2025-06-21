import { Truck, Package, Users } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/heo-img.jpg"
          alt="Trucks on highway at sunset"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Грузоперевозки по
            <br />
            России и СНГ
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
            Безопасная и надежная доставка вашего
            <br />
            груза в любую точку мира с гарантией
          </p>

          {/* CTA Button */}
        </div>

        {/* Features Section */}
        <div className=" right-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center">
                    <Truck className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base leading-tight">
                    Грузоперевозка любым видом
                    <br />
                    автотранспорта
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center">
                    <Package className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base leading-tight">
                    Без ограничений на
                    <br />
                    грузоподъемность
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base leading-tight">
                    Большое количество
                    <br />
                    свободного транспорта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          size="lg"
          className="bg-transparent border-2 mt-8 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-lg"
        >
          Заказать
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
