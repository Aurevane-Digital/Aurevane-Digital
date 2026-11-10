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
    domain: 'junkbolt-logistics.com',
    subdomainType: 'Fleet Dispatch & Volume Estimator',
    description:
      'Replacing chaotic phone bidding with an interactive truck volume visualizer and automated fleet dispatch calendar. Turned commodity hauling into a clean, premium trade service.',
    image: getFrameUrl(1),
    badgeText: 'Interactive Visualizer • View Architecture',
    stats: [
      { label: 'Online Direct Bookings', value: '3.4x' },
      { label: 'Phone Intake Overhead', value: '-40%' },
      { label: 'Avg Ticket Value', value: '$485' },
      { label: 'Diversion Rate', value: '78%' },
    ],
    clientQuote: {
      quote:
        'The truck volume calculator alone transformed our operations. Homeowners now book and prepay online because they can see exactly what they are paying for.',
      author: 'Tyler Briggs',
      role: 'Founder, Junk Bolt Logistics',
    },
    deliverables: [
      'Interactive 3D/Cubic Truck Volume Calculator',
      'Real-Time Territory Route Verification',
      'Eco-Diversion Certificate Generation',
      'Automated Crew Routing & SMS Confirmation',
    ],
    transformationDetails: {
      challenge:
        'Hauling services are notoriously plagued by price shopping and lengthy customer calls trying to estimate debris volumes, eating up crew dispatch time.',
      solution:
        'Designed an interactive visual truck bed calculator (1/4 bed, 1/2 bed, full bed) with instant upfront pricing, eliminating friction and establishing trust instantly.',
      impact:
        'Direct online bookings rose 3.4x, reducing dispatch phone hours by 40% while raising average ticket values.',
    },
  },
  {
    id: 'vision-excavation',
    number: '02',
    title: 'Vision Excavation',
    category: 'Excavation & Construction',
    discipline: 'commercial',
    location: '',
    domain: 'visionexcavation.com',
    subdomainType: 'Heavy Civil Earthworks & Site Prep',
    description:
      'Turnkey digital platform for residential and commercial earthworks. Engineered around instant project scope estimators, GPS-backed site preparation galleries, and commercial tender intake.',
    image: getFrameUrl(150),
    badgeText: 'Heavy Earthworks • View Blueprint',
    stats: [
      { label: 'Direct Bid Volume', value: '$2.4M' },
      { label: 'Mobile Conversion', value: '94%' },
      { label: 'Bid Preparation Time', value: '-65%' },
      { label: 'Equipment Fleet Index', value: '100%' },
    ],
    clientQuote: {
      quote:
        'Developers and custom home builders take one look at our digital platform and immediately recognize our scale and safety standards.',
      author: 'Cole MacIntyre',
      role: 'Managing Director, Vision Excavation',
    },
    deliverables: [
      'Architectural Heavy Equipment Fleet Showcase',
      '2-Step Instant Earthwork Scope Estimator',
      'Subcontractor Prequalification Portal',
      'Safety Certification & Operator Accreditation Badges',
    ],
    transformationDetails: {
      challenge:
        'Commercial general contractors and estate builders needed immediate verification of machine capacity, operator certifications, and turnaround guarantees.',
      solution:
        'Crafted an authoritative, rugged editorial layout featuring high-contrast job site captures and a streamlined RFP intake system.',
      impact:
        'Delivered $2.4M in direct project bid opportunities within the first four months of deployment.',
    },
  },
  {
    id: 'james-iron-steel',
    number: '03',
    title: 'James Iron and Steel',
    category: 'Steel & Metal Services',
    discipline: 'commercial',
    location: '',
    domain: 'jamesironsteel.com',
    subdomainType: 'Structural Fabrication & Architectural Iron',
    description:
      'Seven decades of unyielding structural fabrication, ornamental iron craft, and certified commercial steel across regional construction sectors.',
    image: getFrameUrl(185),
    badgeText: 'AISC Certified • View Specification',
    stats: [
      { label: 'Commercial RFPs', value: '+180%' },
      { label: 'Tender Close Rate', value: '38%' },
      { label: 'AISC Certification', value: 'Level 1' },
      { label: 'Avg Project Size', value: '$65,000' },
    ],
    clientQuote: {
      quote:
        'Aurevane created a digital presence that matches the monumental scale of our physical steel manufacturing. Our bids stand out immediately to engineering firms.',
      author: 'Marcus James',
      role: 'President, James Iron & Steel',
    },
    deliverables: [
      'AISC Structural Fabrication Specification Portal',
      'Ornamental Ironwork Archival Portfolio',
      'Interactive Commercial Tender Spec Downloader',
      'Live Estimating Hotline Integration',
    ],
    transformationDetails: {
      challenge:
        'Heavy industrial tenders were being lost to national conglomerates because the previous digital footprint looked like a generic local blacksmith.',
      solution:
        'Rebuilt the firm with architectural typography, crane-scale project galleries, and institutional credential signaling.',
      impact:
        'Commercial RFP submissions increased by 180% with an average project contract size exceeding $65,000.',
    },
  },
  {
    id: 'action-electrical',
    number: '04',
    title: 'Action Electrical',
    category: 'Electrical Services',
    discipline: 'commercial',
    location: '',
    domain: 'actionelectrical-tx.com',
    subdomainType: 'Commercial Electrical & Mechanical Contracting',
    description:
      'Licensed commercial electrical and mechanical contractors serving regional facilities with engineered reliability, 24/7 emergency MEP service, and turnkey switchgear installation.',
    image: getFrameUrl(218),
    badgeText: 'Industrial Authority • View Specification',
    stats: [
      { label: 'Direct Bid Pipeline', value: '$1.8M' },
      { label: 'Mobile Form Completion', value: '99.8%' },
      { label: 'Response Latency', value: '< 15min' },
      { label: 'Facility Contracts', value: '14 Active' },
    ],
    clientQuote: {
      quote:
        'Enterprise data centers and manufacturing plants vetting us demand instant proof of safety compliance and emergency response capability. Aurevane delivered a masterclass in industrial digital trust.',
      author: 'Elena Rostova',
      role: 'VP Operations, Action Electrical',
    },
    deliverables: [
      'Safety Compliance & OSHA EMR Scoreboard',
      'Interactive 24/7 Grid Emergency Dispatch Portal',
      'Multi-Phase RFP Spec Download System',
      'Turnkey Industrial Capabilities Architecture',
    ],
    transformationDetails: {
      challenge:
        'Vetting commercial general contractors and plant procurement teams required heavy technical documentation that was previously trapped in static email attachments.',
      solution:
        'We engineered an authoritative industrial portal highlighting live OSHA safety rates, switchgear diagnostics, and a streamlined tender submission flow.',
      impact:
        'Generated $1.8M in qualified direct bid RFP submissions within the initial 90 days after deployment.',
    },
  },
  {
    id: 'storm-shield',
    number: '05',
    title: 'Storm Shield',
    category: 'Roofing & Exterior Services',
    discipline: 'contractors',
    location: '',
    domain: 'stormshield-exteriors.com',
    subdomainType: 'Flagship Contractor & Insurance Restoration',
    description:
      'We protect your home like its our own. High-precision drone imagery, military-grade shingle specifications, storm hail damage claims expertise, and an automated free inspection dispatch flow.',
    image: getFrameUrl(285),
    badgeText: 'Featured Transformation • View Case Details',
    stats: [
      { label: 'Qualified Inspections', value: '+214%' },
      { label: 'Mobile Load Index', value: '0.6s' },
      { label: 'Average Claim Size', value: '$24,500' },
      { label: 'Form Completion Rate', value: '88.4%' },
    ],
    clientQuote: {
      quote:
        'Homeowners booking our $30k+ architectural roof replacements stopped haggling over pricing. They told us directly our website felt like a boutique engineering firm.',
      author: 'David Vance',
      role: 'Principal, Storm Shield',
    },
    deliverables: [
      'Bespoke Architecture with Drone Scan Gallery',
      'Automated Hail & Storm Date Verification Tool',
      'Interactive Shingle Class & Warranty Visualizer',
      'Instant SMS Lead Notification Pipeline',
      'Premium Exterior Restoration Showcase',
    ],
    transformationDetails: {
      challenge:
        'Storm Shield was generating substantial word-of-mouth reputation, but their outdated template site was losing high-end homeowners to competitors with slicker presentation.',
      solution:
        'Aurevane dismantled the template clutter, establishing an architectural aesthetic with full-bleed captures, clear warranty tiers (Class 4 Impact Resistant), and a 2-step mobile inspection scheduler.',
      impact:
        'Inspection requests surged by 214% in the first quarter post-launch, while conversion on insurance restoration claims more than tripled.',
    },
  },
];
