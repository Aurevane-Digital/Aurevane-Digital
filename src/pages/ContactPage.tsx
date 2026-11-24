import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Mail, Instagram, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { WebsiteCheckForm } from '../components/WebsiteCheckForm';
import { SEO } from '../components/SEO';
import { getSeo } from '../data/seoRoutes';
import { AuditReportData } from '../types';

const ACCESS_KEY = '5997eddf-c01e-4be8-b0e2-3e3638e28b10';

interface ContactPageProps {
  onAuditGenerated: (report: AuditReportData) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onAuditGenerated }) => {
  const s = getSeo('/contact');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });

  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (botcheck) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          business: formState.business,
          message: formState.message,
          subject: 'New website enquiry',
          from_name: 'Aurevane Digital',
          botcheck: '',
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === true) {
        setSubmittedName(formState.name);
        setFormState({
          name: '',
          email: '',
          phone: '',
          business: '',
          message: '',
        });
        setBotcheck(false);
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Unable to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Network error while sending your inquiry. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO title={s.title} description={s.description} canonicalPath="/contact" />

      {/* HEADER MASTHEAD */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 bg-[#F5EDE2] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div data-reveal="heading" className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Initiate Project
              </span>
              <div data-reveal="line" className="h-px w-10 bg-[#9E5249]/40" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#141210] font-normal leading-[1.1] mb-6">
              Let's Create Something Your Business Deserves.
            </h1>

            <p className="text-sm md:text-base text-[#59544E] font-light leading-relaxed">
              We accept a limited number of clients each quarter to protect architectural rigor and client attention. Tell us about your organization and target timeline below, or request a free diagnostic audit of your current site.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECT INQUIRY & CONTACT CHANNELS */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Details Left Column */}
            <div data-reveal="heading" className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                  Direct Studio Access
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-4">
                  Have something specific in mind?
                </h2>
                <p className="text-sm text-[#59544E] font-light leading-relaxed mb-8">
                  Whether you are planning a complete rebrand or launching a new trade territory, our principal team is available for direct inquiries and technical consultations.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-[#D9D0C3]/60">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5EDE2] rounded-sm text-[#B89255] border border-[#D9D0C3]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#827C75] block font-semibold">
                      Direct Email
                    </span>
                    <a
                      className="text-sm sm:text-base font-medium text-[#141210] hover:text-[#9E5249] transition-colors"
                      href="mailto:aurevanedigital@gmail.com"
                    >
                      aurevanedigital@gmail.com
                    </a>
                    <p className="text-xs text-[#59544E] mt-0.5">Response within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F5EDE2] rounded-sm text-[#B89255] border border-[#D9D0C3]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#827C75] block font-semibold">
                      Social &amp; Editorial Archive
                    </span>
                    <a
                      href="https://www.instagram.com/aurevanedigital/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-[#141210] hover:text-[#9E5249] transition-colors underline-offset-4 hover:underline font-medium"
                    >
                      @aurevanedigital
                    </a>
                    <p className="text-xs text-[#59544E] mt-0.5">Behind-the-scenes &amp; case studies</p>
                  </div>
                </div>

                <div className="p-5 bg-[#F5EDE2] rounded-sm border border-[#D9D0C3] mt-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#9E5249] font-bold block mb-1">
                    Direct Founder Guarantee
                  </span>
                  <p className="text-xs text-[#59544E] font-light leading-relaxed">
                    No offshore sub-contractors, no call center reps. Every project is planned and executed directly with senior engineers.
                  </p>
                </div>
              </div>
            </div>

            {/* Functional Enquiry Form Right Column */}
            <div
              data-reveal="fade"
              className="lg:col-span-7 bg-[#F5EDE2] p-8 md:p-10 rounded-sm border border-[#D9D0C3]"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="contact-page-success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#9E5249]/10 flex items-center justify-center text-[#9E5249]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#141210]">
                      Inquiry Received
                    </h3>
                    <p className="text-xs md:text-sm text-[#59544E] max-w-md mx-auto">
                      Thank you for reaching out{submittedName ? `, ${submittedName}` : ''}. Aurevane Principal will review your project requirements and respond within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage(null);
                      }}
                      className="text-xs text-[#9E5249] uppercase tracking-wider font-semibold hover:underline cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="contact-page-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                    onSubmit={handleSubmit}
                  >
                  {/* Hidden honeypot checkbox for bot spam prevention */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#9E5249]" />
                    <h3 className="font-serif text-xl text-[#141210]">
                      Start a Project Conversation
                    </h3>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 bg-[#FAF6F0] border border-[#9E5249] rounded-sm text-xs text-[#9E5249] font-medium"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="direct-contact-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                        Name *
                      </label>
                      <input
                        id="direct-contact-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="First &amp; Last Name"
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                      />
                    </div>

                    <div>
                      <label htmlFor="direct-contact-email" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                        Email *
                      </label>
                      <input
                        id="direct-contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="email@company.com"
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="direct-contact-phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                        Phone Number
                      </label>
                      <input
                        id="direct-contact-phone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                      />
                    </div>

                    <div>
                      <label htmlFor="direct-contact-business" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                        Business Name &amp; Trade *
                      </label>
                      <input
                        id="direct-contact-business"
                        name="organization"
                        autoComplete="organization"
                        type="text"
                        required
                        value={formState.business}
                        onChange={(e) => setFormState({ ...formState, business: e.target.value })}
                        placeholder="e.g. Apex Electrical Contracting"
                        className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="direct-contact-message" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      id="direct-contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your current site, business goals, and what transformation you want to achieve..."
                      className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-editorial w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] shadow-sm cursor-pointer disabled:opacity-60 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIMENTARY WEBSITE DIAGNOSTIC */}
      <section id="website-check">
        <WebsiteCheckForm onAuditGenerated={onAuditGenerated} />
      </section>
    </>
  );
};
