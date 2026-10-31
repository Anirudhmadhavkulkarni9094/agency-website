import {
  ArrowForward,
  Autorenew,
  CalendarMonth,
  Hub,
  Web,
} from "@mui/icons-material";
import content from "@/data/content.json";

type Service = (typeof content.services.items)[number];

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "Web":
      return <Web sx={{ fontSize: 17 }} className="text-black" />;
    case "CalendarMonth":
      return <CalendarMonth sx={{ fontSize: 17 }} className="text-black" />;
    case "Hub":
      return <Hub sx={{ fontSize: 17 }} className="text-black" />;
    case "Autorenew":
      return <Autorenew sx={{ fontSize: 17 }} className="text-black" />;
    default:
      throw new Error(`Unknown service icon: ${name}`);
  }
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex min-w-0 flex-col border-b border-[#e8e7e3] p-5 sm:p-7 lg:min-h-[225px]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[9px] font-medium tracking-wide text-[#505050]">
          {content.services.labels.numberPrefix} {service.number}
        </span>

        <ServiceIcon name={service.icon} />
      </div>

      <div>
        <h3 className="mb-1 text-[15px] font-medium tracking-tight text-black">
          {service.title}
        </h3>

        <p className="max-w-[440px] text-[11px] leading-[1.6] text-[#555]">
          {service.description}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-2 text-[8px] font-bold tracking-wide text-black">
          {content.services.labels.capabilities}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {service.capabilities.map((capability) => (
            <span
              key={capability}
              className="bg-[#eeedea] px-2 py-1 text-[8px] font-medium tracking-wide text-[#505050]"
            >
              {capability}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="border-t border-[#e8e7e3] pt-3">
          <p className="mb-1 text-[8px] font-semibold tracking-wide text-[#2451ff]">
            {content.services.labels.outcome}
          </p>

          <p className="text-[10px] leading-[1.6] text-[#444]">
            {service.outcome}
          </p>
        </div>

        <a
          href={service.href}
          className="group mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-wide text-black"
        >
          {service.action}

          <ArrowForward
            sx={{ fontSize: 12 }}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}
