import type { ImageMetadata } from 'astro';

import sevenPostCard from '../assets/cards/seven-post.png';
import commsecCard from '../assets/cards/commsec.png';
import notetakerCard from '../assets/cards/ai-notetaker.png';
import advisorCard from '../assets/cards/advisor-portal.png';
import schwabTradingCard from '../assets/cards/schwab-trading.png';
import schwabReportsCard from '../assets/cards/schwab-reports.png';

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
}

/** Order matches the home page grid. */
export const projects: Project[] = [
  {
    slug: 'project-1-seven-post-client-portal',
    title: 'Client Portal for Mid-market Financial Advisory',
    description:
      'Led the 0-to-1 design of a wealth client portal, launched in under 9 months and now carrying $10B in assets and $1.5M ARR.',
    company: 'seven-post',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Fintech'],
    field: 'Fintech',
    date: 'June 2025 - February 2026',
    card: sevenPostCard,
  },
  {
    slug: 'project-2-commsec',
    title: 'Markets Research Experience for Australian Bank',
    description:
      'Designed a markets research experience for an Australian bank, bringing data-dense research to its customers.',
    company: 'commsec',
    role: 'Product Design',
    tags: ['Product Design', 'International', 'Fintech'],
    field: 'International, Fintech',
    date: 'August - December 2023',
    card: commsecCard,
  },
  {
    slug: 'project-4-ai-notetaker',
    title: 'AI Note Taking For Financial Advisors',
    description:
      'Designed an AI assistant that records and transcribes meetings in real time and turns them into approved action items and CRM updates.',
    company: 'communify',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Fintech', 'AI'],
    field: 'Fintech, AI',
    date: 'February 2026',
    card: notetakerCard,
  },
  {
    slug: 'project-3-advisor-dashboard',
    title: 'Client-Relationship Advisor Portal',
    description:
      'Led design of the advisor workspace for managing client relationships on Communify’s advisory platform.',
    company: 'communify',
    role: 'Lead Product Design',
    tags: ['Lead Product Design', 'Fintech'],
    field: 'Fintech',
    date: 'September 2025',
    card: advisorCard,
  },
  {
    slug: 'project-5-schwab-trading',
    title: 'Responsive Retail Trading Platform',
    description:
      'Defined responsive rules for 30+ data-heavy modules, helping take the research section from beta to production.',
    company: 'schwab',
    role: 'Product Design',
    tags: ['Product Design', 'Fintech'],
    field: 'Fintech',
    date: 'February 2024',
    card: schwabTradingCard,
  },
  {
    slug: 'project-6-schwab-reports',
    title: 'Managed Account Reports Redesign',
    description: 'Redesigned outdated managed-account reports, grounded in UX research.',
    company: 'schwab',
    role: 'Product Design',
    tags: ['Product Design', 'UX Research', 'Fintech'],
    field: 'UX Research, Fintech',
    date: 'June 2024',
    card: schwabReportsCard,
  },
];

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
};
