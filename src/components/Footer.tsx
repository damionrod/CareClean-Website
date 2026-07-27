import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/images/Careclean1-100.jpg"
              alt="CareClean"
              className="h-12 w-auto rounded mb-4"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              CareClean is a proudly New Zealand owned and owner-operated cleaning company
              delivering professional commercial and residential cleaning across the
              Wellington region.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-green flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-brand-green-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-brand-green-light shrink-0" />
                <a href="tel:+6421123456" className="hover:text-brand-green-light transition-colors">
                  +64 21 123 456
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-brand-green-light shrink-0" />
                <a href="mailto:info@careclean.co.nz" className="hover:text-brand-green-light transition-colors">
                  info@careclean.co.nz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-brand-green-light shrink-0 mt-0.5" />
                <span>Wellington & surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CareClean. All rights reserved.</p>
          <p>Clean spaces. Healthy places. Happy faces.</p>
        </div>
      </div>
    </footer>
  );
}
