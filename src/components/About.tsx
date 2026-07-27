import { Award, Users, CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '9+', label: 'Years of experience' },
  { value: '100%', label: 'Owner operated' },
  { value: '7', label: 'Industries served' },
  { value: '100%', label: 'Fully insured' },
];

const values = [
  {
    icon: CheckCircle2,
    title: 'Vetted & trained staff',
    description: 'Security-vetted, professionally trained, and clearly identifiable on site.',
  },
  {
    icon: Award,
    title: 'Fully insured',
    description: 'Comprehensive Public Liability Insurance for your protection and confidence.',
  },
  {
    icon: Users,
    title: 'Owner operated',
    description: 'Direct contact with business owners who genuinely care about your satisfaction.',
  },
  {
    icon: CheckCircle2,
    title: 'Consistent standards',
    description: 'Quality assurance and site inspections ensure a reliable clean, every time.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <img
              src="/images/ChatGPT_Image_Jul_17,_2026,_04_39_00_PM.png"
              alt="CareClean professional at work"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand-navy text-white p-6 rounded-2xl shadow-2xl max-w-[200px]">
              <div className="text-4xl font-extrabold text-brand-green-light">9+</div>
              <div className="text-sm text-white/80 mt-1">years serving Wellington</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
              About CareClean
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight text-balance">
              Proudly Wellington owned. Owner managed.
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              We are a proudly New Zealand owned and owner-operated cleaning company based in
              Wellington, providing professional commercial and residential cleaning services
              across the Wellington region.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With over 9 years of industry experience, we understand that our customers value
              three things above all else: quality, reliability, and consistency. That's exactly
              what we deliver.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-3">
                    <Icon className="text-brand-green shrink-0 mt-0.5" size={22} />
                    <div>
                      <div className="font-semibold text-brand-navy">{v.title}</div>
                      <div className="text-sm text-gray-600">{v.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-gray-50 rounded-2xl py-8 px-4 border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-brand-navy">{s.value}</div>
              <div className="text-sm text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
