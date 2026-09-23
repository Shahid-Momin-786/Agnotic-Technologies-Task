// FeatureCard — reusable Server Component used in FeaturesSection
// and potentially elsewhere

/**
 * @param {string} icon    - SVG icon element
 * @param {string} title   - Card heading
 * @param {string} description - Card body text
 */
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200">
      {/* Icon container */}
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 shrink-0">
        {icon}
      </div>
      <h3 className="text-base font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
