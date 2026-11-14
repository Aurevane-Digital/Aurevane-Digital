import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { HOME_FAQS } from '../data/homeFaq';

export const HomeFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-gsap-reveal
      className="w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] border-b border-white/[0.06]"
    >
      <div className="max-w-[960px] mx-auto">
        <div className="mb-14 space-y-4">
          <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)]">
            05 · Frequently Asked Questions
          </p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#FAFAFA] text-balance">
            Straight answers before{' '}
            <span className="font-serif italic font-normal text-[var(--accent)]">
              you commission a build.
            </span>
          </h2>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const qId = `home-faq-q-${idx}`;
            const aId = `home-faq-a-${idx}`;

            return (
              <div
                key={faq.q}
                className={`transition-colors duration-300 ${
                  isOpen ? 'border-l-2 border-l-[var(--accent)] bg-white/[0.02]' : 'border-l-2 border-l-transparent'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={qId}
                    aria-expanded={isOpen}
                    aria-controls={aId}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-6 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-[18px] font-medium leading-snug text-[#FAFAFA]">
                      {faq.q}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-45 text-[var(--accent)]' : 'text-white/50'
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={aId}
                  role="region"
                  aria-labelledby={qId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-[16px] leading-[1.6] text-[rgba(250,250,250,0.64)]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
