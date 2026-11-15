import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Minus } from 'lucide-react';
import {
  SERVICE_PACKAGES,
  ADD_ON_OPTIONS,
  MONTHLY_RETAINERS,
} from '../data/packages';
import { ServicePackage } from '../types';

interface HomePackagesProps {
  onSelectPackage?: (pkg: ServicePackage) => void;
}

const MUTED_ITEMS_BY_PKG: Record<string, string[]> = {
  starter: [
    'Interactive Scope & Volume Estimator',
    'Multi-City Local SEO Hub Pages',
  ],
  professional: [
    'Multi-Location Franchise Architecture',
  ],
  custom: [],
};

export const HomePackages: React.FC<HomePackagesProps> = ({ onSelectPackage }) => {
  return (
    <section
      id="packages"
      data-gsap-reveal
      className="w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] border-b border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)]">
              04 · Transparent Packages
            </p>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#FAFAFA] text-balance">
              One-time builds with{' '}
              <span className="font-serif italic font-normal text-[var(--accent)]">
                100% code ownership.
              </span>
            </h2>
          </div>

          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#FAFAFA] hover:text-[var(--accent)] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Full pricing &amp; scope details</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">
          {SERVICE_PACKAGES.map((pkg) => {
            const isHighlighted = Boolean(pkg.featured);
            const mutedFeatures = MUTED_ITEMS_BY_PKG[pkg.id] || [];
            const isEnterprise = pkg.id === 'custom';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-[16px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-white/[0.05] backdrop-blur-xl border border-[var(--accent)] shadow-[0_0_48px_-14px_rgba(212,255,79,0.28)]'
                    : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] hover:border-white/20'
                }`}
              >
                <div>
                  {/* Eyebrow row */}
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[rgba(250,250,250,0.64)]">
                      {pkg.tagline}
                    </span>
                    {isHighlighted && (
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                        Most popular
                      </span>
                    )}
                  </div>

                  {/* Name & Price */}
                  <div className="mt-6 space-y-2">
                    <h3 className="text-[24px] font-semibold tracking-tight text-[#FAFAFA]">
                      {pkg.id === 'custom' ? 'Enterprise & Multi-Unit' : pkg.name}
                    </h3>

                    <div className="flex items-baseline gap-2 pt-1">
                      {pkg.pricePrefix && (
                        <span className="text-sm text-[rgba(250,250,250,0.64)]">
                          {pkg.pricePrefix.toLowerCase()}
                        </span>
                      )}
                      <span className="text-4xl font-semibold tracking-tight text-[#FAFAFA] tabular-nums">
                        {isEnterprise ? 'Custom quote' : pkg.price}
                      </span>
                    </div>

                    <p className="font-mono text-[12px] text-[var(--accent)] tracking-wider uppercase pt-1">
                      {pkg.turnaround}
                    </p>

                    <p className="text-[15px] leading-[1.6] text-[rgba(250,250,250,0.64)] pt-2">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Feature List */}
                  <ul className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-[14px] leading-[1.5] text-[#FAFAFA]"
                      >
                        <Check
                          className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {mutedFeatures.map((mutedFeat) => (
                      <li
                        key={mutedFeat}
                        className="flex items-start gap-3 text-[14px] leading-[1.5] text-white/35"
                      >
                        <Minus
                          className="w-4 h-4 text-white/25 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{mutedFeat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-4">
                  {onSelectPackage ? (
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-[14px] font-semibold rounded-[16px] hover:scale-[1.02] transition-all duration-200 cursor-pointer whitespace-nowrap ${
                        isHighlighted
                          ? 'bg-[var(--accent)] text-[#0A0A0A]'
                          : 'bg-white/[0.06] text-[#FAFAFA] border border-white/15 hover:border-[var(--accent)]/60'
                      }`}
                    >
                      <span>{isEnterprise ? 'Book a consultation' : 'Start your project'}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      to="/packages"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-[14px] font-semibold rounded-[16px] hover:scale-[1.02] transition-all duration-200 whitespace-nowrap ${
                        isHighlighted
                          ? 'bg-[var(--accent)] text-[#0A0A0A]'
                          : 'bg-white/[0.06] text-[#FAFAFA] border border-white/15 hover:border-[var(--accent)]/60'
                      }`}
                    >
                      <span>{isEnterprise ? 'Book a consultation' : 'Start your project'}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Add-Ons Row */}
        <div className="rounded-[16px] bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--accent)]">
                Optional Add-Ons
              </span>
              <h3 className="text-[20px] font-semibold text-[#FAFAFA] mt-1">
                Modular Upgrades Available With Any Tier
              </h3>
            </div>
            <Link
              to="/packages"
              className="font-mono text-[12px] text-[rgba(250,250,250,0.64)] hover:text-[var(--accent)] transition-colors"
            >
              Compare add-ons →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADD_ON_OPTIONS.map((addon) => (
              <div
                key={addon.id}
                className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06] flex flex-col justify-between gap-3"
              >
                <span className="text-[15px] font-medium text-[#FAFAFA] leading-snug">
                  {addon.name}
                </span>
                <span className="font-mono text-[13px] font-semibold text-[var(--accent)] tabular-nums">
                  {addon.custom
                    ? 'Custom quote'
                    : addon.pricePrefix
                    ? `from +$${addon.price}`
                    : `+$${addon.price}`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Monthly Retainers Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {MONTHLY_RETAINERS.map((retainer) => (
            <div
              key={retainer.id}
              className="rounded-[16px] bg-white/[0.03] border border-white/[0.06] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[rgba(250,250,250,0.64)]">
                  Optional Monthly Plan
                </span>
                <h3 className="text-[20px] font-semibold text-[#FAFAFA]">{retainer.name}</h3>
                <p className="text-[14px] text-[rgba(250,250,250,0.64)] max-w-md">
                  {retainer.description}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <span className="font-mono text-xl font-semibold text-[var(--accent)] tabular-nums">
                  {retainer.price}
                </span>
                <span className="font-mono text-xs text-[rgba(250,250,250,0.64)] ml-1">
                  /mo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Payment Note */}
        <p className="font-mono text-[13px] text-[rgba(250,250,250,0.64)] text-center">
          50% deposit to start, 50% before launch.
        </p>
      </div>
    </section>
  );
};
