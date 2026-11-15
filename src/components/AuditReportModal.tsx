import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';
import { AuditReportData } from '../types';

interface AuditReportModalProps {
  report: AuditReportData | null;
  onClose: () => void;
  onBookCure: () => void;
}

export const AuditReportModal: React.FC<AuditReportModalProps> = ({
  report,
  onClose,
  onBookCure,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!report) return;
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
  }, [report, onClose]);

  if (!report) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-report-title"
        className="relative w-full max-w-3xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8 focus:outline-none"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9E5249]" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
              Preliminary 15-Point Audit Report
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9D0C3]">
            <div>
              <span className="text-xs font-mono text-[#59544E]">{report.url}</span>
              <h2 id="audit-report-title" className="font-serif text-2xl md:text-3xl text-[#141210] font-normal">
                {report.businessName}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[#59544E]">Status:</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#ffdad6] text-[#ba1a1a]">
                  {report.tier}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] min-w-[120px]">
              <span className="text-[10px] uppercase tracking-wider text-[#59544E] font-semibold">
                Health Score
              </span>
              <span className="font-serif text-4xl font-bold text-[#9E5249]">
                {report.overallScore}
              </span>
              <span className="text-[10px] text-[#59544E]">out of 100</span>
            </div>
          </div>

          {/* Revenue Loss Callout */}
          <div className="p-5 bg-[#FAF6F0] border-l-4 border-[#9E5249] rounded-sm shadow-xs">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#9E5249] block mb-1">
              Estimated Missed Bids &amp; Revenue Drain
            </span>
            <div className="font-serif text-2xl text-[#141210] font-normal">
              {report.estimatedMissedBidsMonthly} / month
            </div>
            <p className="text-xs text-[#59544E] mt-2 font-light leading-relaxed">
              {report.summary}
            </p>
          </div>

          {/* Detailed Findings */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#141210]">
              Identified High-Ticket Conversion Bottlenecks
            </h3>

            <div className="space-y-3">
              {report.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#141210]">
                      {metric.category}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-xs ${
                        metric.status === 'critical'
                          ? 'bg-[#ffdad6] text-[#ba1a1a]'
                          : 'bg-[#ffeed9] text-[#a27e43]'
                      }`}
                    >
                      {metric.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#59544E]">{metric.finding}</p>
                  <p className="text-xs text-[#9E5249] font-medium pt-1">
                    <strong>Aurevane Fix:</strong> {metric.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-t border-[#D9D0C3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#59544E]">
            Full manual video teardown is being prepared for your email.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#59544E] hover:text-[#141210] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCure();
              }}
              className="px-6 py-2.5 bg-[#9E5249] text-white text-[11px] font-semibold uppercase tracking-widest rounded-sm hover:bg-[#BA685E] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Fix Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
