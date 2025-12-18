import { useState } from "react";
import VideoSection from "./components/VideoSection";
import Hero from "./components/Hero";
import VirtualTour from "./components/VirtualTour";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ProjectVideoGallery from "./components/ProjectVideoGallery";

import { content } from "./data/content";
import VirtualSellerCentered from "./components/VirtualSeller";

function App() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  const t = content[language];

  return (
    <div
      className="min-h-screen bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* HERO */}
      <Hero t={t} language={language} setLanguage={setLanguage} />

      {/* INTERIOR / PROJECT VIDEOS */}
      <ProjectVideoGallery t={t} />

      {/* VIRTUAL TOUR */}
      <VirtualTour t={t} />

      {/* SMART HOME VIDEO SECTION */}
      <VideoSection t={t} />

      {/* HEYGEN VIRTUAL SELLER (FLOATING) */}
      <VirtualSellerCentered />

      {/* GALLERY */}
      <Gallery t={t} />

      {/* PRICING / FEATURES */}
      <Features t={t} />

      {/* CTA */}
      <CTA t={t} />

      {/* FOOTER */}
      <Footer t={t} />

      {/* GLOBAL ANIMATIONS */}
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up-delay {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-20px) translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .animate-fade-in-up-delay { animation: fade-in-up-delay 1.2s ease-out; }
        .animate-fade-in-left { animation: fade-in-left 1s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 1s ease-out; }

        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
