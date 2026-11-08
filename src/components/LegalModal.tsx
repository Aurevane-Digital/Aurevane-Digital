import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8">
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-4 h-4 text-[#9E5249]" />
            ) : (
              <FileText className="w-4 h-4 text-[#B89255]" />
            )}
            <span className="text-xs uppercase tracking-widest font-bold text-[#141210]">
              {type === 'privacy' ? 'Privacy & Data Governance' : 'Terms of Engagement'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-xs text-[#59544E] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="font-serif text-lg text-[#141210]">Client Data Confidentiality</h4>
              <p>
                Aurevane Digital Studio handles all client trade specifications, revenue metrics, and proprietary bid data under strict non-disclosure terms. We do not sell, rent, or distribute any operational metrics to third-party ad networks.
              </p>
              <h4 className="font-serif text-lg text-[#141210] pt-2">Website Audits</h4>
              <p>
                Data entered into the Complimentary 15-Point Audit tool is processed solely to perform technical analysis and generate diagnostic reports. Findings are never shared publicly without express written consent.
              </p>
              <h4 className="font-serif text-lg text-[#141210] pt-2">Analytics &amp; Cookies</h4>
              <p>
                Our web properties utilize strictly minimal privacy-first analytics to monitor page performance, response latency, and technical reliability.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-serif text-lg text-[#141210]">Engagement &amp; Retainer Scope</h4>
              <p>
                Every Aurevane commission operates with a fixed scope, transparent schedule, and guaranteed completion milestone. Kickoff requires a 50% retainer, with the remaining 50% due upon production deployment and domain handover.
              </p>
              <h4 className="font-serif text-lg text-[#141210] pt-2">Client Ownership &amp; Code Handover</h4>
              <p>
                Upon project completion and final settlement, 100% of bespoke code, graphic assets, typography licenses, and domain configurations transfer entirely to the client. We do not lock businesses into proprietary website builders.
              </p>
              <h4 className="font-serif text-lg text-[#141210] pt-2">Performance Guarantees</h4>
              <p>
                Every bespoke platform is guaranteed to achieve sub-second load times on modern networks and comply with responsive mobile standards.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-3 bg-[#F5EDE2] border-t border-[#D9D0C3] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#141210] text-white text-[11px] font-semibold uppercase tracking-widest rounded-sm hover:bg-[#34302D] cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
