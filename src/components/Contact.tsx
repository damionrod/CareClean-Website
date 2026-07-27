import { Send, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  'Contract Commercial Cleaning',
  'Medical & Healthcare Cleaning',
  'School & Childcare Cleaning',
  'Residential Cleaning',
  'Consumables & Hygiene Supplies',
  'Not sure yet',
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <div>
            <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-wider mb-3">
              Get a free quote
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight text-balance">
              Get in touch with CareClean
            </h2>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Looking for reliable cleaning services in Wellington? Whether you need
              professional commercial cleaning for your business or residential cleaning for
              your home, our team is ready to help. Contact us today for a free,
              no-obligation quote.
            </p>

            <div className="mt-10 space-y-5">
              <a href="tel:+64274994445" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                  <Phone size={20} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Call us</div>
                  <div className="font-semibold text-brand-navy">+64 27 499 4445</div>
                </div>
              </a>
              <a href="mailto:info@careclean.co.nz" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                  <Mail size={20} className="text-brand-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email us</div>
                  <div className="font-semibold text-brand-navy">info@careclean.co.nz</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <MapPin size={20} className="text-brand-green" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Service area</div>
                  <div className="font-semibold text-brand-navy">Wellington & surrounding areas</div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
              <img
                src="/images/ChatGPT_Image_Jul_17,_2026,_04_26_04_PM.png"
                alt="CareClean team with supplies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-9">
            <form
              action="https://formsubmit.co/info@careclean.co.nz"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New CareClean quote request" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://careclean.co.nz/#contact" />
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                  placeholder="Jane Smith"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                    placeholder="jane@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
                    placeholder="021 123 456"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Service needed
                </label>
                <select
                  id="service"
                  name="service_type"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                >
                  <option value="">Select a service…</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Tell us about your space
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none"
                  placeholder="E.g. 3-bedroom home, fortnightly clean, preferring mornings…"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-4 rounded-full transition-all duration-200 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Request Free Quote
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                The first submission may send a one-time activation email to info@careclean.co.nz. Open it and confirm the form to begin receiving enquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
