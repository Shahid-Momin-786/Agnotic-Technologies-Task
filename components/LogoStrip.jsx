// LogoStrip — Server Component (no interactivity)

/** Individual wordmark logo rendered as styled text */
function LogoWordmark({ prefix, name }) {
  return (
    <div className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition-colors">
      {/* Small icon square */}
      <div className="w-6 h-6 rounded bg-gray-200 flex items-center justify-center shrink-0">
        <span className="text-xs font-bold text-gray-500">{prefix}</span>
      </div>
      <span className="text-sm font-semibold whitespace-nowrap">{name}</span>
    </div>
  );
}

/** The five company logos shown in the design */
const LOGOS = [
  { prefix: "A",  name: "Apex Logistics" },
  { prefix: "S",  name: "Sterling Manufacturing" },
  { prefix: "BR", name: "BuildRight Construction" },
  { prefix: "GW", name: "Global Warehousing Solutions" },
  { prefix: "P",  name: "Prime Distribution" },
];

export default function LogoStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-center text-sm font-semibold text-gray-500 mb-8 tracking-wide">
          Trusted by teams that need consistent inspections
        </p>

        {/* Logo row — horizontally scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 no-scrollbar">
          {LOGOS.map((logo) => (
            <LogoWordmark key={logo.name} prefix={logo.prefix} name={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
