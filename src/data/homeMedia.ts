import heroTradesPoster from '../assets/images/hero_trades_cinematic_1794567631139.jpg';
import roofingImg from '../assets/images/industry_roofing_1794567631562.jpg';
import excavationImg from '../assets/images/industry_excavation_1794567632703.jpg';
import junkRemovalImg from '../assets/images/industry_junk_removal_1794567632834.jpg';
import electricalImg from '../assets/images/industry_electrical_1794567632856.jpg';
import fenceDeckImg from '../assets/images/industry_fence_deck_1794567633149.jpg';
import generalContractorImg from '../assets/images/industry_general_contractor_1794567634634.jpg';
import landscapingImg from '../assets/images/industry_landscaping_1794567633924.jpg';
import homeImprovementImg from '../assets/images/industry_home_improvement_1794567635193.jpg';

export const HERO_POSTER_IMAGE = heroTradesPoster;

export interface IndustryBentoItem {
  id: string;
  title: string;
  subtitle: string;
  to: string;
  image: string;
  alt: string;
  featured?: boolean;
  spanClass: string;
}

export const HOME_INDUSTRIES_BENTO: IndustryBentoItem[] = [
  {
    id: 'roofing',
    title: 'Roofing',
    subtitle: 'Storm-claim intake funnels and shingle class galleries that convert urgent roof inspections into signed jobs.',
    to: '/contractor-website-design',
    image: roofingImg,
    alt: 'Matte black standing seam metal roof and architectural slate installation at twilight',
    featured: true,
    spanClass: 'md:col-span-12 lg:col-span-8',
  },
  {
    id: 'excavation',
    title: 'Excavation',
    subtitle: 'Heavy equipment showcases and site-scope estimators structured for commercial GC prequalification.',
    to: '/excavation-website-design',
    image: excavationImg,
    alt: 'Commercial excavator operating on a graded foundation site under amber dusk lighting',
    spanClass: 'md:col-span-6 lg:col-span-4',
  },
  {
    id: 'junk-removal',
    title: 'Junk Removal',
    subtitle: 'Visual truck-volume selectors and ZIP dispatch booking engineered to fill daily hauling routes.',
    to: '/junk-removal-website-design',
    image: junkRemovalImg,
    alt: 'Commercial hauling truck parked neatly on a clean concrete driveway at dawn',
    spanClass: 'md:col-span-6 lg:col-span-4',
  },
  {
    id: 'electrical',
    title: 'Electrical',
    subtitle: 'Service-upgrade funnels and licensed credential clarity for panel changes, EV installs, and commercial MEP.',
    to: '/electrical-contractor-website-design',
    image: electricalImg,
    alt: 'Precision matte black electrical switchgear panel and warm linear recessed architectural lighting',
    spanClass: 'md:col-span-12 lg:col-span-8',
  },
  {
    id: 'fence-installation',
    title: 'Fence Installation',
    subtitle: 'Material comparators and linear-footage quote builders that pre-qualify residential property owners.',
    to: '/our-work',
    image: fenceDeckImg,
    alt: 'Architectural horizontal cedar and matte black steel privacy fence illuminated along a stone walkway',
    spanClass: 'md:col-span-6 lg:col-span-6',
  },
  {
    id: 'general-contracting',
    title: 'General Contracting',
    subtitle: 'Architectural project archives and structured bid intakes designed for high-ticket custom builds.',
    to: '/general-contractor-website-design',
    image: generalContractorImg,
    alt: 'Custom timber frame and board-formed concrete residence under architectural floodlights at dusk',
    spanClass: 'md:col-span-6 lg:col-span-6',
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    subtitle: 'Hardscaping portfolios and outdoor-living consultation flows built for multi-season estate contracts.',
    to: '/our-work',
    image: landscapingImg,
    alt: 'Modern basalt stone terrace steps and ornamental grasses under warm twilight path lighting',
    spanClass: 'md:col-span-6 lg:col-span-6',
  },
  {
    id: 'home-improvement',
    title: 'Home Improvement',
    subtitle: 'Room-by-room remodeling galleries and scope-first consultation funnels for kitchens, baths, and exteriors.',
    to: '/home-services-website-design',
    image: homeImprovementImg,
    alt: 'Honed soapstone kitchen island and smoked oak architectural millwork under warm pendant lighting',
    spanClass: 'md:col-span-6 lg:col-span-6',
  },
];
