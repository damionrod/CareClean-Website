import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Star, Clock3 } from 'lucide-react';
import Nav from './Nav';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

type FAQ = { q: string; a: string };
type ServicePage = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  sectionTitle: string;
  sectionText: string;
  included: string[];
  processTitle: string;
  process: { title: string; text: string }[];
  suitedTitle: string;
  suited: string[];
  faqs: FAQ[];
  related: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePage> = {
  '/services/residential-cleaning': {
    eyebrow: 'Residential Cleaning Wellington',
    title: 'Professional home cleaning in Wellington',
    intro: 'Reliable residential cleaning for busy Wellington households, with regular weekly or fortnightly cleaning, one-off deep cleans and flexible help when your home needs extra attention.',
    image: '/images/ChatGPT_Image_Jul_17,_2026,_04_39_00_PM.png',
    imageAlt: 'CareClean residential cleaners providing professional home cleaning in Wellington',
    highlights: ['Regular weekly or fortnightly options', 'Owner-operated local service', 'Fully insured cleaning company'],
    sectionTitle: 'A cleaner home without giving up your time',
    sectionText: 'Our residential cleaning service is tailored to the home, the condition of the space and the areas that matter most to you. We can create a regular cleaning routine or help with a deeper one-off clean before visitors, after a busy period or when you simply want a fresh start.',
    included: ['Kitchen surfaces, sinks and exterior appliances', 'Bathrooms, showers, toilets and vanities', 'Dusting and wiping accessible surfaces', 'Vacuuming carpets and rugs', 'Mopping hard floors', 'Bedrooms and living areas', 'Bins and general tidy-up as agreed', 'Optional deeper-detail tasks by arrangement'],
    processTitle: 'How residential cleaning works',
    process: [
      { title: 'Tell us what you need', text: 'We discuss your home, cleaning priorities, frequency and any surfaces or areas that need special attention.' },
      { title: 'Agree the cleaning scope', text: 'We set a clear scope so you know what is included and what can be added when required.' },
      { title: 'Consistent cleaning', text: 'We complete the agreed tasks carefully and consistently, with owner oversight and clear communication.' },
      { title: 'Adjust when life changes', text: 'Regular clients can update priorities as their household and cleaning needs change.' },
    ],
    suitedTitle: 'Residential cleaning for Wellington households',
    suited: ['Busy professionals and families', 'Weekly and fortnightly home cleaning', 'One-off deep cleaning', 'Move-in preparation', 'Apartments, townhouses and family homes', 'Homes across Wellington and surrounding areas'],
    faqs: [
      { q: 'How often can you clean my home?', a: 'We can provide regular weekly or fortnightly cleaning as well as one-off or deep cleaning depending on availability and your needs.' },
      { q: 'Do I need to provide cleaning products?', a: 'We can discuss the products and equipment required for your home when we prepare the quote, including any preferences for particular surfaces.' },
      { q: 'Can I change the cleaning priorities?', a: 'Yes. For regular cleaning, priorities can be adjusted as long as the requested work fits the agreed time and scope.' },
      { q: 'Which areas do you cover?', a: 'CareClean serves Wellington and surrounding areas. Contact us with your suburb and we can confirm availability.' },
    ],
    related: [
      { label: 'Move-Out Cleaning Wellington', href: '/services/move-out-cleaning' },
      { label: 'Carpet Cleaning Wellington', href: '/services/carpet-cleaning' },
      { label: 'Commercial Cleaning Wellington', href: '/services/commercial-cleaning' },
    ],
  },
  '/services/commercial-cleaning': {
    eyebrow: 'Commercial Cleaning Wellington',
    title: 'Reliable commercial & office cleaning in Wellington',
    intro: 'Professional contract cleaning for Wellington workplaces, with flexible schedules, clear cleaning specifications and dependable service tailored to your premises.',
    image: '/images/ChatGPT_Image_Jul_17,_2026,_10_49_54_PM.png',
    imageAlt: 'CareClean commercial cleaning team serving Wellington businesses and offices',
    highlights: ['Daily, weekly or custom schedules', 'Quality-focused owner oversight', 'After-hours options available'],
    sectionTitle: 'Commercial cleaning built around your workplace',
    sectionText: 'Every workplace has different traffic levels, hygiene requirements and operating hours. We develop a cleaning scope around the areas your staff, customers and visitors use most, then schedule the work to minimise disruption to your business.',
    included: ['Office desks and accessible surfaces', 'Kitchens and staff breakout areas', 'Bathrooms and washrooms', 'Vacuuming and hard-floor cleaning', 'Reception and customer-facing areas', 'High-touch points', 'Rubbish and bin servicing', 'Periodic deeper cleaning by arrangement'],
    processTitle: 'A straightforward commercial cleaning process',
    process: [
      { title: 'Site discussion', text: 'We learn about your premises, operating hours, priorities and the standard of cleaning you expect.' },
      { title: 'Tailored specification', text: 'We agree the tasks, frequency and any periodic cleaning so the service is clear from the start.' },
      { title: 'Scheduled service', text: 'Cleaning is completed at the agreed times, including after-hours or weekend options where arranged.' },
      { title: 'Quality follow-up', text: 'We keep communication direct and review the service when requirements change or improvements are needed.' },
    ],
    suitedTitle: 'Commercial premises we can support',
    suited: ['Offices and commercial buildings', 'Retail and customer-facing premises', 'Medical and healthcare facilities', 'Schools and childcare centres', 'Warehouses and industrial sites', 'Body corporates and shared facilities'],
    faqs: [
      { q: 'Can you clean outside normal business hours?', a: 'Yes. After-hours and weekend options can be discussed as part of your commercial cleaning schedule.' },
      { q: 'Do you provide a cleaning specification?', a: 'Yes. Commercial cleaning is based on an agreed scope and frequency so expectations are clear.' },
      { q: 'Can you supply hygiene consumables?', a: 'CareClean can also discuss workplace consumables and hygiene supplies such as paper products, hand soap, sanitiser and bin liners.' },
      { q: 'Do you clean medical and education facilities?', a: 'Yes. CareClean provides tailored cleaning for medical, healthcare, school and childcare environments, subject to the agreed site requirements.' },
    ],
    related: [
      { label: 'Residential Cleaning Wellington', href: '/services/residential-cleaning' },
      { label: 'Carpet Cleaning Wellington', href: '/services/carpet-cleaning' },
      { label: 'Move-Out Cleaning Wellington', href: '/services/move-out-cleaning' },
    ],
  },
  '/services/move-out-cleaning': {
    eyebrow: 'Move-Out Cleaning Wellington',
    title: 'Move-out & end-of-tenancy cleaning in Wellington',
    intro: 'Detailed cleaning for homes at the end of a tenancy or before a move, helping leave kitchens, bathrooms, floors and living areas clean and ready for the next occupant.',
    image: '/images/ChatGPT_Image_Jul_17,_2026,_04_26_04_PM.png',
    imageAlt: 'CareClean move-out and end-of-tenancy cleaning service in Wellington',
    highlights: ['Detailed one-off cleaning', 'End-of-tenancy & move-out cleans', 'Optional carpet cleaning available'],
    sectionTitle: 'A detailed clean for moving day',
    sectionText: 'Moving is already a big job. Our move-out cleaning service focuses on the areas that usually need the most attention once furniture and belongings are removed. The exact scope is agreed before the job so you know what is included and can add specialist tasks where required.',
    included: ['Kitchen surfaces, cupboards as agreed and sink', 'Bathroom, shower, toilet and vanity cleaning', 'Dusting and wiping accessible surfaces', 'Skirting and detailed surface work as agreed', 'Vacuuming and mopping floors', 'Bedrooms and living spaces', 'Interior windows by arrangement', 'Oven, fridge or other add-ons by quotation'],
    processTitle: 'How we approach a move-out clean',
    process: [
      { title: 'Confirm the property', text: 'We discuss property size, condition, access, timing and any landlord or property-manager requirements you know about.' },
      { title: 'Set the scope', text: 'We identify standard cleaning plus any extras such as oven, fridge, detailed interior work or carpet cleaning.' },
      { title: 'Complete the detailed clean', text: 'The team works systematically through kitchens, bathrooms, living areas, bedrooms and floors.' },
      { title: 'Final check', text: 'We review the agreed areas before completion and advise you of anything that may need specialist treatment.' },
    ],
    suitedTitle: 'Ideal for moves, rentals and property handovers',
    suited: ['Tenants moving out', 'Homeowners preparing to sell or move', 'Landlords between tenancies', 'Property managers', 'Move-in cleaning before occupancy', 'Homes needing carpet cleaning at the same time'],
    faqs: [
      { q: 'Is oven cleaning included?', a: 'Oven cleaning can be included when it is specified in the quote. Because ovens vary greatly in condition, we prefer to confirm this before the job.' },
      { q: 'Can you clean the fridge?', a: 'Yes. Interior fridge cleaning can be added to the scope by arrangement.' },
      { q: 'Can you also professionally clean the carpets?', a: 'Yes. Professional carpet cleaning can be quoted alongside a move-out clean, which can make scheduling easier when the property is empty.' },
      { q: 'Do you guarantee a bond refund?', a: 'No cleaning company can control a landlord or property manager’s final bond decision. We focus on completing the agreed cleaning scope to a professional standard.' },
    ],
    related: [
      { label: 'Residential Cleaning Wellington', href: '/services/residential-cleaning' },
      { label: 'Carpet Cleaning Wellington', href: '/services/carpet-cleaning' },
      { label: 'Commercial Cleaning Wellington', href: '/services/commercial-cleaning' },
    ],
  },
  '/services/carpet-cleaning': {
    eyebrow: 'Carpet Cleaning Wellington',
    title: 'Professional carpet cleaning with hot water extraction',
    intro: 'Deep carpet cleaning for Wellington homes, rental properties and workplaces using a professional hot water extraction process to remove embedded soil, residues and everyday grime from carpet fibres.',
    image: '/images/carpet-cleaning-before-after-new.png',
    imageAlt: 'Before and after professional carpet cleaning by CareClean in Wellington',
    highlights: ['Professional hot water extraction', 'Pre-treatment & stain treatment', 'Residential & commercial carpets'],
    sectionTitle: 'A deeper clean than surface cleaning alone',
    sectionText: 'Carpet fibres can hold fine soil, dust, residues and spills below the visible surface. Our process combines inspection, dry soil removal, pre-treatment and professional extraction to rinse and recover loosened contamination while managing moisture carefully.',
    included: ['Initial carpet inspection', 'Thorough pre-vacuuming', 'Professional pre-spray / pre-treatment', 'Targeted spot and stain treatment', 'Agitation where required', 'Hot water extraction rinse and recovery', 'Final inspection', 'Ventilation and drying advice'],
    processTitle: 'Our professional carpet cleaning process',
    process: [
      { title: '1. Carpet inspection', text: 'We assess the carpet type, condition, stains and high-traffic areas before starting.' },
      { title: '2. Thorough pre-vacuuming', text: 'Dry soil, dust, hair and loose debris are removed before wet cleaning.' },
      { title: '3. Pre-treatment / pre-spray', text: 'A professional carpet cleaning solution is applied to loosen embedded dirt, oils and grime.' },
      { title: '4. Spot & stain treatment', text: 'Problem areas are treated individually using products appropriate for the stain and carpet fibre.' },
      { title: '5. Agitation where required', text: 'Heavily soiled or high-traffic areas may be gently agitated to help the cleaning solution work through the fibres.' },
      { title: '6. Hot water extraction', text: 'The carpet is professionally rinsed and extracted, removing loosened soil, cleaning solution and moisture.' },
      { title: '7. Final inspection & drying advice', text: 'We check the finished carpet and provide advice on ventilation, airflow and drying.' },
    ],
    suitedTitle: 'Carpet cleaning for Wellington properties',
    suited: ['Residential homes', 'Rental and move-out properties', 'Offices and workplaces', 'High-traffic areas', 'General soil and traffic-lane cleaning', 'Carpet cleaning alongside other CareClean services'],
    faqs: [
      { q: 'How does your professional carpet cleaning process work?', a: 'We inspect and pre-vacuum the carpet, apply professional pre-treatment, treat spots and stains, agitate areas when required, then use hot water extraction to rinse and recover loosened soil and solution. We finish with an inspection and drying advice.' },
      { q: 'Do you clean carpets in both homes and offices?', a: 'Yes. CareClean provides carpet cleaning for residential homes, rental properties and commercial premises across Wellington and surrounding areas.' },
      { q: 'Can you guarantee every stain will come out?', a: 'No. Some stains can permanently alter or dye carpet fibres. We will treat stains appropriately and aim for the best safe improvement without making unrealistic guarantees.' },
      { q: 'How long do carpets take to dry?', a: 'Drying time depends on carpet type, airflow, temperature, humidity and how much moisture is required during cleaning. Good ventilation and airflow generally help the carpet dry faster.' },
    ],
    related: [
      { label: 'Residential Cleaning Wellington', href: '/services/residential-cleaning' },
      { label: 'Move-Out Cleaning Wellington', href: '/services/move-out-cleaning' },
      { label: 'Commercial Cleaning Wellington', href: '/services/commercial-cleaning' },
    ],
  },
};

export default function ServiceLanding({ page }: { page: ServicePage }) {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <section className="bg-brand-navy pt-28 lg:pt-36 pb-16 lg:pb-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block text-brand-green-light font-semibold text-sm uppercase tracking-wider mb-4">{page.eyebrow}</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">{page.title}</h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">{page.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {page.highlights.map((x) => <span key={x} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm"><CheckCircle2 size={16} className="text-brand-green-light" />{x}</span>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact-form" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3.5 rounded-full transition"><Phone size={17}/>Get a Free Quote</a>
                <a href="tel:+64274994445" className="inline-flex items-center gap-2 border border-white/25 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-full transition">Call 027 499 4445</a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5">
              <img src={page.image} alt={page.imageAlt} className="w-full aspect-[4/3] object-cover object-left" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">What’s included</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">{page.sectionTitle}</h2>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">{page.sectionText}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4">
                {page.included.map((x) => <div key={x} className="flex gap-3 text-gray-700"><CheckCircle2 size={20} className="text-brand-green shrink-0 mt-0.5"/><span>{x}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">Our process</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">{page.processTitle}</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.process.map((step) => <article key={step.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"><h3 className="font-bold text-brand-navy text-lg">{step.title}</h3><p className="mt-3 text-gray-600 text-sm leading-6">{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">Who it’s for</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">{page.suitedTitle}</h2>
              <div className="mt-7 grid sm:grid-cols-2 gap-3">{page.suited.map((x) => <div key={x} className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 text-gray-700"><CheckCircle2 size={18} className="text-brand-green shrink-0" />{x}</div>)}</div>
            </div>
            <aside className="lg:col-span-2 rounded-2xl bg-brand-navy p-7 text-white self-start">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div><ShieldCheck className="mx-auto text-brand-green-light"/><div className="text-xs mt-2 text-white/70">Fully insured</div></div>
                <div><Star className="mx-auto text-brand-green-light"/><div className="text-xs mt-2 text-white/70">5.0 rating</div></div>
                <div><Clock3 className="mx-auto text-brand-green-light"/><div className="text-xs mt-2 text-white/70">9+ years</div></div>
              </div>
              <h3 className="text-xl font-bold mt-7">Need a tailored cleaning quote?</h3>
              <p className="mt-3 text-white/75 text-sm leading-6">Tell us about your property, preferred timing and the cleaning result you need.</p>
              <a href="/#contact-form" className="mt-6 inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-5 py-3 rounded-full transition">Request a quote <ArrowRight size={16}/></a>
            </aside>
          </div>
        </section>

        <Reviews />

        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center"><span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">Frequently asked questions</span><h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">Questions about this service</h2></div>
            <div className="mt-10 space-y-4">{page.faqs.map((faq) => <details key={faq.q} className="group bg-white rounded-xl border border-gray-200 p-5"><summary className="cursor-pointer list-none font-bold text-brand-navy flex justify-between gap-4">{faq.q}<span className="text-brand-green">+</span></summary><p className="mt-3 text-gray-600 leading-7 pr-6">{faq.a}</p></details>)}</div>
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="font-bold text-brand-navy">Related CareClean services</h3>
              <div className="mt-4 flex flex-wrap gap-3">{page.related.map((r) => <a key={r.href} href={r.href} className="inline-flex items-center gap-1.5 text-brand-green font-semibold text-sm hover:text-brand-green-dark">{r.label}<ArrowRight size={15}/></a>)}</div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
