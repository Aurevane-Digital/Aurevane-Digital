import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContractorPage } from './pages/ContractorPage';
import { HomeServicesPage } from './pages/HomeServicesPage';
import { JunkRemovalPage } from './pages/JunkRemovalPage';
import { JunkRemovalSeoPage } from './pages/JunkRemovalSeoPage';
import { WebsiteRedesignPage } from './pages/WebsiteRedesignPage';
import { ExcavationPage } from './pages/ExcavationPage';
import { ElectricalPage } from './pages/ElectricalPage';
import { GeneralContractorPage } from './pages/GeneralContractorPage';
import { MobileDetailingPage } from './pages/MobileDetailingPage';
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { CaseStudy, ServicePackage, AuditReportData } from './types';
import { SERVICE_PACKAGES } from './data/packages';
import { ArrowUp } from 'lucide-react';

// Lazy-load on-demand modals to optimize initial bundle size & Core Web Vitals
const CaseStudyModal = React.lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);
const AuditReportModal = React.lazy(() =>
  import('./components/AuditReportModal').then((m) => ({ default: m.AuditReportModal }))
);
const BookingModal = React.lazy(() =>
  import('./components/BookingModal').then((m) => ({ default: m.BookingModal }))
);
const LegalModal = React.lazy(() =>
  import('./components/LegalModal').then((m) => ({ default: m.LegalModal }))
);

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF6F0] text-[#1A1715] flex flex-col font-sans selection:bg-[#EAE0D2] selection:text-[#141210]">
        {/* Accessible Skip Link (Visible only when focused) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#141210] focus:text-[#FAF6F0] focus:text-xs focus:font-semibold focus:uppercase focus:tracking-wider focus:rounded-sm focus:shadow-2xl focus:outline-2 focus:outline-[#9E5249]"
        >
          Skip to main content
        </a>

        {/* FIXED HEADER NAVIGATION (With direct route links) */}
        <Navbar
          onOpenAuditModal={() => {
            const checkEl = document.getElementById('website-check');
            if (checkEl) {
              checkEl.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.location.href = '/contact#website-check';
            }
          }}
        />

        {/* MULTI-PAGE APPLICATION ROUTES */}
        <main id="main-content" tabIndex={-1} className="w-full flex-grow focus:outline-none">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAuditGenerated={handleAuditGenerated} />}
            />
            <Route
              path="/our-work"
              element={
                <WorkPage
                  onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/packages"
              element={<PackagesPage onSelectPackage={handleSelectPackage} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onAuditGenerated={handleAuditGenerated} />}
            />
            <Route path="/contractor-website-design" element={<ContractorPage />} />
            <Route path="/home-services-website-design" element={<HomeServicesPage />} />
            <Route path="/junk-removal-website-design" element={<JunkRemovalPage />} />
            <Route path="/junk-removal-seo" element={<JunkRemovalSeoPage />} />
            <Route path="/website-redesign" element={<WebsiteRedesignPage />} />
            <Route path="/excavation-website-design" element={<ExcavationPage />} />
            <Route path="/electrical-contractor-website-design" element={<ElectricalPage />} />
            <Route path="/general-contractor-website-design" element={<GeneralContractorPage />} />
            <Route path="/mobile-detailing-website-design" element={<MobileDetailingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* ARCHIVAL FOOTER */}
        <Footer
          onOpenPrivacyModal={() => setLegalModal('privacy')}
          onOpenTermsModal={() => setLegalModal('terms')}
        />

        {/* Minimal Floating Scroll-to-Top Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#FAF6F0] text-[#59544E] hover:text-[#141210] border border-[#D9D0C3] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
            aria-label="Scroll to Top of Page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Modals (Lazy Loaded on Demand) */}
        <Suspense fallback={null}>
          {selectedCaseStudy && (
            <CaseStudyModal
              caseStudy={selectedCaseStudy}
              onClose={() => setSelectedCaseStudy(null)}
              onBookSimilar={handleBookSimilar}
            />
          )}

          {auditReport && (
            <AuditReportModal
              report={auditReport}
              onClose={() => setAuditReport(null)}
              onBookCure={() => {
                setAuditReport(null);
                setBookingPackage(SERVICE_PACKAGES[1]);
                setIsBookingModalOpen(true);
              }}
            />
          )}

          {isBookingModalOpen && (
            <BookingModal
              selectedPackage={bookingPackage}
              onClose={() => setIsBookingModalOpen(false)}
              onSuccess={(msg) => showToast(msg)}
            />
          )}

          {legalModal && (
            <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
          )}
        </Suspense>

        {/* Toast Feedback Notification */}
        {toast && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#141210] text-white px-6 py-3 rounded-sm shadow-2xl border border-[#B89255]/40 text-xs tracking-wider flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300">
            <span className="w-2 h-2 rounded-full bg-[#B89255]" />
            <span>{toast}</span>
          </div>
        )}
      </div>
    </Router>
  );
}
