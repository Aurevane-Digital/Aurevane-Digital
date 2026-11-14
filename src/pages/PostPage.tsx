import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { NotFoundPage } from './NotFoundPage';
import { getBlogPost } from '../data/posts';
import { buildArticleSchema } from '../utils/schema';

export const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!slug) {
    return <NotFoundPage />;
  }

  const post = getBlogPost(slug);
  if (!post) {
    return <NotFoundPage />;
  }

  const jsonLd = useMemo(
    () =>
      buildArticleSchema({
        slug: post.slug,
        headline: post.title,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: '2026-11-14',
        faqs: post.faqs,
      }),
    [post.slug, post.title, post.description, post.datePublished, post.faqs]
  );

  return (
    <>
      <SEO
        title={`${post.seoTitle ?? post.title} | Aurevane Digital`}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        jsonLd={jsonLd}
      />

      {/* ARTICLE HEADER HERO */}
      <article className="w-full">
        <header className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[#59544E]">
                <li>
                  <Link to="/" className="hover:text-[#141210] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to="/blog" className="hover:text-[#141210] transition-colors">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-[#9E5249] font-semibold truncate max-w-xs sm:max-w-md">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Meta Pill */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider text-[#59544E] mb-4">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#9E5249]" aria-hidden="true" />
                <time dateTime={post.datePublished}>{post.datePublished}</time>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D9D0C3]" aria-hidden="true" />
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#9E5249]" aria-hidden="true" />
                <span>{post.readingTime}</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D9D0C3]" aria-hidden="true" />
              <span className="font-medium text-[#141210]">
                Last updated: November 2026
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
              <section key={idx} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal tracking-tight">
                  {section.h2}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm md:text-base text-[#59544E] font-light leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5 bg-[#F5EDE2] p-6 rounded-sm border border-[#D9D0C3]/70">
                    {section.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-xs md:text-sm text-[#141210]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B89255] shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* FAQS SECTION */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="pt-8 border-t border-[#D9D0C3]">
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                    Frequently Asked Questions
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal mt-2">
                    Key Questions &amp; Answers
                  </h2>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    const qId = `post-faq-q-${index}`;
                    const aId = `post-faq-ans-${index}`;
                    return (
                      <div
                        key={index}
                        className="border border-[#D9D0C3] rounded-sm bg-[#F5EDE2] overflow-hidden"
                      >
                        <h3>
                          <button
                            type="button"
                            id={qId}
                            onClick={() => setOpenFaq(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            aria-controls={aId}
                            className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#59544E] shrink-0 ml-4 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-[#9E5249]' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        </h3>
                        <div
                          id={aId}
                          role="region"
                          aria-labelledby={qId}
                          hidden={!isOpen}
                          className={`px-5 pb-5 pt-0 text-xs sm:text-sm text-[#59544E] font-light leading-relaxed ${
                            isOpen ? 'block' : 'hidden'
                          }`}
                        >
                          {faq.a}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* RELATED PAGES */}
            <section className="pt-8 border-t border-[#D9D0C3]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-4">
                Related Solutions &amp; Guides
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#59544E] block mb-1">
                        Recommended
                      </span>
                      <span className="font-serif text-base text-[#141210] group-hover:text-[#9E5249] transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ArrowRight aria-hidden="true" className="w-4 h-4 text-[#59544E] group-hover:text-[#9E5249] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
          <div className="max-w-3xl mx-auto space-y-6">
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
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89255]"
              >
                Get a Free Website Quote
              </Link>
              <Link
                to="/packages"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89255]"
              >
                View Packages &amp; Pricing
              </Link>
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
