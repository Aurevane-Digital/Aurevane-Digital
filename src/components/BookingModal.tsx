import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';
import { ServicePackage } from '../types';
import { SERVICE_PACKAGES, ADD_ON_OPTIONS } from '../data/packages';
import { submitToWeb3Forms } from '../services/formService';

interface BookingModalProps {
  selectedPackage: ServicePackage | null;
  onClose: () => void;
  onSuccess: (summary: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  selectedPackage,
  onClose,
  onSuccess,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [currentPkgId, setCurrentPkgId] = useState<string>(
    selectedPackage ? selectedPackage.id : 'professional'
  );

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [onClose]);

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [targetLaunch, setTargetLaunch] = useState('Within 30 Days');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentPkg =
    SERVICE_PACKAGES.find((p) => p.id === currentPkgId) || SERVICE_PACKAGES[1];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const selectedAddonObjects = selectedAddons
    .map((id) => ADD_ON_OPTIONS.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const addonsTotal = selectedAddonObjects.reduce(
    (acc, item) => acc + (item.custom ? 0 : item.price),
    0
  );
  const hasCustomAddon = selectedAddonObjects.some((item) => Boolean(item.custom));

  const basePrice = currentPkg.priceNum || 1500;
  const isCustom = currentPkg.id === 'custom';
  const totalPrice = isCustom
    ? 'Custom Quote'
    : `$${(basePrice + addonsTotal).toLocaleString()}${hasCustomAddon ? ' + custom quote' : ''}`;

  const selectedPkgPriceLabel = `${currentPkg.pricePrefix ? `${currentPkg.pricePrefix} ` : ''}${currentPkg.price}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !businessName) return;

    if (honeypot) {
      setIsSubmitting(false);
      onSuccess(
        `Booking request confirmed for ${currentPkg.name} package. We will send an agreement draft to ${email}.`
      );
      onClose();
      return;
    }

    setIsSubmitting(true);

    const chosenAddonNames = selectedAddonObjects
      .map((addon) =>
        addon.custom
          ? `${addon.name} (Custom quote)`
          : `${addon.name} (${addon.pricePrefix ? `${addon.pricePrefix} ` : ''}+$${addon.price})`
      )
      .join(', ');

    await submitToWeb3Forms({
      formType: 'Package Booking Reservation',
      subject: `New Studio Engagement: ${currentPkg.name} — ${businessName}`,
      name,
      email,
      data: {
        'Selected Package': `${currentPkg.name} (${selectedPkgPriceLabel})`,
        'Selected Add-ons': chosenAddonNames || 'None selected',
        'Estimated Starting Investment': totalPrice,
        'Scope Note': 'Final pricing depends on project scope.',
        'Business Entity / Legal Trade': businessName,
        'Target Launch Horizon': targetLaunch,
        'Project Specifics or Key Challenges': notes || 'None provided',
      },
    });

    setIsSubmitting(false);

    onSuccess(
      `Booking request confirmed for ${currentPkg.name} package. We will send an agreement draft to ${email}.`
    );
    onClose();
  };

  const inputClass =
    'w-full px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.1] rounded-[12px] text-sm text-[#FAFAFA] placeholder:text-white/30 focus:outline-none focus:border-[var(--accent)]';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative w-full max-w-2xl bg-[#111111] border border-white/[0.1] rounded-[16px] shadow-2xl overflow-hidden my-8 focus:outline-none text-[#FAFAFA]"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)]">
              Engagement Intake
            </span>
            <span className="text-white/30">•</span>
            <h2 id="booking-modal-title" className="text-xs font-semibold text-[#FAFAFA]">
              Reserve Studio Capacity
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[rgba(250,250,250,0.64)] hover:text-[#FAFAFA] hover:bg-white/[0.06] rounded-[10px] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 max-h-[78vh] overflow-y-auto space-y-6">
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

          {/* Package Selector */}
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-2">
              Select Desired Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {SERVICE_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setCurrentPkgId(pkg.id)}
                  className={`p-3.5 text-left border rounded-[12px] transition-all cursor-pointer ${
                    currentPkgId === pkg.id
                      ? 'border-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)]'
                      : 'border-white/[0.08] bg-white/[0.02] hover:border-white/25'
                  }`}
                >
                  <span className="text-xs font-semibold block text-[#FAFAFA]">{pkg.name}</span>
                  <span className="text-xs text-[var(--accent)] font-mono block mt-1">
                    {pkg.pricePrefix ? `${pkg.pricePrefix} ` : ''}
                    {pkg.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Add-on selection */}
          {!isCustom && (
            <div>
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-2">
                Optional Enhancements
              </label>
              <div className="space-y-2">
                {ADD_ON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 border rounded-[12px] flex items-start justify-between cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-[var(--accent)] bg-[var(--accent)]/10'
                          : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className="mt-1 accent-[#D4FF4F] pointer-events-none"
                        />
                        <div>
                          <span className="text-xs font-semibold text-[#FAFAFA] block">
                            {addon.name}
                          </span>
                          <span className="text-[11px] text-[rgba(250,250,250,0.64)] block">
                            {addon.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[var(--accent)] shrink-0 ml-3 tabular-nums">
                        {addon.custom
                          ? 'Custom quote'
                          : `${addon.pricePrefix ? `${addon.pricePrefix} ` : ''}+$${addon.price}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Contact Fields */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Organization &amp; Stakeholder Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-1">
                  Full Name *
                </label>
                <input
                  id="booking-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Vance"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-1">
                  Email Address *
                </label>
                <input
                  id="booking-email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="david@vanceexterior.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-business" className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-1">
                  Business Entity / Legal Trade *
                </label>
                <input
                  id="booking-business"
                  name="organization"
                  autoComplete="organization"
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Vance Exterior Systems LLC"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="booking-launch" className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-1">
                  Target Launch Horizon
                </label>
                <select
                  id="booking-launch"
                  name="targetLaunch"
                  value={targetLaunch}
                  onChange={(e) => setTargetLaunch(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#161616] border border-white/[0.1] rounded-[12px] text-sm text-[#FAFAFA] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="Urgent (14 Days)">Urgent (14 Days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Exploratory">Exploratory / Budget Phase</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-notes" className="block font-mono text-[11px] uppercase tracking-wider text-[#FAFAFA] mb-1">
                Project Specifics or Key Challenges
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention current website URL, specific geographic counties you want to target, or special tools needed..."
                className={inputClass}
              />
            </div>
          </div>

          {/* Price Summary & Submit */}
          <div className="p-4 bg-white/[0.03] border border-white/[0.08] rounded-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[rgba(250,250,250,0.64)] block">
                {currentPkg.name} ({selectedPkgPriceLabel}) — Estimated Starting Investment
              </span>
              <span className="text-2xl font-semibold text-[#FAFAFA] tabular-nums">
                {totalPrice}
              </span>
              <span className="block text-[11px] text-[rgba(250,250,250,0.5)] mt-0.5">
                Final pricing depends on project scope.
              </span>
            </div>
            <div className="sm:text-right text-[11px] text-[rgba(250,250,250,0.64)]">
              <span>50% Deposit upon kickoff</span>
              <span className="block text-[11px] text-[var(--accent)] font-mono">
                50% before launch
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[var(--accent)] text-[#0A0A0A] text-sm font-semibold rounded-[16px] hover:brightness-105 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Reserving Studio Capacity...</span>
              </>
            ) : (
              <>
                <span>Confirm &amp; Reserve Studio Capacity</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
