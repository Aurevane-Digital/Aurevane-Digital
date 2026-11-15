import React, { useState } from 'react';
import { Check, Layers, MapPin, PhoneCall, Smartphone } from 'lucide-react';
import { getFrameUrl } from '../utils/frames';

interface ProcessStep {
  num: string;
  title: string;
  body: string;
  deliverables: string[];
  visualType: 'mockup' | 'build' | 'launch';
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Strategy and free mockup',
    body: 'Before you commit a dollar, we study your top local competitors, high-margin services, and target ZIP codes—then design a bespoke homepage mockup tailored to your business.',
    deliverables: [
      'Competitor & service-area teardown',
      'Custom visual direction & headline positioning',
      'Quote & dispatch funnel wireframe',
    ],
    visualType: 'mockup',
  },
  {
    num: '02',
    title: 'Design and build',
    body: 'Once approved, we hand-code your multi-page site without sluggish templates or bloated plugins. Interactive quote estimators, fast mobile tap-to-call triggers, and clean structured code are tested end-to-end.',
    deliverables: [
      'Custom-coded responsive layout across desktop & phone',
      'Click-to-call, scope intake, and photo-upload flows',
      'Staging preview for structured feedback',
    ],
    visualType: 'build',
  },
  {
    num: '03',
    title: 'Launch and grow',
    body: 'We configure SSL, local schema markup, and domain DNS, then hand over 100% ownership of the codebase. Keep operating with zero mandatory retainers—or add optional ongoing SEO and care.',
    deliverables: [
      'Full domain, SSL, and production deployment',
      'Google Business Profile & local schema alignment',
      '100% code and design file ownership upon completion',
    ],
    visualType: 'launch',
  },
];

const StepVisual: React.FC<{ type: ProcessStep['visualType'] }> = ({ type }) => {
  if (type === 'mockup') {
    return (
      <div className="rounded-[16px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--accent)]">
            01 · Concept Blueprint
          </span>
          <span className="font-mono text-[11px] text-white/50">Custom Trade Mockup</span>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-1">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SERVICE TERRITORY AUDIT</span>
            </div>
            <p className="text-sm text-[#FAFAFA] font-medium">
              Primary city hubs + adjacent county service pages mapped upfront
            </p>
          </div>

          <div className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06]">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] mb-1">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>BESPOKE HERO &amp; FUNNEL</span>
            </div>
            <p className="text-sm text-[rgba(250,250,250,0.64)]">
              Headline positioning + tailored scope intake previewed before any build deposit
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'build') {
    return (
      <div className="rounded-[16px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--accent)]">
            02 · Custom Code &amp; Mobile Flow
          </span>
          <Smartphone className="w-4 h-4 text-white/50" aria-hidden="true" />
        </div>
        <div className="aspect-[16/10] w-full bg-[#050505] overflow-hidden relative">
          <img
            src={getFrameUrl(285)}
            alt="Custom coded contractor web architecture preview on desktop and mobile"
            width={960}
            height={600}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-mono text-[#FAFAFA]">
            <span>Zero Page Builders</span>
            <span className="text-[var(--accent)]">Clean React + Vite Codebase</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-6 sm:p-8 space-y-5">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
        <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-[var(--accent)]">
          03 · Turnkey Launch &amp; Leads
        </span>
        <PhoneCall className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
            Ownership
          </span>
          <span className="text-base font-semibold text-[#FAFAFA]">100% Client-Owned Code</span>
        </div>
        <div className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/50 block mb-1">
            Contracts
          </span>
          <span className="text-base font-semibold text-[var(--accent)]">
            Zero Mandatory Lock-In
          </span>
        </div>
      </div>

      <div className="p-4 rounded-[12px] bg-white/[0.03] border border-white/[0.06] text-sm text-[rgba(250,250,250,0.64)] leading-[1.6]">
        Every lead alert routes straight to your phone or dispatch inbox, backed by GA4 conversion
        events and clean local search markup.
      </div>
    </div>
  );
};

export const HomeHowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      id="how-it-works"
      data-gsap-reveal
      className="w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] border-b border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)]">
            02 · How It Works
          </p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#FAFAFA] text-balance">
            Three straightforward steps from{' '}
            <span className="font-serif italic font-normal text-[var(--accent)]">
              first mockup to booked jobs.
            </span>
          </h2>
        </div>

        {/* Sticky Desktop Overview + Alternating Steps */}
        <div className="space-y-16 lg:space-y-24">
          {PROCESS_STEPS.map((step, index) => {
            const isImageFirstDesktop = index % 2 === 1;

            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(index)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
              >
                {/* Copy Column */}
                <div
                  className={`lg:col-span-6 lg:sticky lg:top-28 space-y-5 ${
                    isImageFirstDesktop ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[13px] leading-[1.7] tracking-[0.25em] text-[var(--accent)] font-semibold tabular-nums">
                      {step.num}
                    </span>
                    <span className="h-px w-8 bg-white/15" aria-hidden="true" />
                    <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-white/50">
                      Step {index + 1} of 3
                    </span>
                  </div>

                  <h2 className="text-[clamp(24px,3vw,32px)] font-semibold tracking-[-0.02em] leading-[1.15] text-[#FAFAFA]">
                    {step.title}
                  </h2>

                  <p className="text-[16px] leading-[1.6] text-[rgba(250,250,250,0.64)] max-w-xl">
                    {step.body}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {step.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] text-[rgba(250,250,250,0.86)]"
                      >
                        <Check
                          className="w-4 h-4 text-[var(--accent)] shrink-0 mt-1"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageFirstDesktop ? 'lg:order-1' : 'lg:order-2'
                  } transition-opacity duration-300 ${
                    activeStep === index ? 'opacity-100' : 'opacity-95'
                  }`}
                >
                  <StepVisual type={step.visualType} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
