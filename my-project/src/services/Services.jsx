import ServicesHeader from "./ServicesHeader";
import ServiceCard from "./ServiceCard";
import { servicesData } from "./servicesData";

const Services = () => {
  return (
    <section className="bg-gray-50">
      <ServicesHeader />

      <div className="max-w-6xl mx-auto px-6 -mt-20 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
