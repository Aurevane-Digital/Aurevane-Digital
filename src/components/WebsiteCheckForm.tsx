import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { AuditFormState, AuditReportData } from '../types';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl || !formData.email || !formData.businessName) return;

    setIsSubmitting(true);

    // Simulate instant editorial & performance diagnostic compilation
    setTimeout(() => {
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
            fix: 'Deploy Next-gen WebP/AVIF formats and sub-second critical inline CSS styling.',
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
            finding: 'Lengthy contact inputs with no interactive price or scope visualizer create a 74% abandonment rate.',
            fix: 'Implement a 2-step visual inspection intake funnel with instant text confirmation.',
          },
          {
            category: 'Local Search & Geo Siloing',
            score: 68,
            status: 'warning',
            title: 'Single-Location Generic Landing Page',
            finding: 'Lacking suburban county landing hubs for affluent adjacent zip codes.',
            fix: 'Build targeted geo-silo sub-pages for surrounding tier-1 neighborhoods.',
          },
        ],
      };

      onAuditGenerated(generatedReport);
    }, 900);
  };

  return (
    <section id="website-check" className="w-full py-20 px-6 md:px-12 lg:px-16 border-b border-[#D9D0C3]/60">
      <div className="max-w-4xl mx-auto bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm p-8 md:p-12 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D9D0C3] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9E5249]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold">
              Complimentary Audit
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-[#141210] font-normal mt-2 mb-3">
            Is your website costing you customers?
          </h2>

          <p className="text-sm text-[#59544E] font-light leading-relaxed">
            Your website might be the reason potential high-ticket clients choose someone else. Let us evaluate your digital presence with a free 15-point audit.
          </p>
        </div>

        {success ? (
          <div className="bg-[#FAF6F0] p-8 border border-[#9E5249]/40 rounded-sm text-center space-y-4 animate-in fade-in">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#9E5249]/10 flex items-center justify-center text-[#9E5249]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl text-[#141210]">
              Diagnostic Completed for {formData.businessName}
            </h3>
            <p className="text-xs md:text-sm text-[#59544E] max-w-lg mx-auto">
              We have generated your instant preliminary score report and sent a confirmation to <span className="font-semibold text-[#141210]">{formData.email}</span>. An Aurevane senior designer will conduct a full manual inspection within 24 to 48 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setSuccess(false)}
                className="text-xs text-[#9E5249] font-semibold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Run Another Audit
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Vance Builders LLC"
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Website URL *
                </label>
                <input
                  type="text"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@vancebuilders.com"
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Primary Trade / Category
                </label>
                <select
                  value={formData.tradeType}
                  onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                >
                  <option value="Exterior Contractor / Roofing">Exterior Contractor / Roofing</option>
                  <option value="Electrical & Grid Services">Electrical & Grid Services</option>
                  <option value="Commercial Hauling / Logistics">Commercial Hauling / Logistics</option>
                  <option value="Luxury Custom Home Builder">Luxury Custom Home Builder</option>
                  <option value="High-End Wellness / Atelier">High-End Wellness / Atelier</option>
                  <option value="Fine Dining / Hospitality">Fine Dining / Hospitality</option>
                  <option value="Other High-Ticket Service">Other High-Ticket Service</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Estimated Average Contract Size
                </label>
                <select
                  value={formData.contractSize || '5k-15k'}
                  onChange={(e) => setFormData({ ...formData, contractSize: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                >
                  <option value="under5k">$1,000 – $5,000</option>
                  <option value="5k-15k">$5,000 – $15,000</option>
                  <option value="15k-50k">$15,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                What would you like us to evaluate?
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell us about your conversion rates, lead quality, or specific issues you are facing..."
                className="w-full px-4 py-2.5 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
              />
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center px-10 py-3.5 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-colors duration-200 shadow-sm cursor-pointer disabled:opacity-50"
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
              <p className="text-[10px] text-[#59544E] tracking-wider uppercase mt-3">
                Strictly confidential • 24 to 48 hr manual turnaround • Instant preliminary preview
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
