import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveDemoShowcase } from './components/LiveDemoShowcase';
import { Features } from './components/Features';
import { RoiCalculator } from './components/RoiCalculator';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { LeadModal } from './components/LeadModal';
import { Footer } from './components/Footer';

export function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Profissional');
  const [selectedStudentCount, setSelectedStudentCount] = useState(400);

  const handleOpenLeadModal = () => {
    setSelectedPlan('Profissional');
    setIsLeadModalOpen(true);
  };

  const handleOpenWithPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsLeadModalOpen(true);
  };

  const handleOpenWithStudents = (count: number) => {
    setSelectedStudentCount(count);
    setIsLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-on-primary">
      <Toaster position="top-right" />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero onOpenLeadModal={handleOpenLeadModal} />

      {/* Interactive Modules Showcase */}
      <LiveDemoShowcase />

      {/* Commercial Advantages & Features */}
      <Features />

      {/* Interactive ROI Calculator */}
      <RoiCalculator onOpenLeadModalWithStudentCount={handleOpenWithStudents} />

      {/* Pricing Plans */}
      <Pricing onOpenLeadModalWithPlan={handleOpenWithPlan} />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <Faq onOpenLeadModal={handleOpenLeadModal} />

      {/* Footer */}
      <Footer onOpenLeadModal={handleOpenLeadModal} />

      {/* Lead Capture Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        initialPlan={selectedPlan}
        initialStudentCount={selectedStudentCount}
      />
    </div>
  );
}

export default App;
