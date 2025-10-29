import Link from 'next/link';
import { Metadata } from 'next';
import GradientIcon from '@/components/GradientIcon';
import { 
  faWrench, 
  faPhone, 
  faCheckCircle, 
  faExclamationTriangle,
  faCog,
  faShieldAlt,
  faRocket,
  faClock
} from '@fortawesome/free-solid-svg-icons';

// City data with content variations
const cityData: Record<string, {
  name: string;
  state: string;
  slug: string;
  heroSubhead: string;
  localParagraph: string;
  issues: string[];
  ctaHeadline: string;
  ctaButton: string;
  footerNote: string;
  faqs: Array<{question: string; answer: string}>;
  indexable: boolean;
  wordCount: number;
}> = {
  'new-york-ny': {
    name: 'New York',
    state: 'NY',
    slug: 'new-york-ny',
    heroSubhead: 'Same day WordPress fixes for New York businesses.',
    localParagraph: 'In New York, many restaurants and professional services depend on steady online traffic. If your site stalls, orders and inquiries do too. We handle rapid repairs and stabilization, then tune speed so customers near Midtown and Financial District get a smooth experience on mobile and desktop.',
    issues: ['White screen of death', 'Plugin or PHP errors', 'Malware or hack cleanup', 'Slow or unresponsive site'],
    ctaHeadline: 'Get back online fast in New York',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across New York and nearby areas.',
    faqs: [
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' }
    ],
    indexable: true,
    wordCount: 85
  },
  'los-angeles-ca': {
    name: 'Los Angeles',
    state: 'CA',
    slug: 'los-angeles-ca',
    heroSubhead: 'Fast repairs, updates, and hardening for sites in Los Angeles.',
    localParagraph: 'Customers in Los Angeles check websites before they call. We fix crashes, plugin errors, and security issues, then set up backups and updates so you avoid repeat downtime. From Downtown LA to Santa Monica, we keep local sites quick and trustworthy for search and conversions.',
    issues: ['Broken layout after updates', 'Forms not sending', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Ready for a stable WordPress site in Los Angeles?',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Los Angeles and nearby areas.',
    faqs: [
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' }
    ],
    indexable: true,
    wordCount: 78
  },
  'chicago-il': {
    name: 'Chicago',
    state: 'IL',
    slug: 'chicago-il',
    heroSubhead: 'Keep your Chicago site online, secure, and quick.',
    localParagraph: 'Busy teams in Chicago need a site that just works. We diagnose the root cause, repair the issue, and harden WordPress against future problems. That means fewer support headaches for contractors and healthcare around The Loop and nearby corridors like River North.',
    issues: ['White screen of death', 'Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending'],
    ctaHeadline: 'Fix it today and prevent repeats',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Chicago and nearby areas.',
    faqs: [
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' }
    ],
    indexable: true,
    wordCount: 82
  },
  'houston-tx': {
    name: 'Houston',
    state: 'TX',
    slug: 'houston-tx',
    heroSubhead: 'Emergency repairs and ongoing maintenance for Houston owners.',
    localParagraph: 'If your site is slow or broken, rankings and conversions suffer. We fix the core problem, reduce load times, and make forms convert. Owners across Houston near Galleria and Energy Corridor see the difference quickly on phones and checkout pages.',
    issues: ['Plugin or PHP errors', 'Broken layout after updates', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Get back online fast in Houston',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Houston and nearby areas.',
    faqs: [
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' }
    ],
    indexable: true,
    wordCount: 79
  },
  'phoenix-az': {
    name: 'Phoenix',
    state: 'AZ',
    slug: 'phoenix-az',
    heroSubhead: 'From hacks to slowdowns, we stabilize WordPress in Phoenix.',
    localParagraph: 'Security matters. We remove malware, clean injected code, and lock down logins. After repairs, we enable monitoring and backups so Phoenix businesses can focus on work, not WordPress. We regularly serve clients around Downtown Phoenix and Scottsdale Waterfront.',
    issues: ['Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending', 'Theme and CSS conflicts'],
    ctaHeadline: 'Ready for a stable WordPress site in Phoenix?',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Phoenix and nearby areas.',
    faqs: [
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' }
    ],
    indexable: true,
    wordCount: 81
  },
  'philadelphia-pa': {
    name: 'Philadelphia',
    state: 'PA',
    slug: 'philadelphia-pa',
    heroSubhead: 'Professional WordPress repair in Philly.',
    localParagraph: 'In Philadelphia, many legal and medical practices depend on steady online traffic. If your site stalls, orders and inquiries do too. We handle rapid repairs and stabilization, then tune speed so customers near Center City and University City get a smooth experience on mobile and desktop.',
    issues: ['White screen of death', 'Plugin or PHP errors', 'Malware or hack cleanup', 'Slow or unresponsive site'],
    ctaHeadline: 'Get back online fast in Philadelphia',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Philadelphia and nearby areas.',
    faqs: [
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' }
    ],
    indexable: true,
    wordCount: 85
  },
  'san-antonio-tx': {
    name: 'San Antonio',
    state: 'TX',
    slug: 'san-antonio-tx',
    heroSubhead: 'Reliable WordPress fixes in San Antonio.',
    localParagraph: 'Customers in San Antonio check websites before they call. We fix crashes, plugin errors, and security issues, then set up backups and updates so you avoid repeat downtime. From River Walk to Pearl District, we keep local sites quick and trustworthy for search and conversions.',
    issues: ['Broken layout after updates', 'Forms not sending', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Ready for a stable WordPress site in San Antonio?',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across San Antonio and nearby areas.',
    faqs: [
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' }
    ],
    indexable: true,
    wordCount: 78
  },
  'dallas-tx': {
    name: 'Dallas',
    state: 'TX',
    slug: 'dallas-tx',
    heroSubhead: 'Fast WordPress repairs in Dallas.',
    localParagraph: 'Busy teams in Dallas need a site that just works. We diagnose the root cause, repair the issue, and harden WordPress against future problems. That means fewer support headaches for agencies and startups around Uptown and nearby corridors like Deep Ellum.',
    issues: ['White screen of death', 'Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending'],
    ctaHeadline: 'Fix it today and prevent repeats',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Dallas and nearby areas.',
    faqs: [
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' }
    ],
    indexable: true,
    wordCount: 82
  },
  'austin-tx': {
    name: 'Austin',
    state: 'TX',
    slug: 'austin-tx',
    heroSubhead: 'WordPress support in Austin.',
    localParagraph: 'If your site is slow or broken, rankings and conversions suffer. We fix the core problem, reduce load times, and make forms convert. Owners across Austin near South Congress and Domain see the difference quickly on phones and checkout pages.',
    issues: ['Plugin or PHP errors', 'Broken layout after updates', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Get back online fast in Austin',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Austin and nearby areas.',
    faqs: [
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' }
    ],
    indexable: true,
    wordCount: 79
  },
  'jacksonville-fl': {
    name: 'Jacksonville',
    state: 'FL',
    slug: 'jacksonville-fl',
    heroSubhead: 'Professional WordPress repair in Jacksonville.',
    localParagraph: 'Security matters. We remove malware, clean injected code, and lock down logins. After repairs, we enable monitoring and backups so Jacksonville businesses can focus on work, not WordPress. We regularly serve clients around Riverside and Town Center.',
    issues: ['Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending', 'Theme and CSS conflicts'],
    ctaHeadline: 'Ready for a stable WordPress site in Jacksonville?',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Jacksonville and nearby areas.',
    faqs: [
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' }
    ],
    indexable: true,
    wordCount: 81
  },
  'miami-fl': {
    name: 'Miami',
    state: 'FL',
    slug: 'miami-fl',
    heroSubhead: 'Same day WordPress fixes in Miami.',
    localParagraph: 'In Miami, many hospitality and e-commerce businesses depend on steady online traffic. If your site stalls, orders and inquiries do too. We handle rapid repairs and stabilization, then tune speed so customers near Brickell and Wynwood get a smooth experience on mobile and desktop.',
    issues: ['White screen of death', 'Plugin or PHP errors', 'Malware or hack cleanup', 'Slow or unresponsive site'],
    ctaHeadline: 'Get back online fast in Miami',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Miami and nearby areas.',
    faqs: [
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' }
    ],
    indexable: true,
    wordCount: 85
  },
  'orlando-fl': {
    name: 'Orlando',
    state: 'FL',
    slug: 'orlando-fl',
    heroSubhead: 'Reliable WordPress support in Orlando.',
    localParagraph: 'Customers in Orlando check websites before they call. We fix crashes, plugin errors, and security issues, then set up backups and updates so you avoid repeat downtime. From Downtown Orlando to Lake Nona, we keep local sites quick and trustworthy for search and conversions.',
    issues: ['Broken layout after updates', 'Forms not sending', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Ready for a stable WordPress site in Orlando?',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Orlando and nearby areas.',
    faqs: [
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' }
    ],
    indexable: true,
    wordCount: 78
  },
  'tampa-fl': {
    name: 'Tampa',
    state: 'FL',
    slug: 'tampa-fl',
    heroSubhead: 'Fast WordPress repairs in Tampa.',
    localParagraph: 'Busy teams in Tampa need a site that just works. We diagnose the root cause, repair the issue, and harden WordPress against future problems. That means fewer support headaches for medical and restaurants around Channelside and nearby corridors like Ybor City.',
    issues: ['White screen of death', 'Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending'],
    ctaHeadline: 'Fix it today and prevent repeats',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Tampa and nearby areas.',
    faqs: [
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' }
    ],
    indexable: true,
    wordCount: 82
  },
  'atlanta-ga': {
    name: 'Atlanta',
    state: 'GA',
    slug: 'atlanta-ga',
    heroSubhead: 'Professional WordPress repair in Atlanta.',
    localParagraph: 'If your site is slow or broken, rankings and conversions suffer. We fix the core problem, reduce load times, and make forms convert. Owners across Atlanta near Midtown and Buckhead see the difference quickly on phones and checkout pages.',
    issues: ['Plugin or PHP errors', 'Broken layout after updates', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Get back online fast in Atlanta',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Atlanta and nearby areas.',
    faqs: [
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' }
    ],
    indexable: true,
    wordCount: 79
  },
  'charlotte-nc': {
    name: 'Charlotte',
    state: 'NC',
    slug: 'charlotte-nc',
    heroSubhead: 'WordPress support in Charlotte.',
    localParagraph: 'Security matters. We remove malware, clean injected code, and lock down logins. After repairs, we enable monitoring and backups so Charlotte businesses can focus on work, not WordPress. We regularly serve clients around Uptown and South End.',
    issues: ['Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending', 'Theme and CSS conflicts'],
    ctaHeadline: 'Ready for a stable WordPress site in Charlotte?',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Charlotte and nearby areas.',
    faqs: [
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' }
    ],
    indexable: true,
    wordCount: 81
  },
  'washington-dc': {
    name: 'Washington',
    state: 'DC',
    slug: 'washington-dc',
    heroSubhead: 'Reliable WordPress fixes in DC.',
    localParagraph: 'In Washington DC, many nonprofits and legal firms depend on steady online traffic. If your site stalls, orders and inquiries do too. We handle rapid repairs and stabilization, then tune speed so customers near K Street and Navy Yard get a smooth experience on mobile and desktop.',
    issues: ['White screen of death', 'Plugin or PHP errors', 'Malware or hack cleanup', 'Slow or unresponsive site'],
    ctaHeadline: 'Get back online fast in Washington',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Washington and nearby areas.',
    faqs: [
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' }
    ],
    indexable: true,
    wordCount: 85
  },
  'boston-ma': {
    name: 'Boston',
    state: 'MA',
    slug: 'boston-ma',
    heroSubhead: 'Same day WordPress repairs in Boston.',
    localParagraph: 'Customers in Boston check websites before they call. We fix crashes, plugin errors, and security issues, then set up backups and updates so you avoid repeat downtime. From Back Bay to Seaport, we keep local sites quick and trustworthy for search and conversions.',
    issues: ['Broken layout after updates', 'Forms not sending', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Ready for a stable WordPress site in Boston?',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Boston and nearby areas.',
    faqs: [
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' }
    ],
    indexable: true,
    wordCount: 78
  },
  'seattle-wa': {
    name: 'Seattle',
    state: 'WA',
    slug: 'seattle-wa',
    heroSubhead: 'Professional WordPress repair in Seattle.',
    localParagraph: 'Busy teams in Seattle need a site that just works. We diagnose the root cause, repair the issue, and harden WordPress against future problems. That means fewer support headaches for startups and coffee around South Lake Union and nearby corridors like Capitol Hill.',
    issues: ['White screen of death', 'Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending'],
    ctaHeadline: 'Fix it today and prevent repeats',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across Seattle and nearby areas.',
    faqs: [
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' },
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' }
    ],
    indexable: true,
    wordCount: 82
  },
  'denver-co': {
    name: 'Denver',
    state: 'CO',
    slug: 'denver-co',
    heroSubhead: 'Fast WordPress fixes in Denver.',
    localParagraph: 'If your site is slow or broken, rankings and conversions suffer. We fix the core problem, reduce load times, and make forms convert. Owners across Denver near LoDo and RiNo see the difference quickly on phones and checkout pages.',
    issues: ['Plugin or PHP errors', 'Broken layout after updates', 'Theme and CSS conflicts', 'Hosting or DNS mixups'],
    ctaHeadline: 'Get back online fast in Denver',
    ctaButton: 'Get a Free Diagnosis',
    footerNote: 'Serving businesses across Denver and nearby areas.',
    faqs: [
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' },
      { question: 'Will I lose data?', answer: 'We back up before changes and preserve content when possible.' },
      { question: 'Do you handle hacked sites?', answer: 'Yes. We clean, secure, and set monitoring.' },
      { question: 'Can you prevent repeats?', answer: 'We set updates, backups, security, and alerting.' }
    ],
    indexable: true,
    wordCount: 79
  },
  'san-diego-ca': {
    name: 'San Diego',
    state: 'CA',
    slug: 'san-diego-ca',
    heroSubhead: 'Reliable WordPress support in San Diego.',
    localParagraph: 'Security matters. We remove malware, clean injected code, and lock down logins. After repairs, we enable monitoring and backups so San Diego businesses can focus on work, not WordPress. We regularly serve clients around Gaslamp and La Jolla.',
    issues: ['Malware or hack cleanup', 'Slow or unresponsive site', 'Forms not sending', 'Theme and CSS conflicts'],
    ctaHeadline: 'Ready for a stable WordPress site in San Diego?',
    ctaButton: 'Get Your Site Fixed',
    footerNote: 'Serving businesses across San Diego and nearby areas.',
    faqs: [
      { question: 'Do you offer maintenance?', answer: 'Yes. Plans cover updates, fixes, and speed tuning.' },
      { question: 'Can you migrate me off Wix or Squarespace?', answer: 'Yes, with redirects and SEO preserved.' },
      { question: 'Can you improve page speed?', answer: 'Yes. We optimize Core Web Vitals and assets.' },
      { question: 'Do you work with small budgets?', answer: 'We offer scoped repair and starter plans.' },
      { question: 'How fast can you fix it?', answer: 'Most issues are resolved the same day after diagnosis.' }
    ],
    indexable: true,
    wordCount: 81
  }
};

// Generate static params for all cities
export async function generateStaticParams() {
  return Object.keys(cityData).map((slug) => ({
    'city-slug': slug,
  }));
}

export default function CityPage({ params }: { params: { 'city-slug': string } }) {
  const citySlug = params['city-slug'];
  const city = cityData[citySlug];

  if (!city) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">City Not Found</h1>
          <Link href="/wordpress-repair/locations" className="text-blue-400 hover:text-blue-300">
            View All Locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="location-page">
      {/* Logo Header */}
      <div className="location-logo-header">
        <div className="container">
          <Link href="/" className="location-logo">
            <img src="/images/clyra_logo.png" alt="Clyra Studios" className="logo-image" />
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">WordPress Repair in {city.name}, {city.state}</h1>
            <p className="hero-subhead">{city.heroSubhead}</p>
            <p className="hero-description">{city.localParagraph}</p>
            <div className="hero-actions">
              <Link 
                href={`/wordpress-mechanic/?city=${city.slug}`} 
                className="btn btn-primary btn-lg"
              >
                <GradientIcon icon={faWrench} size="sm" className="white" />
                {city.ctaButton}
              </Link>
              <Link 
                href="tel:+16466322070" 
                className="btn btn-outline-white btn-lg"
              >
                <GradientIcon icon={faPhone} size="sm" className="white" />
                Call (646) 632-2070
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Common Issues We Fix in {city.name}</h2>
          </div>
          <div className="issues-grid">
            {city.issues.map((issue, index) => (
              <div key={index} className="issue-card">
                <div className="issue-icon">
                  <GradientIcon icon={faCheckCircle} size="lg" className="primary" />
                </div>
                <h3 className="issue-title">{issue}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {city.faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{city.ctaHeadline}</h2>
            <div className="cta-buttons">
              <Link 
                href={`/wordpress-mechanic/?city=${city.slug}`} 
                className="btn btn-white btn-lg"
              >
                <GradientIcon icon={faWrench} size="sm" className="primary" />
                {city.ctaButton}
              </Link>
              <Link 
                href="tel:+16466322070" 
                className="btn btn-outline-white btn-lg"
              >
                <GradientIcon icon={faPhone} size="sm" className="white" />
                Call (646) 632-2070
              </Link>
            </div>
            <p className="cta-note">
              Free diagnostics. Pay only if we fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <p className="text-gray-400">{city.footerNote}</p>
            <div className="mt-4">
              <Link href="/wordpress-repair/locations" className="text-blue-400 hover:text-blue-300">
                View All Service Locations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { 'city-slug': string } }): Promise<Metadata> {
  const city = cityData[params['city-slug']];
  
  if (!city) {
    return {
      title: 'City Not Found | Clyra Studios',
      robots: 'noindex'
    };
  }

  const title = `WordPress Repair in ${city.name}, ${city.state} — Clyra Studios`;
  const description = `Professional WordPress repair services in ${city.name}, ${city.state}. Same-day fixes for crashes, hacks, and performance issues. Serving ${city.name} businesses with emergency WordPress support.`;

  return {
    title,
    description,
    robots: city.indexable ? 'index, follow' : 'noindex, follow',
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}
