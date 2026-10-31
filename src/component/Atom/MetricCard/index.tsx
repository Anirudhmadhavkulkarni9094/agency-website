import content from "@/data/content.json";

type Metric = (typeof content.hero.dashboard.metrics)[number];

export default function MetricCard({ item }: { item: Metric }) {
  return (
    <div className="min-w-0 border border-[#e7e5e0] bg-[#f5f4f1] p-2.5 sm:p-3">
      <p className="mb-1.5 text-[8px] tracking-wide text-[#525252] sm:text-[9px]">
        {item.label}
      </p>

      <div className="flex flex-wrap items-baseline gap-1">
        <span className="text-base font-semibold tracking-tight sm:text-xl">
          {item.value}
        </span>

        {item.suffix && (
          <span className="text-[9px] text-gray-600">{item.suffix}</span>
        )}

        {item.status && (
          <span className="text-[8px] text-[#1745ff]">{item.status}</span>
        )}
      </div>
    </div>
  );
}
