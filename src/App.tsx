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

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/972595036932"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="whatsapp-icon"
          fill="white"
        >
          <path d="M19.11 17.2c-.28-.14-1.65-.81-1.91-.9-.26-.09-.45-.14-.64.14-.19.28-.73.9-.9 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33zM16.03 3C9.4 3 4 8.4 4 15.03c0 2.65.87 5.1 2.35 7.07L4 29l7.12-2.29c1.91 1.04 4.1 1.63 6.91 1.63 6.63 0 12.03-5.4 12.03-12.03C28.06 8.4 22.66 3 16.03 3zm0 22.1c-2.35 0-4.53-.63-6.4-1.72l-.46-.27-4.23 1.36 1.38-4.12-.3-.47c-1.18-1.9-1.81-4.09-1.81-6.35 0-6.56 5.36-11.9 11.82-11.9 6.46 0 11.82 5.34 11.82 11.9 0 6.56-5.36 11.9-11.82 11.9z" />
        </svg>
      </a>

      {/* GALLERY */}
      <Gallery t={t} />

      {/* PRICING / FEATURES */}
      <Features t={t} />

      {/* CTA */}
      <CTA t={t} />

      {/* FOOTER */}
      <Footer t={t} />

      {/* GLOBAL STYLES & ANIMATIONS */}
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .whatsapp-float {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 56px;
          height: 56px;
          background-color: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 9999;
          transition: transform 0.2s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        .whatsapp-icon {
          width: 28px;
          height: 28px;
        }

        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}

export default App;
