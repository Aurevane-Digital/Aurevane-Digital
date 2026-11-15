import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!type) return;
    const previousActiveElement = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8 focus:outline-none"
      >
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-4 h-4 text-[#9E5249]" />
            ) : (
              <FileText className="w-4 h-4 text-[#B89255]" />
            )}
            <h2 id="legal-modal-title" className="text-xs uppercase tracking-widest font-bold text-[#141210]">
              {type === 'privacy' ? 'Privacy & Data Governance' : 'Terms of Engagement'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-xs text-[#59544E] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h3 className="font-serif text-lg text-[#141210]">Client Data Confidentiality</h3>
              <p>
                Aurevane Digital Studio handles all client trade specifications, revenue metrics, and proprietary bid data under strict non-disclosure terms. We do not sell, rent, or distribute any operational metrics to third-party ad networks.
              </p>
              <h3 className="font-serif text-lg text-[#141210] pt-2">Website Audits</h3>
              <p>
                Data entered into the Complimentary 15-Point Audit tool is processed solely to perform technical analysis and generate diagnostic reports. Findings are never shared publicly without express written consent.
              </p>
              <h3 className="font-serif text-lg text-[#141210] pt-2">Analytics &amp; Cookies</h3>
              <p>
                Our web properties utilize strictly minimal privacy-first analytics to monitor page performance, response latency, and technical reliability.
              </p>
            </>
          ) : (
            <>
              <h3 className="font-serif text-lg text-[#141210]">Engagement &amp; Payment Terms</h3>
              <p>
                Every Aurevane website commission operates with a clear scope, transparent schedule, and defined completion milestone. Website projects start with a 50% deposit, with the remaining 50% due before final launch and handover. Optional monthly care and SEO plans are billed monthly in advance under a separate scope agreement.
              </p>
              <h3 className="font-serif text-lg text-[#141210] pt-2">Client Ownership &amp; Code Handover</h3>
              <p>
                Upon project completion and final settlement, 100% of bespoke code, graphic assets, typography licenses, and domain configurations transfer entirely to the client. We do not lock businesses into proprietary website builders.
              </p>
              <h3 className="font-serif text-lg text-[#141210] pt-2">Performance Standards</h3>
              <p>
                Every bespoke platform is engineered to deliver fast, reliable load times on modern networks and comply with responsive mobile standards.
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
