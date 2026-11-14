import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookSimilar: (caseStudy: CaseStudy) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onBookSimilar,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!caseStudy) return;
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
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative w-full max-w-4xl bg-[#111111] border border-white/[0.1] rounded-[16px] shadow-2xl overflow-hidden my-8 focus:outline-none text-[#FAFAFA]"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)]">
              Case Study {caseStudy.number}
            </span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(250,250,250,0.64)]">
              Concept Project
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.06] rounded-[10px] transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
              <span>{caseStudy.category}</span>
            </div>
            <h2 id="case-study-title" className="text-3xl md:text-4xl text-[#FAFAFA] font-semibold">
              {caseStudy.title}
            </h2>
            <p className="text-sm md:text-base text-[rgba(250,250,250,0.64)] mt-2 leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {caseStudy.image && (
            <div className="border border-white/[0.08] rounded-[12px] overflow-hidden bg-black">
              <img
                src={caseStudy.image}
                alt={`${caseStudy.title} — ${caseStudy.category} Case Study Preview`}
                width={1200}
                height={675}
                loading="lazy"
                className="w-full max-h-[460px] object-cover object-top"
              />
            </div>
          )}

          <div className="p-5 md:p-6 bg-white/[0.03] rounded-[16px] border border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">
              What We Built
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span className="text-[#FAFAFA] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#FAFAFA] border-b border-white/[0.08] pb-2">
              Architectural Transformation Blueprint
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs leading-relaxed">
              <div className="p-4 bg-white/[0.02] border border-white/[0.08] rounded-[12px]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400 block mb-1.5">
                  The Challenge
                </span>
                <p className="text-[rgba(250,250,250,0.64)]">{caseStudy.transformationDetails.challenge}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.08] rounded-[12px]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] block mb-1.5">
                  Aurevane Solution
                </span>
                <p className="text-[rgba(250,250,250,0.64)]">{caseStudy.transformationDetails.solution}</p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/[0.08] rounded-[12px]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FAFAFA] block mb-1.5">
                  Design Architecture
                </span>
                <p className="text-[rgba(250,250,250,0.64)]">{caseStudy.transformationDetails.impact}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white/[0.03] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[rgba(250,250,250,0.64)]">
            Looking to commission a custom architecture like this?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSimilar(caseStudy);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[var(--accent)] text-[#0A0A0A] text-xs font-semibold rounded-[12px] hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Commission Similar System</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
