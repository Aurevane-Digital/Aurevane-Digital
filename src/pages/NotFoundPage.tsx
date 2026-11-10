import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Package, Mail, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Aurevane Digital"
        description="The page you are looking for does not exist."
        canonicalPath="/"
        noindex
      />

      {/* HERO MASTHEAD */}
      <section className="w-full pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Error 404
              </span>
              <div className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Page not found
            </h1>

            <p className="font-serif italic text-xl md:text-2xl text-[#9E5249] mb-6">
              The page you are looking for has been relocated or no longer exists.
            </p>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              We invite you to explore our work, browse our transparent packages, or return to the main homepage.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION BUTTONS SECTION */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Helpful Destinations
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#141210] font-normal mt-2">
              Where would you like to go next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Button 1: Home */}
            <Link
              to="/"
              className="p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group flex flex-col justify-between"
            >
              <div>
                <Home className="w-5 h-5 text-[#B89255] mb-3" />
                <h3 className="font-serif text-lg text-[#141210] group-hover:text-[#9E5249] transition-colors mb-1">
                  Home
                </h3>
                <p className="text-xs text-[#59544E] font-light leading-relaxed">
                  Return to the main overview and contractor quote flow.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                <span>Go to Home</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Button 2: Our Work */}
            <Link
              to="/our-work"
              className="p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group flex flex-col justify-between"
            >
              <div>
                <Compass className="w-5 h-5 text-[#B89255] mb-3" />
                <h3 className="font-serif text-lg text-[#141210] group-hover:text-[#9E5249] transition-colors mb-1">
                  Our Work
                </h3>
                <p className="text-xs text-[#59544E] font-light leading-relaxed">
                  Interactive frame-by-frame contractor showcase archive.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                <span>Explore Work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Button 3: Packages */}
            <Link
              to="/packages"
              className="p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group flex flex-col justify-between"
            >
              <div>
                <Package className="w-5 h-5 text-[#B89255] mb-3" />
                <h3 className="font-serif text-lg text-[#141210] group-hover:text-[#9E5249] transition-colors mb-1">
                  Packages
                </h3>
                <p className="text-xs text-[#59544E] font-light leading-relaxed">
                  Transparent milestone pricing and trade add-on options.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                <span>View Packages</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Button 4: Contact */}
            <Link
              to="/contact"
              className="p-6 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] hover:border-[#9E5249] transition-all group flex flex-col justify-between"
            >
              <div>
                <Mail className="w-5 h-5 text-[#B89255] mb-3" />
                <h3 className="font-serif text-lg text-[#141210] group-hover:text-[#9E5249] transition-colors mb-1">
                  Contact
                </h3>
                <p className="text-xs text-[#59544E] font-light leading-relaxed">
                  Initiate a project inquiry or complimentary site audit.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#D9D0C3]/60 flex items-center justify-between text-[11px] font-semibold text-[#141210] group-hover:text-[#9E5249]">
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
