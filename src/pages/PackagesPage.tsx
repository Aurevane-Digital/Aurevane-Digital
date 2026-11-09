import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Plus, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { SERVICE_PACKAGES, ADD_ON_OPTIONS } from '../data/packages';
import { ServicePackage } from '../types';
import { SEO } from '../components/SEO';

interface PackagesPageProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onSelectPackage }) => {
  return (
    <>
      <SEO
        title="Service Packages & Transparent Pricing | Aurevane Digital"
        description="Transparent contractor website design packages and pricing. Starter ($1,000), Professional ($1,500), and Custom solutions for trade contractors."
        canonicalPath="/packages"
      />

      {/* HEADER MASTHEAD */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Transparent Investment
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Contractor Website Packages. Zero Hidden Fees.
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              No bloated agency retainers, hostage contracts, or surprise scope clauses. Clear, turnkey digital platforms designed to pay for themselves with your next 1 to 2 signed high-ticket contracts.
            </p>
          </div>
        </div>
      </section>

      {/* 3 CORE PACKAGES GRID */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICE_PACKAGES.map((pkg) => {
              const isFeatured = pkg.featured;

              return (
                <div
                  key={pkg.id}
                  className={`bg-[#F5EDE2] p-8 md:p-9 rounded-sm flex flex-col justify-between transition-all relative ${
                    isFeatured
                      ? 'border-2 border-[#9E5249] shadow-xl ring-1 ring-[#9E5249]/20 bg-[#FAF6F0]'
                      : 'border border-[#D9D0C3] hover:shadow-md'
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#9E5249] text-white text-[9px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xs whitespace-nowrap">
                      Most Selected Flagship
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#D9D0C3]/70">
                      <h2
                        className={`text-xs uppercase tracking-widest font-bold ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#141210]'
                        }`}
                      >
                        {pkg.name}
                      </h2>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-semibold ${
                          isFeatured ? 'text-[#9E5249]' : 'text-[#59544E]'
                        }`}
                      >
                        {pkg.tagline}
                      </span>
                    </div>

                    <div className="my-6">
                      <div className="flex items-baseline gap-2">
                        {pkg.id !== 'custom' && (
                          <span className="text-xs text-[#59544E]">Starting at</span>
                        )}
                        <span className="font-serif text-3xl md:text-5xl text-[#141210] font-normal">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#59544E] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#B89255]" />
                        <span>Turnaround: {pkg.turnaround}</span>
                      </div>
                      <p className="text-xs text-[#59544E] mt-3 font-light leading-relaxed">
                        {pkg.description}
                      </p>
                      {pkg.bestFor && (
                        <div className="mt-3 p-3 bg-[#FAF6F0]/80 rounded-xs border border-[#D9D0C3]/60 text-[11px] text-[#59544E]">
                          <strong className="text-[#141210] font-semibold">Best for: </strong>
                          {pkg.bestFor}
                        </div>
                      )}
                    </div>

                    <ul className="flex flex-col gap-3 my-6 text-xs text-[#59544E] border-t border-[#D9D0C3]/50 pt-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? 'text-[#9E5249]' : 'text-[#B89255]'
                            }`}
                          />
                          <span className={idx === 0 && isFeatured ? 'text-[#141210] font-medium' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full inline-flex items-center justify-center py-3.5 px-4 text-[11px] font-semibold uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer ${
                        isFeatured
                          ? 'bg-[#9E5249] text-white hover:bg-[#BA685E] shadow-xs'
                          : 'bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D]'
                      }`}
                    >
                      {pkg.id === 'custom' ? 'Schedule Consultation' : `Book ${pkg.name} Package`}
                    </button>
                    <p className="text-[10px] text-center text-[#59544E] mt-2 font-mono">
                      {pkg.id === 'custom'
                        ? 'Direct Founder Strategy Session'
                        : 'Fixed-Price Milestone • 100% Code Ownership'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZED ADD-ONS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Modular Extensions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
              High-Ticket Trade Add-Ons
            </h2>
            <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed">
              Enhance any package with modular components tailored to your market territory and intake workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADD_ON_OPTIONS.map((addon) => (
              <div
                key={addon.id}
                className="p-7 bg-[#FAF6F0] rounded-sm border border-[#D9D0C3] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg text-[#141210] font-medium">
                      {addon.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-[#9E5249]">
                      +${addon.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#59544E] font-light leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D9D0C3]/60 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#827C75]">
                  <Plus className="w-3 h-3 text-[#B89255]" />
                  <span>Available on Starter &amp; Professional</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHIVAL ASSURANCES */}
      <section className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#141210] mb-1">100% Code Ownership</h4>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  You own all design files, production code, and domains upon final payment. No lock-in or proprietary agency platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#141210] mb-1">Milestone Accountability</h4>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Strict delivery timelines backed by clear weekly progress demos and staging access.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-[#9E5249] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg text-[#141210] mb-1">Questions on Scope?</h4>
                <p className="text-xs text-[#59544E] leading-relaxed font-light">
                  Reach out for a direct consultation to confirm exactly which package aligns with your target territory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Start Your Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Ready to secure your project milestone?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
            Book your package directly or start a conversation with our team about your specific requirements.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onSelectPackage(SERVICE_PACKAGES[1])}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Book Professional Package ($1,500)
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer"
            >
              Contact Our Principal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
