import React from 'react';
import { ShieldCheck, FileBadge2, Lock, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const credentialPlaceholders = [
    {
      label: 'State & Trade License',
      slot: 'License # Placeholder',
      detail: 'Displayed prominently in your header, footer, and quote forms once verified.',
      icon: FileBadge2,
    },
    {
      label: 'Liability Insurance',
      slot: 'COI / Insurance Badge',
      detail: 'Dedicated trust slot highlighting active residential and commercial coverage.',
      icon: ShieldCheck,
    },
    {
      label: 'Surety Bonded',
      slot: 'Bonding Credential',
      detail: 'Clear bonding verification badge integrated at key decision and bid checkpoints.',
      icon: Award,
    },
  ];

  return (
    <section
      aria-labelledby="ownership-trust-heading"
      className="w-full py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141210] text-[#FAF6F0] p-8 md:p-12 rounded-sm border border-[#2C2723] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Full Ownership &amp; Trust Signals</span>
              </div>

              <h2
                id="ownership-trust-heading"
                className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight"
              >
                You own your website. Domain, code and leads are yours. No lock-in contracts.
              </h2>

              <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed">
                Every website we build is delivered as an independent business asset you control outright. Your domain registration, source code repository, analytics accounts, and incoming customer inquiries remain completely yours without proprietary builder subscriptions or agency hostage clauses.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89255] font-bold block">
                Built-In Credential &amp; Trust Badge Slots
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {credentialPlaceholders.map((badge) => {
                  const IconComp = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="p-4 bg-[#1E1B18] border border-dashed border-[#B89255]/50 rounded-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-xs bg-[#141210] border border-[#B89255]/40 text-[#B89255] flex items-center justify-center mb-3">
                          <IconComp className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1">
                          {badge.label}
                        </h3>
                        <p className="text-[11px] font-mono text-[#B89255] mb-2">
                          {badge.slot}
                        </p>
                      </div>
                      <p className="text-[11px] text-[#D9D0C3] font-light leading-snug">
                        {badge.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
