import type { ImageMetadata } from 'astro';

import sevenPostCard from '../assets/cards/seven-post.png';
import commsecCard from '../assets/cards/commsec.png';
import notetakerCard from '../assets/cards/ai-notetaker.png';
import maiCard from '../assets/cards/mai-advisor-portal.png';
import schwabTradingCard from '../assets/cards/schwab-trading.png';
import schwabReportsCard from '../assets/cards/schwab-reports.png';
import aiDocsCard from '../assets/cards/ai-docs.png';

export type CompanyKey = 'seven-post' | 'commsec' | 'communify' | 'schwab';

export const companies: Record<CompanyKey, { name: string; url: string }> = {
  'seven-post': { name: 'Seven Post', url: 'https://sevenpost.com/' },
  commsec: { name: 'CommSec', url: 'https://www.commsec.com.au/' },
  communify: { name: 'Communify', url: 'https://www.communify.com/' },
  schwab: { name: 'Charles Schwab', url: 'https://www.schwab.com/' },
};

export interface Project {
  slug: string;
  title: string;
  description: string;
  company: CompanyKey;
  role: string;
  tags: string[];
  /** "Field" column of the table view. */
  field: string;
  date: string;
  card: ImageMetadata;
  /** Who the work was for, shown under the company mark. */
  byline: string;
  /** Headline result shown on cards. */
  outcome: string;
  /** Featured projects get large cards on home; the rest go in the compact list. */
  featured: boolean;
  /** One-line summary shown in the home "My Work" list (from the Figma design). */
  blurb: string;
  /** Shorter title for the home work list, when it differs. */
  shortTitle?: string;
}

/** Source order; the home list uses homeOrder below. */
export const projects: Project[] = [
  {
    slug: 'project-7-ai-design-documentation',
    title: 'AI-Powered Design Documentation',
    description:
      'Built a repeatable Claude + Figma workflow that turns annotated designs into a complete build book, making documentation about 10x faster.',
    company: 'communify',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'AI Automation', 'Design Ops', 'Claude Code + Figma'],
    field: 'AI, Design Ops',
    date: 'Fall 2026',
    card: aiDocsCard,
    byline: 'Communify',
    outcome: 'Documentation 10x faster · 62-page build book',
    featured: true,
    blurb: 'Documentation 10x faster with Claude & Figma.',
  },
  {
    slug: 'project-1-seven-post-client-portal',
    title: 'Client Portal for Mid-market Financial Advisory',
    description:
      'Led the 0-to-1 design of a wealth client portal, launched in under 9 months and now carrying $10B in assets and $1.5M ARR.',
    company: 'seven-post',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Fintech', 'Figma'],
    field: 'Fintech',
    date: 'June 2025 - February 2026',
    card: sevenPostCard,
    byline: 'Seven Post',
    outcome: '$10B AUM managed digitally · $1.5M ARR · launched in under 9 months',
    featured: true,
    blurb: '$10B AUM managed digitally, $1.5M ARR.',
  },
  {
    slug: 'project-2-commsec',
    title: 'Markets Research Experience for Australian Bank',
    description:
      'Designed a markets research experience for an Australian bank, bringing data-dense research to its customers.',
    company: 'commsec',
    role: 'Product Design',
    tags: ['Product Design', 'International', 'Fintech', 'Figma'],
    field: 'International, Fintech',
    date: 'August - December 2023',
    card: commsecCard,
    byline: 'CommSec',
    outcome: '$750K ARR · 3M customers · brand-new design system',
    featured: true,
    blurb: '$750K ARR, 3M customers. Brand-new design system.',
  },
  {
    slug: 'project-4-ai-notetaker',
    title: 'AI Note Taking For Financial Advisors',
    description:
      'Designed an AI assistant that records and transcribes meetings in real time and turns them into approved action items and CRM updates.',
    company: 'communify',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Fintech', 'AI', 'Figma'],
    field: 'Fintech, AI',
    date: 'February 2026',
    card: notetakerCard,
    byline: 'Communify',
    outcome: 'New AI product line, configurable for any advisory client',
    featured: true,
    blurb: 'New AI product line, configurable for any advisory client.',
  },
  {
    slug: 'project-3-mai-advisor-portal',
    title: 'AI-Driven Advisor Portal for MAI Capital Management',
    description:
      'Led design of a fully revamped, AI-driven advisor portal for an $80B wealth manager, and built the 100+ screen prototype the whole deal team presented from.',
    company: 'communify',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Prototyping', 'Fintech', 'AI', 'Figma'],
    field: 'Prototyping, Fintech, AI',
    date: '2025 - 2026',
    card: maiCard,
    byline: 'Communify',
    outcome: '$80.4B wealth manager · 100+ screen prototype · 2,300+ interactions',
    featured: true,
    shortTitle: 'AI-Driven Advisor Portal',
    blurb: 'One of Communify’s largest deals. A 100+ screen prototype with 2,300+ interactions.',
  },
  {
    slug: 'project-5-schwab-trading',
    title: 'Responsive Retail Trading Platform',
    description:
      'Defined responsive rules for 30+ data-heavy modules, helping take the research section from beta to production.',
    company: 'schwab',
    role: 'Product Design',
    tags: ['Product Design', 'Fintech', 'Figma'],
    field: 'Fintech',
    date: 'February 2024',
    card: schwabTradingCard,
    byline: 'Charles Schwab',
    outcome: 'Responsive rules for 30+ modules, beta to production',
    featured: false,
    blurb: 'Responsive rules for 30+ modules, beta to production.',
  },
  {
    slug: 'project-6-schwab-reports',
    title: 'Managed Account Reports Redesign',
    description: 'Redesigned outdated managed-account reports, grounded in UX research.',
    company: 'schwab',
    role: 'Product Design',
    tags: ['Product Design', 'UX Research', 'Fintech', 'Figma'],
    field: 'UX Research, Fintech',
    date: 'June 2024',
    card: schwabReportsCard,
    byline: 'Charles Schwab',
    outcome: 'Phase 1 shipped in 10 weeks · web rollout in Phase 2',
    featured: true,
    blurb: 'Phase 1 shipped in 10 weeks, web rollout in Phase 2.',
  },
];

/** Order of the home "My Work" list, matching the Figma design. */
export const homeOrder = ['project-7-ai-design-documentation','project-4-ai-notetaker','project-3-mai-advisor-portal','project-1-seven-post-client-portal','project-2-commsec','project-5-schwab-trading','project-6-schwab-reports'];

export function getProject(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project ${slug}`);
  return p;
}

export const contact = {
  email: 'jeremyhamann87@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jeremy-hamann1',
  art: 'https://www.jeremyhamann.com',
  instagram: 'https://www.instagram.com/jeremyhamann.art/',
  medium: 'https://medium.com/@jeremyhamann87',
  resumePdf: '/Jeremy-Hamann-Resume.pdf',
  /** Digits only with country code, e.g. '+15125550123'. The Call button stays hidden while this is empty. */
  phone: '+15125450695',
  phoneDisplay: '512-545-0695',
  location: 'Longmont, Colorado',
};
