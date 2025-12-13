import { Check } from "lucide-react";

interface AboutProps {
  t: any;
  language: "ar" | "en";
}

export default function About({ t, language }: AboutProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#D9C18E]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#003B4A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE VIDEO */}
          <div className="relative animate-fade-in-left">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl transform -rotate-2" />
            <div className="absolute -inset-6 bg-gradient-to-tl from-[#003B4A]/10 to-transparent rounded-3xl transform rotate-2" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Pattern overlay */}
              <div
                className="absolute -inset-4"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, #D9C18E 10px, #D9C18E 11px, transparent 11px, transparent 20px)",
                  opacity: 0.1,
                }}
              />

              {/* Video */}
              <video
                src="/SEAPOINT.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-[600px] object-cover relative"
              />
            </div>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="animate-fade-in-right">
            <div className="mb-8">
              <div className="relative inline-block mb-6">
                <div
                  className={`absolute -top-4 ${
                    language === "ar" ? "-right-4" : "-left-4"
                  } w-24 h-1 bg-[#D9C18E] transform -rotate-12`}
                />
                <div className="w-20 h-1 bg-[#D9C18E]" />
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-6">
                {t.about.title}
              </h2>

              <div
                className={`w-32 h-1 bg-gradient-to-r from-[#D9C18E] to-transparent mb-8 ${
                  language === "ar" ? "" : "bg-gradient-to-l"
                }`}
              />
            </div>

            <div
              className={`space-y-6 text-lg text-gray-700 leading-loose ${
                language === "ar" ? "text-justify" : "text-left"
              }`}
            >
              {t.about.paragraphs.map((p: string, index: number) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-full flex items-center justify-center shadow-lg">
                  <Check className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#003B4A]">
                    {t.about.experience}
                  </p>
                  <p className="text-gray-600">
                    {t.about.experienceDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
