import content from "@/data/content.json";

type Principle = (typeof content.philosophy.principles)[number];

export const PrincipleCard = ({ item }: { item: Principle }) => {
  return (
    <article className="flex min-h-[205px] flex-col border-t border-[#e6e5e1] px-0 py-6 lg:min-h-[205px] lg:border-l lg:border-t-0 lg:px-5 lg:py-5 lg:first:border-l-0 lg:first:pl-0">
      <p className="mb-4 text-[12px] font-medium tracking-wide text-[#505050]">
        {item.number} / {item.label}
      </p>

      <h3 className="mb-2 text-[20px] font-medium tracking-tight text-black sm:text-lg">
        {item.title}
      </h3>

      <p className="max-w-[340px] text-[16px] leading-[1.65] text-[#555]">
        {item.description}
      </p>

      <div className="mt-auto flex items-center gap-2 pt-6 text-[10px] font-bold tracking-wide text-black">
        <span className="h-[5px] w-[5px] bg-black" />
        {item.footer}
      </div>
    </article>
  );
}