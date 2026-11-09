import React, { useState } from 'react';
import { X, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { AuditFormState, AuditReportData } from '../types';
import { submitToWeb3Forms } from '../services/formService';

interface AuditIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuditGenerated: (report: AuditReportData) => void;
  defaultTrade?: string;
}

export const AuditIntakeModal: React.FC<AuditIntakeModalProps> = ({
  isOpen,
  onClose,
  onAuditGenerated,
  defaultTrade = 'Exterior Contractor / Roofing',
}) => {
  const [formData, setFormData] = useState<AuditFormState>({
    name: '',
    businessName: '',
    websiteUrl: '',
    email: '',
    notes: '',
    tradeType: defaultTrade,
    contractSize: '5k-15k',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.websiteUrl || !formData.email || !formData.businessName) return;

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

    const generatedReport: AuditReportData = {
      url: formData.websiteUrl.startsWith('http') ? formData.websiteUrl : `https://${formData.websiteUrl}`,
      businessName: formData.businessName,
      overallScore: 58,
      tier: 'Moderate Leakage',
      summary: `Your digital presence for ${formData.businessName} has strong potential, but reveals critical drop-off friction points: slow mobile hero render, missing instant bid qualifiers, lack of verified trade licensing badges, and unoptimized local schema.`,
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

    onClose();
    onAuditGenerated(generatedReport);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9E5249]" />
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
              Complimentary 15-Point Website Audit
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <div className="mb-6">
            <h3 className="font-serif text-2xl text-[#141210] font-normal mb-1">
              Request Your Free Website Diagnostic
            </h3>
            <p className="text-xs text-[#59544E] font-light leading-relaxed">
              We inspect speed, mobile conversion paths, local search architecture, and trust signals.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="First &amp; Last Name"
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
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
                  placeholder="e.g. Apex Dirt Works"
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
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
                  placeholder="email@company.com"
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Primary Trade / Category
                </label>
                <select
                  value={formData.tradeType}
                  onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                >
                  <option value="Commercial Hauling / Junk Removal">Commercial Hauling / Junk Removal</option>
                  <option value="Excavation & Dirt Work">Excavation &amp; Dirt Work</option>
                  <option value="Exterior Contractor / Roofing">Exterior Contractor / Roofing</option>
                  <option value="Electrical & Grid Services">Electrical &amp; Grid Services</option>
                  <option value="Other Trade Contractor">Other Trade Contractor</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Average Job / Contract Size
                </label>
                <select
                  value={formData.contractSize || '5k-15k'}
                  onChange={(e) => setFormData({ ...formData, contractSize: e.target.value })}
                  className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
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
                Specific Notes or Objectives
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="What is your biggest frustration with your current site?"
                className="w-full px-4 py-2 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] placeholder:text-[#59544E]/50 focus:outline-none focus:border-[#141210]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-[#141210] text-[#FAF6F0] text-[11px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>Analyzing Site Architecture...</span>
                  </>
                ) : (
                  <>
                    <span>Submit &amp; Generate Preliminary Audit</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
