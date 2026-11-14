import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Package, Mail, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Aurevane Digital"
        description="The page you are looking for does not exist."
        canonicalPath="/"
        noindex
      />

      {/* HERO MASTHEAD */}
      <section className="w-full pt-32 pb-20 px-6 bg-[#0A0A0A] border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.35em] text-[var(--accent)]">
                Error 404
              </span>
              <div className="h-px w-10 bg-[var(--accent)]/40" />
            </div>

            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold text-[#FAFAFA] leading-[1.08] mb-6">
              Page not found
            </h1>

            <p className="font-serif italic text-2xl md:text-3xl text-[var(--accent)] mb-6">
              The page you are looking for has been relocated or no longer exists.
            </p>

            <p className="text-[16px] text-[rgba(250,250,250,0.64)] leading-[1.6]">
              We invite you to explore our work, browse our transparent packages, or return to the
              main homepage.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION BUTTONS SECTION */}
      <section className="w-full py-20 px-6 bg-[#0A0A0A] flex-grow">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-[12px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Helpful Destinations
            </span>
            <h2 className="text-2xl md:text-3xl text-[#FAFAFA] font-semibold mt-2">
              Where would you like to go next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                to: '/',
                icon: Home,
                title: 'Home',
                desc: 'Return to the main overview and trade web design showcase.',
                cta: 'Go to Home',
              },
              {
                to: '/our-work',
                icon: Compass,
                title: 'Our Work',
                desc: 'Interactive frame-by-frame contractor showcase archive.',
                cta: 'Explore Work',
              },
              {
                to: '/packages',
                icon: Package,
                title: 'Packages',
                desc: 'Transparent milestone pricing and trade add-on options.',
                cta: 'View Packages',
              },
              {
                to: '/contact',
                icon: Mail,
                title: 'Contact',
                desc: 'Initiate a project inquiry or complimentary site audit.',
                cta: 'Contact Us',
              },
            ].map((dest) => {
              const Icon = dest.icon;
              return (
                <Link
                  key={dest.to}
                  to={dest.to}
                  className="p-6 bg-white/[0.04] backdrop-blur-xl rounded-[16px] border border-white/[0.06] hover:border-[var(--accent)]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-5 h-5 text-[var(--accent)] mb-3" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-[#FAFAFA] group-hover:text-[var(--accent)] transition-colors mb-1">
                      {dest.title}
                    </h3>
                    <p className="text-sm text-[rgba(250,250,250,0.64)] leading-relaxed">
                      {dest.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-[#FAFAFA] group-hover:text-[var(--accent)]">
                    <span>{dest.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
