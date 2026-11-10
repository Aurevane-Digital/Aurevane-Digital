import React, { useState } from 'react';
import { Mail, Instagram, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { submitToWeb3Forms } from '../services/formService';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    await submitToWeb3Forms({
      formType: 'Direct Contact Inquiry',
      subject: `New Project Inquiry: ${formState.name} — ${formState.business || 'New Lead'}`,
      name: formState.name,
      email: formState.email,
      data: {
        'Business Name & Trade': formState.business,
        'Project Details & Objectives': formState.message,
      },
    });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
                Initiate Project
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-[#141210] font-normal mt-2 mb-4">
                Have something in mind?
              </h2>
              <p className="font-serif italic text-xl md:text-2xl text-[#9E5249] mb-6">
                Let's create something your business deserves.
              </p>
              <p className="text-sm text-[#59544E] font-light leading-relaxed mb-8">
                We accept a limited number of clients each quarter to protect architectural rigor and client attention. Tell us about your organization and target timeline.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#D9D0C3]/60">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B89255]" />
                <a
                  className="text-sm font-medium text-[#141210] hover:text-[#9E5249] transition-colors"
                  href="mailto:aurevanedigital@gmail.com"
                >
                  aurevanedigital@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-[#B89255]" />
                <a
                  href="https://www.instagram.com/aurevanedigital/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#59544E] hover:text-[#141210] transition-colors underline-offset-4 hover:underline"
                >
                  Instagram: Aurevane Digital
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F5EDE2] p-8 md:p-10 rounded-sm border border-[#D9D0C3]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#9E5249]/10 flex items-center justify-center text-[#9E5249]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#141210]">
                  Inquiry Received
                </h3>
                <p className="text-xs md:text-sm text-[#59544E] max-w-md mx-auto">
                  Thank you for reaching out, {formState.name}. Aurevane Principal will review your project requirements and respond within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', business: '', message: '' });
                  }}
                  className="text-xs text-[#9E5249] uppercase tracking-wider font-semibold hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                      Name *
                    </label>
                    <input
                      id="contact-name"
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
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                      Email *
                    </label>
                    <input
                      id="contact-email"
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

                <div>
                  <label htmlFor="contact-business" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                    Business Name &amp; Trade *
                  </label>
                  <input
                    id="contact-business"
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

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                    Project Details &amp; Objectives *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
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
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-colors duration-200 shadow-sm cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
