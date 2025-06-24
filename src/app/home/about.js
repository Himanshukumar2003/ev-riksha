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
    <section className="section">
      <div className="container mx-auto ">
        <div className="px-6">
          <div className="grid grid-cols-2   mb-10">
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
                оказываем услуги по доставке грузов по всей России и в страны
                СНГ. За время работы мы зарекомендовали себя как надежный
                партнер, который всегда выполняет свои обязательства в срок.
                Наша команда состоит из опытных специалистов, которые знают все
                тонкости логистического бизнеса и готовы решить любые задачи
                наших клиентов.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center ">
            {/* Left Cards */}
            <div className="space-y-8 ">
              {leftServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white backdrop-blur-sm shadow-[ rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;] rounded-xl p-6 hover:bg-[var(--color-secondary)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-secondary)]/20 hover:border-[var(--color-secondary)]/30 hover:-translate-x-2"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-4 relative">
                    <div className="flex-shrink-0 w-12 h-12 text-white absolute top-[-45px] left-[-55px]  bg-[var(--color-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary-light)] transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-[  var(--color-secondary)]/50">
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
                <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
                  <Image
                    src="/img/heo-img.jpg"
                    width={400}
                    height={400}
                    alt="Forklift operator in warehouse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className=" space-y-8 ">
              {rightServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white backdrop-blur-sm   shadow-[ rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;] rounded-xl p-6 hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[  var(--color-secondary)]/20 hover:border-[  var(--color-secondary)]/30 hover:translate-x-2"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-4 relative">
                    <div className="flex-shrink-0 w-12 h-12 absolute top-[-45px] right-[-55px] bg-[var(--color-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--color-primary-light)] transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-[var(--color-secondary)]/50  text-white">
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
        </div>
      </div>
    </section>
  );
}
