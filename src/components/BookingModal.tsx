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
  const [phone, setPhone] = useState('');
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#141210]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative w-full max-w-2xl bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm shadow-2xl overflow-hidden my-8 focus:outline-none"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F5EDE2] border-b border-[#D9D0C3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#9E5249]">
              Engagement Intake
            </span>
            <span className="text-[#827C75]">•</span>
            <h2 id="booking-modal-title" className="text-xs font-semibold text-[#141210]">Reserve Studio Capacity</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-[#59544E] hover:text-[#141210] hover:bg-[#ECE2D3] rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Honeypot field for bot spam prevention */}
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

          {/* Package Selector Pills */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-2">
              Select Desired Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SERVICE_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setCurrentPkgId(pkg.id)}
                  className={`p-3 text-left border rounded-xs transition-all cursor-pointer ${
                    currentPkgId === pkg.id
                      ? 'border-[#9E5249] bg-[#FAF6F0] shadow-xs ring-1 ring-[#9E5249]'
                      : 'border-[#D9D0C3] bg-[#F5EDE2] hover:border-gray-400'
                  }`}
                >
                  <span className="text-xs font-bold block text-[#141210]">{pkg.name}</span>
                  <span className="text-[11px] text-[#9E5249] font-serif block mt-0.5">
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
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-2">
                Optional Enhancements
              </label>
              <div className="space-y-2">
                {ADD_ON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 border rounded-xs flex items-start justify-between cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-[#9E5249] bg-[#FAF6F0]'
                          : 'border-[#D9D0C3] bg-[#F5EDE2]/50 hover:bg-[#F5EDE2]'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className="mt-0.5 accent-[#9E5249] pointer-events-none"
                        />
                        <div>
                          <span className="text-xs font-semibold text-[#141210] block">
                            {addon.name}
                          </span>
                          <span className="text-[11px] text-[#59544E] block">
                            {addon.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#141210] shrink-0 ml-3">
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
          <div className="space-y-4 pt-2 border-t border-[#D9D0C3]">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#141210]">
              Organization &amp; Stakeholder Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
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
                  className="w-full px-3.5 py-2 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
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
                  className="w-full px-3.5 py-2 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-business" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
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
                  className="w-full px-3.5 py-2 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                />
              </div>

              <div>
                <label htmlFor="booking-launch" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                  Target Launch Horizon
                </label>
                <select
                  id="booking-launch"
                  name="targetLaunch"
                  value={targetLaunch}
                  onChange={(e) => setTargetLaunch(e.target.value)}
                  className="w-full px-3.5 py-2 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
                >
                  <option value="Urgent (14 Days)">Urgent (14 Days)</option>
                  <option value="Within 30 Days">Within 30 Days</option>
                  <option value="Next Quarter">Next Quarter</option>
                  <option value="Exploratory">Exploratory / Budget Phase</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-notes" className="block text-[11px] uppercase tracking-wider font-semibold text-[#141210] mb-1">
                Project Specifics or Key Challenges
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention current website URL, specific geographic counties you want to target, or special tools needed..."
                className="w-full px-3.5 py-2 bg-[#FAF6F0] border border-[#D9D0C3] rounded-sm text-sm text-[#141210] focus:outline-none focus:border-[#141210]"
              />
            </div>
          </div>

          {/* Price Summary & Submit */}
          <div className="p-4 bg-[#F5EDE2] border border-[#D9D0C3] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#59544E] block">
                {currentPkg.name} ({selectedPkgPriceLabel}) — Estimated Starting Investment
              </span>
              <span className="font-serif text-2xl font-bold text-[#141210]">
                {totalPrice}
              </span>
              <span className="block text-[10px] text-[#59544E] mt-0.5">
                Final pricing depends on project scope.
              </span>
            </div>
            <div className="sm:text-right text-[11px] text-[#59544E]">
              <span>50% Deposit upon kickoff</span>
              <span className="block text-[10px] text-[#9E5249]">Defined delivery timeline</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#141210] text-white text-[12px] font-semibold uppercase tracking-[0.2em] rounded-sm hover:bg-[#34302D] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-60"
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
