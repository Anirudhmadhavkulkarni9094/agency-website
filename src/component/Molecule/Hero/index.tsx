
import { Fragment } from "react";
import { ArrowForward } from "@mui/icons-material";
import MetricCard from "@/component/Atom/MetricCard";
import content from "@/data/content.json";

function Dashboard() {
  const { dashboard } = content.hero;

  return (
    <div className="w-full border border-[#e5e4e0] bg-white shadow-[0_14px_28px_rgba(0,0,0,0.09)]">

      {/* Browser Header */}
      <div className="flex h-9 items-center justify-between gap-2 border-b border-[#e5e4e0] bg-[#f5f4f1] px-3 sm:px-5">

        <div className="flex shrink-0 gap-1.5">
          {Array.from({ length: dashboard.browserDots }, (_, index) => index + 1).map((dot) => (
            <span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-[#deddd9]"
            />
          ))}
        </div>

        <div className="hidden rounded border border-[#e3e1dc] bg-[#faf9f6] px-2 py-1 text-[9px] text-gray-600 sm:block">
          {dashboard.address}
        </div>

        <div className="flex items-center gap-1.5 text-[8px] font-semibold tracking-widest text-[#1745ff] sm:text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1745ff]" />
          {dashboard.productionStatus}
        </div>
      </div>

      {/* Dashboard Body */}
      <div className="bg-[#faf9f6] p-3 sm:p-5">

        {/* Metrics */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          {dashboard.metrics.map((item) => (
            <MetricCard key={item.label} item={item} />
          ))}
        </div>

        {/* Architecture */}
        <div className="grid grid-cols-1 gap-4 border border-[#e7e5e0] bg-white p-3 sm:grid-cols-[1.2fr_0.8fr] sm:p-4">

          {/* Architecture Information */}
          <div>
            <p className="mb-2 text-[8px] tracking-wide text-gray-600">
              {dashboard.architecture.eyebrow}
            </p>

            <h2 className="mb-2 text-lg font-medium leading-snug tracking-tight sm:text-xl">
              {dashboard.architecture.title}
            </h2>

            <p className="text-xs leading-relaxed text-[#525252]">
              {dashboard.architecture.description}
            </p>

            <div className="mt-5">
              <div className="mb-1.5 flex justify-between gap-2 text-[9px]">
                <span>{dashboard.architecture.throughputLabel}</span>
                <strong>{dashboard.architecture.throughputValue}</strong>
              </div>

              <div className="h-1.5 bg-[#eeedea]">
                <div
                  className="h-full bg-[#244cff]"
                  style={{ width: `${dashboard.architecture.throughputPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Event Stream */}
          <div className="border-t border-[#e5e4e0] pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">

            <div className="mb-3 flex justify-between border-b border-[#e7e5e0] pb-2 text-[9px]">
              <span>{dashboard.stream.title}</span>
              <span className="text-[#1745ff]">{dashboard.stream.status}</span>
            </div>

            <div className="space-y-3">
              {dashboard.stream.events.map((event) => (
                <div
                  key={event.time}
                  className="grid min-w-0 grid-cols-[auto_auto_minmax(0,1fr)] items-start gap-x-1 text-[9px] text-[#444]"
                >
                  <span className="text-gray-400">{event.time}</span>{" "}
                  <strong className="text-black">{event.type}</strong>{" "}
                  <span className="break-words">{event.message}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-[#f1f0ed] p-2.5">
              <p className="text-[8px] text-gray-600">
                {dashboard.stream.runtimeLabel}
              </p>
              <p className="mt-1 text-[9px] font-medium">
                {dashboard.stream.runtimeStatus}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Footer */}
      <div className="flex flex-wrap justify-between gap-2 border-t border-[#e3e1dc] bg-[#f1f0ed] px-3 py-2 text-[8px] text-gray-600 sm:px-4">
        <span>{dashboard.gitHashLabel} {dashboard.gitHash}</span>
        <span className="min-w-0 break-words">{dashboard.environment}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const [primaryAction, secondaryAction] = content.hero.actions;

  return (
    <section
      aria-labelledby="home-title"
      className="overflow-hidden bg-[#faf9f6] px-5 py-12 sm:px-10 sm:py-16 lg:flex lg:items-center lg:gap-[4%] lg:p-20"
    >

      {/* Left Hero */}
      <div className="w-full lg:w-1/2">

        <div className="mb-3 flex items-center gap-2 text-[9px] font-bold tracking-[1.15px] text-[#383838]">
          <span className="h-2 w-2 rounded-full bg-[#234bff]" />
          {content.hero.eyebrow}
        </div>

        <h1 id="home-title" className="font-serif text-[clamp(2.5rem,10vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.055em] text-black sm:text-[clamp(3rem,6.35vw,5.5rem)]">
          {content.hero.titleLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>

        <p className="mb-8 mt-7 max-w-[540px] text-sm leading-7 text-[#494949] sm:text-base">
          {content.hero.description}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={primaryAction.href}
            className="inline-flex h-9 items-center bg-black px-6 text-[10px] font-medium text-white transition-colors hover:bg-[#234bff]"
          >
            {primaryAction.label}
          </a>

          <a
            href={secondaryAction.href}
            className="group inline-flex items-center gap-2 text-[10px] font-semibold text-black"
          >
            {secondaryAction.label}
            <ArrowForward
              fontSize="small"
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Divider */}
        <div className="mb-4 mt-10 h-px w-full bg-[#e6e4df]" />

        {/* Services */}
        <div className="flex flex-wrap items-center gap-2.5 text-[9px] tracking-wide text-[#505050] sm:text-[10px]">
          {content.hero.services.map((service, index) => (
            <Fragment key={service}>
              {index > 0 && <span className="text-[#c9c7c1]">/</span>}
              <span>{service}</span>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Right Dashboard */}
      <div className="mt-10 flex w-full items-center lg:mt-0 lg:w-1/2">
        <Dashboard />
      </div>
    </section>
  );
}
