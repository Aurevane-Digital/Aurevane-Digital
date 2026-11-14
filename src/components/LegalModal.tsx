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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full max-w-2xl bg-[#111111] border border-white/[0.1] rounded-[16px] shadow-2xl overflow-hidden my-8 focus:outline-none text-[#FAFAFA]"
      >
        <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-4 h-4 text-[var(--accent)]" />
            ) : (
              <FileText className="w-4 h-4 text-[var(--accent)]" />
            )}
            <h2 id="legal-modal-title" className="font-mono text-xs uppercase tracking-widest text-[#FAFAFA]">
              {type === 'privacy' ? 'Privacy & Data Governance' : 'Terms of Engagement'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.06] rounded-[10px] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto space-y-4 text-sm text-[rgba(250,250,250,0.64)] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h3 className="text-lg font-semibold text-[#FAFAFA]">Client Data Confidentiality</h3>
              <p>
                Aurevane Digital handles all client trade specifications, revenue metrics, and proprietary bid data under strict non-disclosure terms. We do not sell, rent, or distribute any operational metrics to third-party ad networks.
              </p>
              <h3 className="text-lg font-semibold text-[#FAFAFA] pt-2">Website Audits</h3>
              <p>
                Data entered into the Complimentary 15-Point Audit tool is processed solely to perform technical analysis and generate diagnostic reports. Findings are never shared publicly without express written consent.
              </p>
              <h3 className="text-lg font-semibold text-[#FAFAFA] pt-2">Analytics &amp; Cookies</h3>
              <p>
                Our web properties utilize minimal privacy-first analytics to monitor page performance, response latency, and technical reliability.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold text-[#FAFAFA]">Engagement &amp; Payment Terms</h3>
              <p>
                Every Aurevane website commission operates with a clear scope, transparent schedule, and defined completion milestone. Website projects start with a 50% deposit, with the remaining 50% due before final launch and handover. Optional monthly care and SEO plans are billed monthly in advance under a separate scope agreement.
              </p>
              <h3 className="text-lg font-semibold text-[#FAFAFA] pt-2">Client Ownership &amp; Code Handover</h3>
              <p>
                Upon project completion and final settlement, 100% of bespoke code, graphic assets, typography licenses, and domain configurations transfer entirely to the client. We do not lock businesses into proprietary website builders.
              </p>
              <h3 className="text-lg font-semibold text-[#FAFAFA] pt-2">Performance Standards</h3>
              <p>
                Every bespoke platform is engineered to deliver fast, reliable load times on modern networks and comply with responsive mobile standards.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-white/[0.03] border-t border-white/[0.08] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[var(--accent)] text-[#0A0A0A] text-xs font-semibold rounded-[12px] hover:brightness-105 cursor-pointer"
          >
            Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
};
