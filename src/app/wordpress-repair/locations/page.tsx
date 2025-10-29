import Link from 'next/link';
import { Metadata } from 'next';
import GradientIcon from '@/components/GradientIcon';
import { faWrench, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const locations = [
  { name: 'New York', state: 'NY', slug: 'new-york-ny', snippet: 'Same day WordPress fixes for New York businesses. Serving Midtown and Financial District.' },
  { name: 'Los Angeles', state: 'CA', slug: 'los-angeles-ca', snippet: 'Fast repairs and updates for LA sites. From Downtown LA to Santa Monica.' },
  { name: 'Chicago', state: 'IL', slug: 'chicago-il', snippet: 'Keep your Chicago site online and secure. Serving The Loop and River North.' },
  { name: 'Houston', state: 'TX', slug: 'houston-tx', snippet: 'Emergency repairs for Houston businesses. Galleria and Energy Corridor coverage.' },
  { name: 'Phoenix', state: 'AZ', slug: 'phoenix-az', snippet: 'WordPress stabilization in Phoenix. Downtown and Scottsdale Waterfront areas.' },
  { name: 'Philadelphia', state: 'PA', slug: 'philadelphia-pa', snippet: 'Professional WordPress repair in Philly. Center City and University City coverage.' },
  { name: 'San Antonio', state: 'TX', slug: 'san-antonio-tx', snippet: 'Reliable WordPress fixes in San Antonio. River Walk and Pearl District areas.' },
  { name: 'Dallas', state: 'TX', slug: 'dallas-tx', snippet: 'Fast WordPress repairs in Dallas. Uptown and Deep Ellum coverage.' },
  { name: 'Austin', state: 'TX', slug: 'austin-tx', snippet: 'WordPress support in Austin. South Congress and Domain areas.' },
  { name: 'Jacksonville', state: 'FL', slug: 'jacksonville-fl', snippet: 'Professional WordPress repair in Jacksonville. Riverside and Town Center coverage.' },
  { name: 'Miami', state: 'FL', slug: 'miami-fl', snippet: 'Same day WordPress fixes in Miami. Brickell and Wynwood areas.' },
  { name: 'Orlando', state: 'FL', slug: 'orlando-fl', snippet: 'Reliable WordPress support in Orlando. Downtown and Lake Nona coverage.' },
  { name: 'Tampa', state: 'FL', slug: 'tampa-fl', snippet: 'Fast WordPress repairs in Tampa. Channelside and Ybor City areas.' },
  { name: 'Atlanta', state: 'GA', slug: 'atlanta-ga', snippet: 'Professional WordPress repair in Atlanta. Midtown and Buckhead coverage.' },
  { name: 'Charlotte', state: 'NC', slug: 'charlotte-nc', snippet: 'WordPress support in Charlotte. Uptown and South End areas.' },
  { name: 'Washington', state: 'DC', slug: 'washington-dc', snippet: 'Reliable WordPress fixes in DC. K Street and Navy Yard coverage.' },
  { name: 'Boston', state: 'MA', slug: 'boston-ma', snippet: 'Same day WordPress repairs in Boston. Back Bay and Seaport areas.' },
  { name: 'Seattle', state: 'WA', slug: 'seattle-wa', snippet: 'Professional WordPress repair in Seattle. South Lake Union and Capitol Hill.' },
  { name: 'Denver', state: 'CO', slug: 'denver-co', snippet: 'Fast WordPress fixes in Denver. LoDo and RiNo coverage areas.' },
  { name: 'San Diego', state: 'CA', slug: 'san-diego-ca', snippet: 'Reliable WordPress support in San Diego. Gaslamp and La Jolla areas.' }
];

export default function LocationsPage() {
  return (
    <main className="locations-page">
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
            <h1 className="hero-title">WordPress Repair Services by Location</h1>
            <p className="hero-subhead">
              Professional WordPress repair and maintenance services across major US cities. 
              Same-day fixes, security hardening, and ongoing support for businesses nationwide.
            </p>
            <div className="hero-actions">
              <Link href="/wordpress-mechanic/" className="btn btn-primary btn-lg">
                <GradientIcon icon={faWrench} size="sm" className="white" />
                Get Emergency Repair
              </Link>
              <Link href="tel:+16466322070" className="btn btn-outline-white btn-lg">
                <GradientIcon icon={faPhone} size="sm" className="white" />
                Call (646) 632-2070
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Service Locations</h2>
            <p className="section-subtitle">
              Click on your city to learn about our local WordPress repair services and get help fast.
            </p>
          </div>
          <div className="locations-grid">
            {locations.map((location) => (
              <div key={location.slug} className="location-card">
                <div className="location-header">
                  <div className="location-icon">
                    <GradientIcon icon={faMapMarkerAlt} size="lg" className="primary" />
                  </div>
                  <h3 className="location-title">{location.name}, {location.state}</h3>
                </div>
                <p className="location-snippet">{location.snippet}</p>
                <Link 
                  href={`/wordpress-repair/${location.slug}`} 
                  className="btn btn-outline-primary"
                >
                  View Services
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Don't See Your City?</h2>
            <p className="cta-subtitle">
              We provide remote WordPress repair services nationwide. 
              Get same-day help regardless of your location.
            </p>
            <div className="cta-buttons">
              <Link href="/wordpress-mechanic/" className="btn btn-white btn-lg">
                <GradientIcon icon={faWrench} size="sm" className="primary" />
                Get Remote Repair
              </Link>
              <Link href="tel:+16466322070" className="btn btn-outline-white btn-lg">
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
    </main>
  );
}

export const metadata: Metadata = {
  title: 'WordPress Repair Services by Location | Clyra Studios',
  description: 'Professional WordPress repair services across major US cities. Same-day fixes, security hardening, and maintenance for businesses nationwide. Find your city and get help fast.',
  openGraph: {
    title: 'WordPress Repair Services by Location | Clyra Studios',
    description: 'Professional WordPress repair services across major US cities. Same-day fixes, security hardening, and maintenance for businesses nationwide.',
    type: 'website',
  },
};
