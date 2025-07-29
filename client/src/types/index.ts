export interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
}

export interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular: boolean;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  subtitle: string;
  gradient: string;
}
