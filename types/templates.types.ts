import type { CSSProperties, ReactNode } from 'react';

export interface GlobalUIData {
  loadingText: string;
  notFoundTitle: string;
  notFoundDescription: string;
  backHomeLabel: string;
  backHomeUrl: string;
}

export interface MetadataData {
  title: string;
  description: string;
  icon: string;
  language: string;
}

export interface ThemeData {
  fontStylesheet: string;
  fontPrimary: string;
  fontHeading: string;
}

export interface ThemeStyle extends CSSProperties {
  '--font-primary': string;
  '--font-heading': string;
}

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  navLinks: NavLink[];
  ctaLabel: string;
  ctaUrl: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
}

export interface HeroSlide {
  id: string;
  bgImage: string;
  subtitleText: string;
  subtitleSuffix: string;
  titleLine1: string;
  titleLine2Highlight: string;
  titleLine2Text: string;
  description: string;
}

export interface HeroData {
  id: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
  goToSlideLabel: string;
  slides: HeroSlide[];
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  experienceValue: string;
  experienceLabel: string;
  principlesLabel: string;
  features: FeatureItem[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServicesData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
}

export interface WhyChooseItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLabel: string;
  items: WhyChooseItem[];
}

export interface SocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  specialty: string;
  socialLinks: SocialLink[];
}

export interface TeamData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  service: string;
  initials: string;
}

export interface TestimonialsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  items: TestimonialItem[];
}

export interface ContactDetail {
  id: string;
  icon: string;
  label: string;
  value: string;
  url: string;
}

export interface ContactField {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  isTextarea?: boolean;
  isFullWidth?: boolean;
}

export interface ContactUsData {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  details: ContactDetail[];
  formTitle: string;
  formDescription: string;
  fields: ContactField[];
  submitLabel: string;
  image: string;
  imageAlt: string;
}

export interface FooterLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyright: string;
}

export interface PageComponentData {
  id: string;
  key: string;
  component: string;
}

export interface PageRegistryData {
  id: string;
  path: string;
  components: PageComponentData[];
}

export interface HomeOneTemplateData {
  common: {
    globalUI: GlobalUIData;
    metadata: MetadataData;
    theme: ThemeData;
    Footer: {
      variants: {
        FixaroFooter2: FooterData;
      };
    };
  };
  categories: {
    HomeOne: {
      pages: {
        home: PageRegistryData;
        notFound: PageRegistryData;
      };
      sections: {
        Header: { variants: { FixaroHeader2: HeaderData } };
        Hero: { variants: { FixaroHero2: HeroData } };
        AboutUs: { variants: { FixaroAboutUs2: AboutUsData } };
        Services: { variants: { FixaroServices2: ServicesData } };
        WhyChooseUs: { variants: { FixaroWhyChooseUs2: WhyChooseUsData } };
        Team: { variants: { FixaroTeam2: TeamData } };
        Testimonials: { variants: { FixaroTestimonials2: TestimonialsData } };
        ContactUs: { variants: { FixaroContactUs2: ContactUsData } };
      };
    };
  };
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface TeamProps {
  data?: TeamData;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface ContactUsProps {
  data?: ContactUsData;
}

export interface FooterProps {
  data?: FooterData;
}

export interface RootLayoutProps {
  children: ReactNode;
}
