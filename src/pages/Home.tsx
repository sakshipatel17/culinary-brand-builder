import SEO from '../components/SEO';
import HeroSection from '../sections/HeroSection';
import MissionSection from '../sections/MissionSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import NewsletterSection from '../sections/NewsletterSection';

function Home() {
  return (
    <>
      <SEO title="Heirloom Culinary | Premium Food Consultancy" description="Luxury food consultancy for restaurants and culinary brands seeking elevated strategy, service, and growth." />
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}

export default Home;
