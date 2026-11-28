import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MagneticWrap } from '../components/MagneticButton';
import { getSeo } from '../data/seoRoutes';
import { BLOG_POSTS } from '../data/posts';
import { buildWebPageSchema } from '../utils/schema';

export const BlogPage: React.FC = () => {
  const seo = getSeo('/blog');
  const jsonLd = useMemo(
    () =>
      buildWebPageSchema({
        path: '/blog',
        name: seo.title,
        description: seo.description,
        pageType: 'CollectionPage',
        breadcrumbLabel: 'Blog',
      }),
    [seo.title, seo.description]
  );

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath="/blog"
        jsonLd={jsonLd}
      />

      {/* HEADER HERO */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Knowledge Base &amp; Strategy
              </span>
              <div data-reveal="line" className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Website &amp; SEO Guides for Contractors and Junk Removal Companies
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              Actionable guides, real-world pricing breakdowns, and local search optimization strategies engineered specifically for{' '}
              <Link
                to="/contractor-website-design"
                className="font-medium text-[#9E5249] hover:text-[#141210] underline underline-offset-4 transition-colors"
              >
                contractors
              </Link>
              , specialty trades, and{' '}
              <Link
                to="/junk-removal-website-design"
                className="font-medium text-[#9E5249] hover:text-[#141210] underline underline-offset-4 transition-colors"
              >
                junk removal companies
              </Link>{' '}
              across the United States.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES LISTING */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div
            data-reveal="stagger-group"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                data-reveal-item
                className="card-editorial bg-[#F5EDE2] p-8 rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Meta Tags */}
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider text-[#827C75] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B89255]" />
                      <span>{post.dateModified || post.datePublished}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#D9D0C3]" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B89255]" />
                      <span>{post.readingTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl text-[#141210] group-hover:text-[#9E5249] transition-colors leading-tight mb-4 font-normal">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#59544E] font-light leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-[#D9D0C3]/60 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#9E5249] group-hover:text-[#141210] transition-colors cursor-pointer"
                  >
                    <span>Read {post.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </Link>
                  <BookOpen className="w-4 h-4 text-[#827C75]/60 shrink-0 ml-2" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#141210] text-[#FAF6F0] text-center">
        <div data-reveal="fade" className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-bold">
            Tailored Development
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
            Ready to upgrade your contractor website?
          </h2>
          <p className="text-xs sm:text-sm text-[#D9D0C3] font-light leading-relaxed max-w-xl mx-auto">
            We build high-converting, fast-loading websites with one-time milestone pricing, no mandatory monthly retainers, and 100% code ownership. Explore packages or request a diagnostic check.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticWrap className="w-full sm:w-auto">
              <Link
                to="/packages"
                className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0] text-[#141210] hover:bg-white text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
              >
                View Service Packages
              </Link>
            </MagneticWrap>
            <MagneticWrap className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-editorial block w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#FAF6F0]/40 text-[#FAF6F0] hover:bg-[#FAF6F0]/10 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm cursor-pointer"
              >
                Get a Free Website Quote
              </Link>
            </MagneticWrap>
          </div>
        </div>
      </section>
    </>
  );
};
