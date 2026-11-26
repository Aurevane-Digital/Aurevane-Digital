import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Calendar,
  Clock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { MagneticWrap } from '../components/MagneticButton';
import { NotFoundPage } from './NotFoundPage';
import { getBlogPost } from '../data/posts';
import { buildArticleSchema } from '../utils/schema';

function renderRichText(text: string): React.ReactNode {
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    const to = match[2];
    if (to.startsWith('/')) {
      parts.push(
        <Link
          key={`${to}-${match.index}`}
          to={to}
          className="font-medium text-[#9E5249] hover:text-[#141210] underline underline-offset-4 transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${to}-${match.index}`}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#9E5249] hover:text-[#141210] underline underline-offset-4 transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const post = slug ? getBlogPost(slug) : undefined;

  const jsonLd = useMemo(
    () =>
      post
        ? buildArticleSchema({
            slug: post.slug,
            headline: post.title,
            description: post.description,
            datePublished: post.datePublished,
            dateModified: post.dateModified || post.datePublished,
            faqs: post.faqs,
          })
        : undefined,
    [post]
  );

  if (!post) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={post.fullTitle}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* ARTICLE HEADER HERO */}
      <article className="w-full">
        <header className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
          <div data-reveal="heading" className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[#827C75]">
                <li>
                  <Link to="/" className="hover:text-[#141210] transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/blog" className="hover:text-[#141210] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[#9E5249] font-semibold truncate max-w-xs sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Meta Pill */}
            <div className="flex items-center flex-wrap gap-4 text-[11px] uppercase tracking-wider text-[#827C75] mb-4">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#B89255]" />
                <time dateTime={post.datePublished}>{post.datePublished}</time>
              </span>
              {post.dateModified && post.dateModified !== post.datePublished && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#D9D0C3]" />
                  <span className="font-medium">
                    Updated <time dateTime={post.dateModified}>{post.dateModified}</time>
                  </span>
                </>
              )}
              <span className="w-1 h-1 rounded-full bg-[#D9D0C3]" />
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#B89255]" />
                <span>{post.readingTime}</span>
              </span>
            </div>

            {/* Exactly One H1 Per Route */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141210] font-normal leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-[#59544E] font-light leading-relaxed border-l-2 border-[#9E5249] pl-4">
              {post.description}
            </p>
          </div>
        </header>

        {/* ARTICLE BODY CONTENT */}
        <div className="w-full py-16 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
          <div className="max-w-3xl mx-auto space-y-12">
            {post.sections.map((section, idx) => (
              <section key={idx} data-reveal="fade" className="space-y-5">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal tracking-tight">
                  {section.h2}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm md:text-base text-[#59544E] font-light leading-relaxed"
                    >
                      {renderRichText(p)}
                    </p>
                  ))}
                </div>

                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-6 pt-2">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="space-y-3 pl-4 border-l border-[#D9D0C3]">
                        <h3 className="font-serif text-xl sm:text-2xl text-[#141210] font-normal">
                          {sub.h3}
                        </h3>
                        {sub.paragraphs.map((sp, spIdx) => (
                          <p
                            key={spIdx}
                            className="text-sm md:text-base text-[#59544E] font-light leading-relaxed"
                          >
                            {renderRichText(sp)}
                          </p>
                        ))}
                        {sub.bullets && sub.bullets.length > 0 && (
                          <ul className="mt-3 space-y-2">
                            {sub.bullets.map((sb, sbIdx) => (
                              <li
                                key={sbIdx}
                                className="flex items-start gap-2.5 text-xs md:text-sm text-[#141210]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                                <span className="leading-snug">{renderRichText(sb)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5 bg-[#F5EDE2] p-6 rounded-sm border border-[#D9D0C3]/70">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs md:text-sm text-[#141210]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                        <span className="leading-snug">{renderRichText(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* SHORT CHECKLIST BOX */}
            {post.checklistBox && (
              <section
                data-reveal="fade"
                className="p-6 sm:p-8 bg-[#F5EDE2] rounded-sm border border-[#B89255]/60 space-y-4"
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block">
                  Action Checklist
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal">
                  {post.checklistBox.title}
                </h2>
                <ul className="space-y-2.5 pt-2">
                  {post.checklistBox.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs md:text-sm text-[#141210]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#9E5249] shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* CONTEXTUAL IN-ARTICLE CTA BOX */}
            {post.ctaBox && (
              <section
                data-reveal="fade"
                className="p-6 sm:p-8 bg-[#141210] text-[#FAF6F0] rounded-sm border border-[#D9D0C3]/40 space-y-4"
              >
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {post.ctaBox.heading}
                </h2>
                <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed">
                  {post.ctaBox.body}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {post.ctaBox.links.map((ctaLink, cIdx) => (
                    <Link
                      key={ctaLink.to}
                      to={ctaLink.to}
                      className={`btn-editorial px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-sm inline-flex items-center justify-center gap-2 ${
                        cIdx === 0
                          ? 'bg-[#FAF6F0] text-[#141210] hover:bg-white'
                          : 'bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10'
                      }`}
                    >
                      <span>{ctaLink.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQS SECTION */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="pt-8 border-t border-[#D9D0C3]">
                <div data-reveal="heading" className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                    Frequently Asked Questions
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal mt-2">
                    Key Questions &amp; Answers
                  </h2>
                </div>

                <div data-reveal="fade" className="space-y-3">
                  {post.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    const qId = `post-faq-q-${index}`;
                    const aId = `post-faq-ans-${index}`;
                    return (
                      <div
                        key={index}
                        className="border border-[#D9D0C3] rounded-sm bg-[#F5EDE2] overflow-hidden transition-colors duration-200 hover:border-[#B89255]"
                      >
                        <button
                          type="button"
                          id={qId}
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          aria-expanded={isOpen}
                          aria-controls={aId}
                          className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                            className="shrink-0 ml-4"
                            aria-hidden="true"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-colors duration-200 ${
                                isOpen ? 'text-[#9E5249]' : 'text-[#827C75]'
                              }`}
                            />
                          </motion.span>
                        </button>
                        <motion.div
                          id={aId}
                          role="region"
                          aria-labelledby={qId}
                          aria-hidden={!isOpen}
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0,
                          }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#59544E] font-light leading-relaxed border-t border-[#D9D0C3]/40">
                            {faq.a}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* RELATED PAGES */}
            <section className="pt-8 border-t border-[#D9D0C3]">
              <span
                data-reveal="fade"
                className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4"
              >
                Related Solutions &amp; Guides
              </span>
              <div
                data-reveal="stagger-group"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-reveal-item
                    className="card-editorial p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] hover:shadow-sm group flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#827C75] block mb-1">
                        Recommended
                      </span>
                      <span className="font-serif text-base text-[#141210] group-hover:text-[#9E5249] transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#827C75] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
          <div data-reveal="fade" className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
              Direct Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
              Ready to win more bids with a high-converting website?
            </h2>
            <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
              We engineer custom, lead-generating websites for contractors and junk hauling companies with transparent milestone pricing and 100% code ownership.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
                >
                  Get a Free Website Quote
                </Link>
              </MagneticWrap>
              <MagneticWrap className="w-full sm:w-auto">
                <Link
                  to="/packages"
                  className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
                >
                  View Packages &amp; Pricing
                </Link>
              </MagneticWrap>
            </div>
            <div className="pt-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#D9D0C3] hover:text-white transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Back to All Guides</span>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};
