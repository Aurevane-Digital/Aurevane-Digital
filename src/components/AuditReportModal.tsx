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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-report-title"
        className="relative w-full max-w-3xl bg-[#111111] border border-white/[0.1] rounded-[16px] shadow-2xl overflow-hidden my-8 focus:outline-none text-[#FAFAFA]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)]">
              Preliminary 15-Point Audit Report
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.06] rounded-[10px] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-[rgba(250,250,250,0.5)]">{report.url}</span>
              <h2 id="audit-report-title" className="text-2xl md:text-3xl text-[#FAFAFA] font-semibold mt-1">
                {report.businessName}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-[rgba(250,250,250,0.64)]">Status:</span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-rose-400">
                  {report.tier}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/[0.03] rounded-[16px] border border-white/[0.08] min-w-[120px]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(250,250,250,0.64)]">
                Health Score
              </span>
              <span className="text-4xl font-semibold text-[var(--accent)] tabular-nums my-0.5">
                {report.overallScore}
              </span>
              <span className="text-[10px] text-[rgba(250,250,250,0.5)]">out of 100</span>
            </div>
          </div>

          <div className="p-5 bg-white/[0.03] border-l-2 border-[var(--accent)] rounded-[12px]">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] block mb-1">
              Estimated Missed Bids &amp; Revenue Drain
            </span>
            <div className="text-2xl font-semibold text-[#FAFAFA] tabular-nums">
              {report.estimatedMissedBidsMonthly} / month
            </div>
            <p className="text-xs text-[rgba(250,250,250,0.64)] mt-2 leading-relaxed">
              {report.summary}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Identified High-Ticket Conversion Bottlenecks
            </h3>

            <div className="space-y-3">
              {report.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/[0.02] border border-white/[0.08] rounded-[12px] space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#FAFAFA]">
                      {metric.category}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${
                        metric.status === 'critical' ? 'text-rose-400' : 'text-amber-300'
                      }`}
                    >
                      {metric.title}
                    </span>
                  </div>
                  <p className="text-xs text-[rgba(250,250,250,0.64)]">{metric.finding}</p>
                  <p className="text-xs text-[var(--accent)] pt-1">
                    <strong>Aurevane Fix:</strong> {metric.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white/[0.03] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[rgba(250,250,250,0.64)]">
            Full manual video teardown is being prepared for your email.
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookCure();
              }}
              className="px-6 py-2.5 bg-[var(--accent)] text-[#0A0A0A] text-xs font-semibold rounded-[12px] hover:brightness-105 transition-all cursor-pointer flex items-center gap-2"
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
