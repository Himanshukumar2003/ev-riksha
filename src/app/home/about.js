import Image from "next/image";
import { Truck, Shield, Clock, Users, MapPin, Headphones } from "lucide-react";

export default function ContingentSection() {
  const leftServices = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Автомобильные перевозки",
      description:
        "Доставка грузов любого объема и веса по всей территории России и стран СНГ",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Страхование грузов",
      description:
        "Полное страхование вашего груза от момента погрузки до момента доставки",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Срочная доставка",
      description:
        "Экспресс-доставка в кратчайшие сроки с гарантией соблюдения временных рамок",
    },
  ];

  const rightServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Профессиональная команда",
      description:
        "Опытные водители и логисты с многолетним стажем работы в сфере грузоперевозок",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Отслеживание груза",
      description:
        "Система GPS-мониторинга позволяет отслеживать местоположение груза в режиме реального времени",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Поддержка 24/7",
      description:
        "Круглосуточная техническая поддержка и консультации по всем вопросам доставки",
    },
  ];

  return (
    <section className="section ">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              НАШ КОНТИНГЕНТ
            </h2>
            <p>
              Логистическая компания «CARGO EXPERT» работает с 2015 года. Мы
              оказываем услуги по
            </p>
          </div>
          <div>
            <p className="text-gray-500 leading-relaxed">
              Логистическая компания «CARGO EXPERT» работает с 2015 года. Мы
              оказываем услуги по доставке грузов по всей России и в страны СНГ.
              За время работы мы зарекомендовали себя как надежный партнер,
              который всегда выполняет свои обязательства в срок. Наша команда
              состоит из опытных специалистов, которые знают все тонкости
              логистического бизнеса и готовы решить любые задачи наших
              клиентов.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Services */}
          <div className="space-y-8">
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
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                      {service.title}
                    </h3>
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
                alt="Forklift operator"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Services */}
          <div className="space-y-8">
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
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
