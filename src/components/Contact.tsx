import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const services = [
  'Contract Commercial Cleaning',
  'Medical & Healthcare Cleaning',
  'School & Childcare Cleaning',
  'Residential Cleaning',
  'Consumables & Hygiene Supplies',
  'Not sure yet',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name and email.');
      return;
    }

    try {
      const payload = new URLSearchParams({
        'form-name': 'quote-request',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service_type: form.service_type,
        message: form.message.trim(),
      });

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', service_type: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong sending your request. Please try again or call us directly.');
    }
  };

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
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-5">
                  <CheckCircle2 size={36} className="text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Request received!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thanks for reaching out. Our team will be in touch within one business day
                  with your free quote.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-brand-green font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
<input type="hidden" name="form-name" value="quote-request" />
<p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
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
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
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
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
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
                    value={form.service_type}
                    onChange={(e) => update('service_type', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Tell us about your space
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none"
                    placeholder="E.g. 3-bedroom home, fortnightly clean, preferring mornings…"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 text-red-600 bg-red-50 border border-red-100 rounded-lg p-3 text-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-full transition-all duration-200 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-0.5 disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Request Free Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
