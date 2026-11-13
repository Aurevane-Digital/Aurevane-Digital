export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  discipline: 'contractors' | 'commercial' | 'logistics' | 'luxury';
  location: string;
  subdomainType: string;
  description: string;
  image?: string;
  badgeText: string;
  deliverables: string[];
  transformationDetails: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  pricePrefix?: string;
  priceNum: number;
  paymentType?: string;
  featured?: boolean;
  description: string;
  features: string[];
  bestFor: string;
  turnaround: string;
}

export interface AuditFormState {
  name: string;
  businessName: string;
  websiteUrl: string;
  email: string;
  notes: string;
  tradeType: string;
  contractSize?: string;
}

export interface AuditMetric {
  category: string;
  score: number;
  status: 'passed' | 'warning' | 'critical';
  title: string;
  finding: string;
  fix: string;
}

export interface AuditReportData {
  url: string;
  businessName: string;
  overallScore: number;
  tier: 'High Performance' | 'Moderate Leakage' | 'Critical Revenue Loss';
  summary: string;
  estimatedMissedBidsMonthly: string;
  metrics: AuditMetric[];
}
