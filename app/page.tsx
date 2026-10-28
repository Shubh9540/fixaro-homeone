import rawData from '@/data/templates.json';
import { HomeOneTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactUs } from '@/components/sections/ContactUs';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: HomeOneTemplateData = rawData;
  const sectionData = templateData.categories.HomeOne.sections;
  const commonData = templateData.common;

  if (!sectionData || !commonData) {
    return <div className="p-6 text-[var(--color-text)]">{templateData.common.globalUI.loadingText}</div>;
  }

  return (
    <main className="min-h-screen w-full bg-[var(--color-bg-light)]">
      <Header data={sectionData.Header.variants.FixaroHeader2} />
      <Hero data={sectionData.Hero.variants.FixaroHero2} />
      <AboutUs data={sectionData.AboutUs.variants.FixaroAboutUs2} />
      <Services data={sectionData.Services.variants.FixaroServices2} />
      <WhyChooseUs data={sectionData.WhyChooseUs.variants.FixaroWhyChooseUs2} />
      <Team data={sectionData.Team.variants.FixaroTeam2} />
      <Testimonials data={sectionData.Testimonials.variants.FixaroTestimonials2} />
      <ContactUs data={sectionData.ContactUs.variants.FixaroContactUs2} />
      <Footer data={commonData.Footer.variants.FixaroFooter2} />
    </main>
  );
}
