import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServiceLanding, { servicePages } from '@/components/ServiceLanding';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const servicePage = servicePages[path];
  return servicePage ? <ServiceLanding page={servicePage} /> : <HomePage />;
}
