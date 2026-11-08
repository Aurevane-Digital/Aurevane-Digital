import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ethos } from './components/Ethos';
import { SelectedWork } from './components/SelectedWork';
import { Packages } from './components/Packages';
import { WebsiteCheckForm } from './components/WebsiteCheckForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AuditReportModal } from './components/AuditReportModal';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { CaseStudy, ServicePackage, AuditReportData } from './types';
import { SERVICE_PACKAGES } from './data/packages';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // Modals state
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [auditReport, setAuditReport] = useState<AuditReportData | null>(null);
  const [bookingPackage, setBookingPackage] = useState<ServicePackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenAuditModal = () => {
    const el = document.getElementById('website-check');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    setBookingPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const handleBookSimilar = (study: CaseStudy) => {
    const pro = SERVICE_PACKAGES.find((p) => p.id === 'professional') || SERVICE_PACKAGES[1];
    setBookingPackage(pro);
    setIsBookingModalOpen(true);
  };

  const handleAuditGenerated = (report: AuditReportData) => {
    setAuditReport(report);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1715] flex flex-col font-sans selection:bg-[#EAE0D2] selection:text-[#141210]">
      {/* 1. FIXED HEADER NAVIGATION (Large luxury logo, transparent when scrolled) */}
      <Navbar
        onOpenAuditModal={handleOpenAuditModal}
        onOpenInquiryModal={() => {
          setBookingPackage(SERVICE_PACKAGES[1]);
          setIsBookingModalOpen(true);
        }}
      />

      {/* 2. MAIN SECTIONS FLOW */}
      <main className="w-full flex-grow">
        <Hero
          onExploreWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onRequestAudit={handleOpenAuditModal}
        />
        <Ethos />

        {/* 
          CINEMATIC SCROLL-CONTROLLED FRAME ANIMATION (ENTIRE WORK SECTION):
          Begins precisely when entering viewport, pins smoothly,
          progresses through the 5 projects in exact order,
          and unpins cleanly when finished.
        */}
        <SelectedWork
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        <Packages
          onSelectPackage={handleSelectPackage}
        />
        <WebsiteCheckForm onAuditGenerated={handleAuditGenerated} />
        <ContactSection />
      </main>

      {/* 3. ARCHIVAL FOOTER */}
      <Footer
        onNavClick={(anchor) => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenPrivacyModal={() => setLegalModal('privacy')}
        onOpenTermsModal={() => setLegalModal('terms')}
      />

      {/* Minimal Floating Scroll-to-Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className="p-3 bg-[#FAF6F0] text-[#59544E] hover:text-[#141210] border border-[#D9D0C3] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Modals */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onBookSimilar={handleBookSimilar}
      />

      <AuditReportModal
        report={auditReport}
        onClose={() => setAuditReport(null)}
        onBookCure={() => {
          setAuditReport(null);
          setBookingPackage(SERVICE_PACKAGES[1]);
          setIsBookingModalOpen(true);
        }}
      />

      {isBookingModalOpen && (
        <BookingModal
          selectedPackage={bookingPackage}
          onClose={() => setIsBookingModalOpen(false)}
          onSuccess={(msg) => showToast(msg)}
        />
      )}

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />

      {/* Toast Feedback Notification */}
      {toast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#141210] text-white px-6 py-3 rounded-sm shadow-2xl border border-[#B89255]/40 text-xs tracking-wider flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
          <span className="w-2 h-2 rounded-full bg-[#B89255]" />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
