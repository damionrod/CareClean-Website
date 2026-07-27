import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

const points = [
  'Owner operated & personally managed',
  'Over 9 years of industry experience',
  'Security vetted & fully insured',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/ChatGPT_Image_Jul_17,_2026,_10_49_54_PM.png"
          alt="The CareClean team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/90 via-brand-navy/70 to-brand-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 backdrop-blur-sm border border-brand-green/40 text-brand-green-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Star size={14} className="fill-brand-green-light text-brand-green-light" />
            5-star rated cleaning service
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-balance">
            Clean Spaces. Healthy Places.
            <span className="block text-brand-green-light">Happy Faces.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
            Professional commercial & residential cleaning services in Wellington and
            surrounding areas. Reliable, high-quality cleaning tailored to your needs.
          </p>

          <ul className="mt-8 flex flex-col sm:flex-row gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <CheckCircle2 size={18} className="text-brand-green-light shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-7 py-4 rounded-full transition-all duration-200 shadow-lg shadow-brand-green/20 hover:shadow-brand-green/40 hover:-translate-y-0.5"
            >
              Request Your Free Quote Today
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-4 rounded-full transition-all duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
