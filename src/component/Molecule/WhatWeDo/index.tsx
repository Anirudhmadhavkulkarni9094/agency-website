
import IntroCard from "@/component/Atom/IntroCard";
import ServiceCard from "@/component/Atom/ServiceCard";
import content from "@/data/content.json";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#faf9f6] px-6 py-16 sm:px-10 lg:p-20"
    >

      {/* Section Introduction */}
      <div className="mb-8">
        <IntroCard
          {...content.services.intro}
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 border-l border-t border-[#e8e7e3] md:grid-cols-2">
        {content.services.items.map((service) => (
          <ServiceCard
            key={service.number}
            service={service}
          />
        ))}
      </div>

    </section>
  );
}
