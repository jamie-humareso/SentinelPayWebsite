export interface HeroSection {
  headline: string;
  subheadline: string;
  primaryCta: CTAButton;
  secondaryCta: CTAButton;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
}

export interface FeatureSection {
  title: string;
  description: string;
  icon: string;
  features: Feature[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: CTAButton;
  popular?: boolean;
}

export interface Expert {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  expertise: string[];
  linkedin?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
