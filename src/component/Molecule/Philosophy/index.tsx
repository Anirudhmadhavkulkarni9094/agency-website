import IntroCard from "@/component/Atom/IntroCard";
import { PrincipleCard } from "@/component/Atom/PrincipleCard";
import content from "@/data/content.json";


export default function Philosophy() {
  return (
    <section className="relative overflow-hidden border border-[#e7e6e2] border-l-0 bg-[#f5f4f1] p-20">

      {/* Blue Accent */}
      <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#2875ff]" />

      <div className="w-full">
        <IntroCard
          {...content.philosophy.intro}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {content.philosophy.principles.map((item) => (
            <PrincipleCard key={item.number} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
