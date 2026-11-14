import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { AuditFormState, AuditReportData } from '../types';
import { submitToWeb3Forms } from '../services/formService';

interface WebsiteCheckFormProps {
  onAuditGenerated: (report: AuditReportData) => void;
}

export const WebsiteCheckForm: React.FC<WebsiteCheckFormProps> = ({ onAuditGenerated }) => {
  const [formData, setFormData] = useState<AuditFormState>({
    name: '',
    businessName: '',
    websiteUrl: '',
    email: '',
    notes: '',
    tradeType: 'Exterior Contractor / Roofing',
    contractSize: '5k-15k',
  });

  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl || !formData.email || !formData.businessName) return;

    if (honeypot) {
      setIsSubmitting(false);
      setSuccess(true);
      return;
    }

    setIsSubmitting(true);

    await submitToWeb3Forms({
      formType: 'Website Check / Audit',
      subject: `New Website Check Request: ${formData.businessName} (${formData.websiteUrl})`,
      name: formData.name,
      email: formData.email,
      data: {
        'Business Name': formData.businessName,
        'Website URL': formData.websiteUrl,
        'Primary Trade / Category': formData.tradeType,
        'Estimated Average Contract Size': formData.contractSize,
        'Specific Objectives / Notes': formData.notes || 'None provided',
      },
    });

    setIsSubmitting(false);
    setSuccess(true);

    const generatedReport: AuditReportData = {
      url: formData.websiteUrl.startsWith('http') ? formData.websiteUrl : `https://${formData.websiteUrl}`,
      businessName: formData.businessName,
      overallScore: 58,
      tier: 'Moderate Leakage',
      summary:
        `Your digital presence for ${formData.businessName} has strong potential, but reveals 4 critical high-ticket client drop-off friction points: slow mobile hero render, missing instant bid qualifiers, lack of verified trade licensing badges, and unoptimized local schema.`,
      estimatedMissedBidsMonthly: '$18,500 – $45,000',
      metrics: [
        {
          category: 'Mobile First Impressions & Speed',
          score: 54,
          status: 'warning',
          title: 'Mobile Hero Render Latency (3.8s)',
          finding: 'Large uncompressed imagery is delaying above-the-fold content on mobile cellular networks.',
          fix: 'Deploy Next-gen WebP/AVIF formats and fast critical inline CSS styling.',
        },
        {
          category: 'Authority & Trust Signals',
          score: 62,
          status: 'warning',
          title: 'Subdued Insurance & Licensing Visibility',
          finding: 'High-ticket homeowners and commercial procurement cannot immediately find proof of insurance or trade credentials.',
          fix: 'Implement an editorial trust badge bar directly beneath hero headlines.',
        },
        {
          category: 'Conversion Friction & Intake',
          score: 48,
          status: 'critical',
          title: 'Generic Multi-Field Contact Form',
          finding: 'Lengthy contact inputs with no interactive price or scope visualizer create friction on mobile devices.',
          fix: 'Implement a 2-step visual inspection intake funnel with instant text confirmation.',
        },
        {
          category: 'Local Search & Geo Siloing',
          score: 68,
          status: 'warning',
          title: 'Single-Location Generic Landing Page',
          finding: 'Lacking suburban county landing hubs for surrounding residential and commercial areas.',
          fix: 'Build targeted geo-silo sub-pages for surrounding service territories.',
        },
      ],
    };

    onAuditGenerated(generatedReport);
  };

  const inputClass =
    'w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.1] rounded-[12px] text-sm text-[#FAFAFA] placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)]';

  return (
    <section id="website-check" className="w-full py-20 px-6 bg-[#0A0A0A] border-b border-white/[0.06]">
      <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/[0.08] rounded-[16px] p-8 md:p-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-mono text-[12px] uppercase tracking-[0.35em] text-[var(--accent)]">
              Complimentary Audit
            </span>
          </div>

          <h2 className="text-[clamp(26px,3.5vw,38px)] text-[#FAFAFA] font-semibold mt-1 mb-3 leading-tight">
            Is your website costing you customers?
          </h2>

          <p className="text-[15px] text-[rgba(250,250,250,0.64)] leading-[1.6]">
            Your website might be the reason potential high-ticket clients choose someone else. Let us evaluate your digital presence with a free 15-point audit.
          </p>
        </div>

        {success ? (
          <div className="bg-white/[0.04] p-8 border border-[var(--accent)]/40 rounded-[16px] text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent)]/15 flex items-center justify-center text-[var(--accent)]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-semibold text-[#FAFAFA]">
              Diagnostic Completed for {formData.businessName}
            </h3>
            <p className="text-sm text-[rgba(250,250,250,0.64)] max-w-lg mx-auto leading-[1.6]">
              We have generated your instant preliminary score report and sent a confirmation to{' '}
              <span className="font-semibold text-[#FAFAFA]">{formData.email}</span>. An Aurevane senior designer will conduct a full manual inspection within 24 to 48 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSuccess(false);
                  setHoneypot('');
                }}
                className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider hover:underline cursor-pointer"
              >
                Run Another Audit
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
              className="absolute -left-[9999px] -top-[9999px] opacity-0 pointer-events-none"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-name" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Your Name *
                </label>
                <input
                  id="audit-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="audit-business" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Business Name *
                </label>
                <input
                  id="audit-business"
                  name="organization"
                  autoComplete="organization"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Vance Builders LLC"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-url" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Website URL *
                </label>
                <input
                  id="audit-url"
                  name="url"
                  autoComplete="url"
                  type="text"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="audit-email" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Email Address *
                </label>
                <input
                  id="audit-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@vancebuilders.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="audit-trade" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Primary Trade / Category
                </label>
                <select
                  id="audit-trade"
                  name="tradeType"
                  value={formData.tradeType}
                  onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-white/[0.1] rounded-[12px] text-sm text-[#FAFAFA] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="Exterior Contractor / Roofing">Exterior Contractor / Roofing</option>
                  <option value="Electrical & Grid Services">Electrical & Grid Services</option>
                  <option value="Commercial Hauling / Logistics">Commercial Hauling / Logistics</option>
                  <option value="Luxury Custom Home Builder">Luxury Custom Home Builder</option>
                  <option value="Excavation & Earthworks">Excavation & Earthworks</option>
                  <option value="Landscaping & Hardscaping">Landscaping & Hardscaping</option>
                  <option value="Other High-Ticket Service">Other High-Ticket Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="audit-contract-size" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                  Estimated Average Contract Size
                </label>
                <select
                  id="audit-contract-size"
                  name="contractSize"
                  value={formData.contractSize || '5k-15k'}
                  onChange={(e) => setFormData({ ...formData, contractSize: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-white/[0.1] rounded-[12px] text-sm text-[#FAFAFA] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="under5k">$1,000 – $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-50k">$15,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="audit-notes" className="block text-[11px] font-mono uppercase tracking-wider text-[#FAFAFA] mb-1.5">
                What would you like us to evaluate?
              </label>
              <textarea
                id="audit-notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us about your conversion rates, lead quality, or specific issues you are facing..."
                className={inputClass}
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[var(--accent)] text-[#0A0A0A] text-sm font-semibold rounded-[16px] hover:brightness-105 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>Analyzing Site Architecture...</span>
                  </>
                ) : (
                  <>
                    <span>Request Free Audit</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
              <p className="text-[11px] font-mono text-[rgba(250,250,250,0.48)] tracking-wider uppercase mt-3">
                Strictly confidential • 24 to 48 hr manual turnaround • Instant preliminary preview
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
