import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface VirtualTourProps {
  t: any;
}

export default function VirtualTour({ t }: VirtualTourProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-br from-[#003B4A] to-[#004B5A] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #D9C18E 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ================= فيديو المشروع الكبير ================= */}
      <div className="relative w-full max-w-7xl mx-auto mb-32 px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <video
            src="/SEAPOINTPROJECT.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-[60vh] md:h-[75vh] object-cover"
          />

          {/* Overlay خفيف */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* ================= محتوى الجولة الافتراضية ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.tour.title}
          </h2>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t.tour.subtitle}
          </p>
        </div>

        {/* Preview Box */}
        <div
          className="relative group cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-3xl blur opacity-50 group-hover:opacity-70 transition duration-500" />

          <div className="relative bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] p-1.5 rounded-3xl">
            <div className="bg-[#003B4A] rounded-[1.4rem] p-8 md:p-16">
              <div className="aspect-video bg-gradient-to-br from-[#004B5A] to-[#003B4A] rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition duration-500">
                
                {/* Background Preview Image */}
                <img
                  src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="360 Tour Preview"
                  className="w-full h-full object-cover opacity-40"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#D9C18E] rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl transform group-hover:scale-110 transition duration-300">
                      <Maximize2 className="text-[#003B4A]" size={40} />
                    </div>

                    <p className="text-white text-2xl font-semibold">
                      {t.tour.cta}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-white/70 text-center mt-8 text-lg leading-relaxed">
                {t.tour.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL WITH IFRAME ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#D9C18E] transition"
          >
            <X size={40} />
          </button>

          {/* iFrame Container */}
          <div className="w-full max-w-5xl h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#D9C18E]/40">
            <iframe
              src="//storage.net-fs.com/hosting/8446401/4/"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="fullscreen; accelerometer; gyroscope; vr; autoplay; camera; microphone"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
