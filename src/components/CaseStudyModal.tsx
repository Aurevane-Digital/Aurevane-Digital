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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        className="relative w-full max-w-4xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8 focus:outline-none"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
              Case Study {caseStudy.number}
            </span>
            <span className="text-[#827C75]">•</span>
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-xs bg-[#FAF6F0] text-[#9E5249] border border-[#D9D0C3]">
              Concept Project
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Header Title & Location */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#59544E] mb-2">
              <span className="text-[#9E5249] font-medium">{caseStudy.category}</span>
            </div>
            <h2 id="case-study-title" className="font-serif text-3xl md:text-4xl text-[#141210] font-normal">
              {caseStudy.title}
            </h2>
            <p className="text-sm md:text-base text-[#59544E] font-light mt-2 leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          {/* Featured Image if exists */}
          {caseStudy.image && (
            <div className="border border-[#D9D0C3] rounded-sm overflow-hidden bg-black shadow-xs">
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

          {/* What We Built List */}
          <div className="p-5 md:p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3]">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#141210] mb-3">
              What We Built
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#59544E]">
              {caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E5249] shrink-0" />
                  <span className="text-[#141210] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge, Solution, Impact 3-part layout */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-[#141210] border-b border-[#D9D0C3]/60 pb-2">
              Architectural Transformation Blueprint
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
              <div className="p-4 bg-[#F5EDE2]/60 border border-[#D9D0C3] rounded-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ba1a1a] block mb-1">
                  The Challenge
                </span>
                <p className="text-[#59544E]">{caseStudy.transformationDetails.challenge}</p>
              </div>

              <div className="p-4 bg-[#F5EDE2]/60 border border-[#D9D0C3] rounded-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89255] block mb-1">
                  Aurevane Solution
                </span>
                <p className="text-[#59544E]">{caseStudy.transformationDetails.solution}</p>
              </div>

              <div className="p-4 bg-[#F5EDE2]/60 border border-[#D9D0C3] rounded-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9E5249] block mb-1">
                  Design Architecture
                </span>
                <p className="text-[#59544E]">{caseStudy.transformationDetails.impact}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-t border-[#D9D0C3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#59544E]">
            Looking to commission a custom architecture like this?
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase tracking-wider text-[#59544E] hover:text-[#141210] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookSimilar(caseStudy);
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#141210] text-white text-[11px] font-semibold uppercase tracking-widest rounded-sm hover:bg-[#34302D] transition-colors cursor-pointer flex items-center justify-center gap-2"
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
