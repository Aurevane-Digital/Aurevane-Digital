import { CaseStudy } from '../types';
import { getFrameUrl } from '../utils/frames';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'junk-bolt',
    number: '01',
    title: 'Junk Bolt',
    category: 'Junk Removal & Hauling',
    discipline: 'logistics',
    location: '',
    subdomainType: 'Fleet Dispatch & Volume Estimator',
    description:
      'Replacing chaotic phone bidding with an interactive truck volume visualizer and automated fleet dispatch calendar. Turned commodity hauling into a clean, premium trade service.',
    image: getFrameUrl(1),
    badgeText: 'Interactive Visualizer • View Architecture',
    deliverables: [
      'Interactive 3D/Cubic Truck Volume Calculator',
      'Real-Time Territory Route Verification',
      'Eco-Diversion Certificate Generation',
      'Automated Crew Routing & SMS Confirmation',
    ],
    transformationDetails: {
      challenge:
        'Hauling services frequently experience price shopping and lengthy customer calls trying to estimate debris volumes prior to dispatch.',
      solution:
        'Engineered an interactive visual truck bed calculator (1/4 bed, 1/2 bed, full bed) with upfront pricing and territory route verification.',
      impact:
        'Provides a streamlined self-service estimate interface that qualifies debris volume before crew scheduling.',
    },
  },
  {
    id: 'vision-excavation',
    number: '02',
    title: 'Vision Excavation',
    category: 'Excavation & Construction',
    discipline: 'commercial',
    location: '',
    subdomainType: 'Heavy Civil Earthworks & Site Prep',
    description:
      'Turnkey digital platform for residential and commercial earthworks. Engineered around instant project scope estimators, GPS-backed site preparation galleries, and commercial tender intake.',
    image: getFrameUrl(150),
    badgeText: 'Heavy Earthworks • View Blueprint',
    deliverables: [
      'Architectural Heavy Equipment Fleet Showcase',
      '2-Step Instant Earthwork Scope Estimator',
      'Subcontractor Prequalification Portal',
      'Safety Certification & Operator Accreditation Badges',
    ],
    transformationDetails: {
      challenge:
        'Commercial general contractors and estate builders require immediate verification of machine capacity, operator certifications, and safety standards.',
      solution:
        'Crafted an authoritative, rugged editorial layout featuring high-contrast job site captures and a structured tender intake flow.',
      impact:
        'Equips earthworks contractors with an institutional-grade presentation designed for commercial prequalification and site scope evaluation.',
    },
  },
  {
    id: 'james-iron-steel',
    number: '03',
    title: 'James Iron and Steel',
    category: 'Steel & Metal Services',
    discipline: 'commercial',
    location: '',
    subdomainType: 'Structural Fabrication & Architectural Iron',
    description:
      'Structural fabrication, ornamental iron craft, and certified commercial steel across regional construction sectors.',
    image: getFrameUrl(185),
    badgeText: 'AISC Certified • View Specification',
    deliverables: [
      'AISC Structural Fabrication Specification Portal',
      'Ornamental Ironwork Archival Portfolio',
      'Interactive Commercial Tender Spec Downloader',
      'Live Estimating Hotline Integration',
    ],
    transformationDetails: {
      challenge:
        'Heavy industrial tenders require clear technical documentation that often gets lost within generic industrial web templates.',
      solution:
        'Constructed an architectural presence emphasizing AISC fabrication standards, certified metallurgy, and crane-scale project galleries.',
      impact:
        'Positions the steel firm as a certified structural manufacturing partner equipped for commercial architectural tenders.',
    },
  },
  {
    id: 'action-electrical',
    number: '04',
    title: 'Action Electrical',
    category: 'Electrical Services',
    discipline: 'commercial',
    location: '',
    subdomainType: 'Commercial Electrical & Mechanical Contracting',
    description:
      'Commercial electrical and mechanical contractors serving regional facilities with engineered reliability, 24/7 emergency MEP service, and turnkey switchgear installation.',
    image: getFrameUrl(218),
    badgeText: 'Industrial Authority • View Specification',
    deliverables: [
      'Safety Compliance & OSHA EMR Scoreboard',
      'Interactive 24/7 Grid Emergency Dispatch Portal',
      'Multi-Phase RFP Spec Download System',
      'Turnkey Industrial Capabilities Architecture',
    ],
    transformationDetails: {
      challenge:
        'Facility procurement teams and enterprise operators vetting MEP contractors require rapid access to safety documentation and emergency response protocols.',
      solution:
        'Engineered an industrial portal showcasing critical switchgear diagnostics, safety compliance verifications, and an emergency dispatch channel.',
      impact:
        'Provides facility managers and commercial general contractors with an efficient technical qualification and RFP dispatch gateway.',
    },
  },
  {
    id: 'storm-shield',
    number: '05',
    title: 'Storm Shield',
    category: 'Roofing & Exterior Services',
    discipline: 'contractors',
    location: '',
    subdomainType: 'Flagship Contractor & Insurance Restoration',
    description:
      'High-precision drone imagery, military-grade shingle specifications, storm hail damage claims expertise, and an automated inspection dispatch flow.',
    image: getFrameUrl(285),
    badgeText: 'Featured Transformation • View Case Details',
    deliverables: [
      'Bespoke Architecture with Drone Scan Gallery',
      'Automated Hail & Storm Date Verification Tool',
      'Interactive Shingle Class & Warranty Visualizer',
      'Instant SMS Lead Notification Pipeline',
      'Premium Exterior Restoration Showcase',
    ],
    transformationDetails: {
      challenge:
        'Exterior contractors often face skepticism and low homeowner trust when competing against standard storm restoration sales operations.',
      solution:
        'Established an architectural aesthetic with full-bleed drone captures, clear warranty tiers (Class 4 Impact Resistant), and a 2-step inspection scheduler.',
      impact:
        'Differentiates residential restoration services through technical transparency, material qualification guides, and structured booking workflows.',
    },
  },
];
