import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Features from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SolutionShowcase } from './components/SolutionShowcase';
import { FormProvider } from './context/FormContext';
import { FormModal } from './components/forms/FormModal';
import { SuccessModal } from './components/forms/SuccessModal';
import { QuestionnaireModal } from './components/forms/QuestionnaireModal';
import { HowWeWork } from './components/HowWeWork';

// Main layout for the homepage
const HomeLayout = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Features />
      <SolutionShowcase />
        
      {/* Simple divider between SolutionShowcase (white) and Testimonials (dark blue) */}
      <div className="h-1 bg-[#001219]"></div>
        
      <Testimonials />
      <Contact />
    </main>
    <Footer />
      
    {/* Form Modals */}
    <FormModal />
    <SuccessModal />
    <QuestionnaireModal />
  </>
);

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen">
        <Router>
          <Routes>
            {/* Hidden route for the "how-we-work" page */}
            <Route path="/how-we-work" element={<HowWeWork />} />
            
            {/* Main homepage */}
            <Route path="/*" element={<HomeLayout />} />
          </Routes>
        </Router>
      </div>
    </FormProvider>
  );
}

export default App;