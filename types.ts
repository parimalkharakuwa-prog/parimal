
export type Language = 'en' | 'mr';

export interface Service {
  id: string;
  nameEn: string;
  nameMr: string;
  descriptionEn: string;
  descriptionMr: string;
  icon: string;
  category: ServiceCategory;
  priority: boolean;
  ctaTextEn: string;
  ctaTextMr: string;
  docsEn?: string[];
  docsMr?: string[];
}

export enum ServiceCategory {
  LEGAL = 'Government & Legal',
  TRAVEL = 'Travel & Darshan',
  DIGITAL = 'Digital & CSC',
  UTILITY = 'Office & Utility'
}

export interface Lead {
  id: string;
  name: string;
  mobile: string;
  serviceId: string;
  timestamp: number;
  status: 'new' | 'contacted' | 'completed';
}

export interface SiteSettings {
  mobile: string;
  email: string;
  address: string;
  whatsappLink: string;
  googleMapsEmbed: string;
}
