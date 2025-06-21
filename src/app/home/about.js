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
    <section className="  py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 mb-10">
          <div className="mb-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              НАШ КОНТИНГЕНТ
            </h2>
            <p>
              Логистическая компания «CARGO EXPERT» работает с 2015 года. Мы
              оказываем услуги по
            </p>
          </div>

          <div className="">
            <p className="text-gray-500 max-w-3xl leading-relaxed">
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

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Left Cards */}
          <div className="absolute left-5 top-1/2 -translate-y-1/2 space-y-8 max-w-sm">
            {leftServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm shadow-[ rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;] rounded-xl p-6 hover:bg-orange-500 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 hover:-translate-x-2"
                style={{
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                }}
              >
                <div className="flex items-start space-x-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 text-white absolute top-[-45px] left-[-55px]  bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Image */}
          <div className="relative z-[-1]">
            <div className="relative z-10 flex justify-center items-center">
              <div className="w-[450px] h-[450px] rounded-full overflow-hidden">
                <Image
                  src="/img/heo-img.jpg"
                  width={450}
                  height={450}
                  alt="Forklift operator in warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 space-y-8 max-w-sm">
            {rightServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white backdrop-blur-sm   shadow-[ rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;] rounded-xl p-6 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 hover:translate-x-2"
                style={{
                  boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                }}
              >
                <div className="flex items-start space-x-4 relative">
                  <div className="flex-shrink-0 w-12 h-12 absolute top-[-45px] right-[-55px] bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50   text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2  transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className=" text-sm leading-relaxed  transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content with Callouts */}

        {/* Statistics */}
      </div>
    </section>
  );
}
