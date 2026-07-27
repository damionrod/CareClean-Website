import { ShieldCheck, Award, Clock, HeartHandshake, Sparkles, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: HeartHandshake,
    title: 'Owner Operated & Personally Managed',
    description:
      'Our owners remain actively involved in customer relationships, quality control, and service delivery, ensuring accountability and consistently high standards.',
  },
  {
    icon: Award,
    title: 'Over 9 Years of Industry Experience',
    description:
      'With years of experience across commercial and residential cleaning, we understand the unique requirements of different industries and environments.',
  },
  {
    icon: Clock,
    title: 'Reliable & Consistent Service',
    description:
      'We pride ourselves on delivering dependable cleaning services that businesses and homeowners can trust, every single time.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Vetted & Fully Insured',
    description:
      'For your peace of mind, our team members are carefully selected, professionally trained, security vetted, and fully insured.',
  },
  {
    icon: Sparkles,
    title: 'Flexible Cleaning Solutions',
    description:
      'From daily office cleaning to one-off deep cleans, we tailor our services around your requirements and schedule.',
  },
  {
    icon: ThumbsUp,
    title: 'Professional Equipment & Products',
    description:
      'Reliable, friendly, and experienced team using professional-grade equipment and products for a consistently high standard of clean.',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navy-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-brand-green-light font-semibold text-sm uppercase tracking-wider mb-3">
            Why choose us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Why choose CareClean?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            We focus on building long-term relationships through exceptional service, attention
            to detail, and a commitment to doing the job properly every time.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-brand-green-light" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>

        {/* Industries we serve */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Industries we serve</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            No matter the size of your premises, CareClean has the experience and capability to
            deliver exceptional results.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Offices & Commercial Buildings',
              'Schools & Childcare Centres',
              'Medical & Healthcare Facilities',
              'Retail Stores',
              'Warehouses & Industrial Sites',
              'Residential Homes',
              'Body Corporates & Shared Facilities',
            ].map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/90 hover:bg-brand-green/20 hover:border-brand-green/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
