import { Building2, Stethoscope, School, Home, Box, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Contract Commercial Cleaning',
    description:
      'Reliable commercial cleaning for Wellington businesses. Flexible schedules tailored to your workplace, with detailed cleaning specifications and dedicated account management.',
    features: [
      'Daily, weekly or custom frequencies',
      'Regular quality inspections',
      'Health & Safety compliant procedures',
      'After-hours & weekend options',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Medical & Healthcare Cleaning',
    description:
      'Specialised cleaning for medical clinics, dental practices, specialist centres, and aged care facilities, with strict infection control procedures and documentation.',
    features: [
      'High-touch surface disinfection',
      'Treatment room sanitisation',
      'Infection control procedures',
      'Waste handling & disposal',
    ],
  },
  {
    icon: School,
    title: 'School & Childcare Cleaning',
    description:
      'Customised cleaning schedules for schools, early childhood centres, and educational facilities that minimise disruption and maintain exceptional hygiene standards.',
    features: [
      'Classroom & washroom cleaning',
      'Playground & common areas',
      'Holiday deep cleans',
      'Flexible around school hours',
    ],
  },
  {
    icon: Home,
    title: 'Residential Cleaning Services',
    description:
      'Professional home cleaning designed to give you more time for what matters. Regular weekly or fortnightly cleaning, deep cleans, move-in/move-out, and end-of-tenancy cleans.',
    features: [
      'Regular or one-off cleans',
      'Move-in & move-out cleaning',
      'Kitchen & bathroom detailing',
      'Interior window cleaning',
    ],
  },
  {
    icon: Box,
    title: 'Consumables & Hygiene Supplies',
    description:
      'A full range of workplace consumables and hygiene products to keep your business clean, stocked, and running smoothly — supplied as-needed or on scheduled replenishment.',
    features: [
      'Paper towels & toilet tissue',
      'Hand soap & sanitiser',
      'Bin liners & rubbish bags',
      'Stock monitoring & replenishment',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
            What we do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight text-balance">
            Cleaning services tailored to your needs
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            From offices and schools to healthcare facilities and homes, our experienced
            team delivers reliable, high-quality cleaning services you can count on.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-green/10 flex items-center justify-center mb-5 group-hover:bg-brand-green transition-colors duration-300">
                  <Icon size={26} className="text-brand-green group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm group-hover:gap-2.5 transition-all mt-auto"
                >
                  Enquire now
                  <ArrowRight size={15} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
