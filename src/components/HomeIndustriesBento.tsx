import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass } from 'lucide-react';
import { HOME_INDUSTRIES_BENTO, IndustryBentoItem } from '../data/homeMedia';

const IndustryCard: React.FC<{ item: IndustryBentoItem }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      to={item.to}
      className={`${item.spanClass} group relative flex flex-col justify-between overflow-hidden rounded-[16px] bg-white/[0.04] backdrop-blur-xl border transition-all duration-300 ease-out md:hover:-translate-y-1.5 ${
        item.featured
          ? 'border-[var(--accent)]/40 hover:border-[var(--accent)] shadow-[0_0_40px_-18px_rgba(212,255,79,0.28)]'
          : 'border-white/[0.06] hover:border-white/20'
      }`}
    >
      {/* 16:10 Thumbnail */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/[0.03]">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.06] to-black/60 text-white/50 p-6">
            <Compass className="w-6 h-6 mb-2 text-[var(--accent)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.25em]">{item.title}</span>
          </div>
        ) : (
          <img
            src={item.image}
            alt={item.alt}
            width={960}
            height={600}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center md:transition-transform md:duration-500 md:group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
      </div>

      {/* Card Body */}
      <div className="p-6 flex items-end justify-between gap-4">
        <div className="space-y-1.5">
          {item.featured && (
            <span className="block font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
              Featured Trade
            </span>
          )}
          <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-[#FAFAFA] group-hover:text-[var(--accent)] transition-colors">
            {item.title}
          </h3>
          <p className="text-[15px] leading-[1.55] text-[rgba(250,250,250,0.64)] line-clamp-2">
            {item.subtitle}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={`shrink-0 w-10 h-10 rounded-[12px] border flex items-center justify-center transition-colors ${
            item.featured
              ? 'border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]'
              : 'border-white/10 bg-white/[0.03] text-[#FAFAFA] group-hover:border-[var(--accent)]/50 group-hover:text-[var(--accent)]'
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export const HomeIndustriesBento: React.FC = () => {
  return (
    <section
      id="industries"
      data-gsap-reveal
      className="w-full py-[clamp(80px,10vw,160px)] px-6 bg-[#0A0A0A] border-b border-white/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-3xl mb-14 space-y-4">
          <p className="font-mono text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)]">
            01 · Industries We Build For
          </p>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#FAFAFA] text-balance">
            Built around the trades where{' '}
            <span className="font-serif italic font-normal text-[var(--accent)]">
              every lead counts.
            </span>
          </h2>
          <p className="text-[16px] leading-[1.6] text-[rgba(250,250,250,0.64)] max-w-2xl">
            Eight specialized trade architectures engineered around how homeowners and commercial
            buyers evaluate contractors in the US.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {HOME_INDUSTRIES_BENTO.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
