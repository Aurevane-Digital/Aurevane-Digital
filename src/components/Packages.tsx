import React from 'react';
import { CheckCircle2, ArrowRight, Clock } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/packages';
import { ServicePackage } from '../types';

interface PackagesProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
            Transparent Investment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
            Engineered for Compounding ROI
          </h2>
          <p className="text-sm text-[#59544E] leading-relaxed">
            No bloated retainers or surprise scope clauses. Clear, turnkey digital architecture designed to pay for itself with your next 1 to 2 signed high-ticket contracts.
          </p>
        </div>

        {/* 3 Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => {
            const isFeatured = pkg.featured;

            return (
              <div
                key={pkg.id}
                className={`bg-[#FAF6F0] p-8 md:p-9 rounded-sm flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'border-2 border-[#9E5249] shadow-lg ring-1 ring-[#9E5249]/20'
                    : 'border border-[#D9D0C3] hover:shadow-md'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#9E5249] text-white text-[9px] uppercase tracking-[0.2em] font-bold rounded-full shadow-xs whitespace-nowrap">
                    Most Selected Flagship
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#D9D0C3]/70">
                    <h3
                      className={`text-xs uppercase tracking-widest font-bold ${
                        isFeatured ? 'text-[#9E5249]' : 'text-[#141210]'
                      }`}
                    >
                      {pkg.name}
                    </h3>
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
                      <span className="font-serif text-3xl md:text-4xl text-[#141210] font-normal">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#59544E] font-medium">
                      <Clock className="w-3 h-3 text-[#B89255]" />
                      <span>Turnaround: {pkg.turnaround}</span>
                    </div>
                    <p className="text-xs text-[#59544E] mt-3 font-light leading-relaxed">
                      {pkg.description}
                    </p>
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
                        : 'bg-transparent border border-[#141210] text-[#141210] hover:bg-[#141210] hover:text-white'
                    }`}
                  >
                    {pkg.id === 'custom' ? 'Schedule Consultation' : `Book ${pkg.name} Package`}
                  </button>
                  <p className="text-[10px] text-center text-[#59544E] mt-2">
                    {pkg.id === 'custom' ? 'Direct Founder Strategy Session' : 'Locked-in Quote • Guaranteed Delivery'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
