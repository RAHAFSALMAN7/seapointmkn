import { MessageSquare, Home, Check, Sparkles } from "lucide-react";

interface VirtualSellerProps {
  t: any;
  language: "ar" | "en";
}

export default function VirtualSeller({ t, language }: VirtualSellerProps) {
  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE – TEXT */}
          <div className="order-2 md:order-1 animate-fade-in-left">
            <div className="mb-8">
              <div className="w-20 h-1 bg-[#D9C18E] mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-6">
                {t.virtualSeller.title}
              </h2>
              <p className="text-2xl text-[#D9C18E] font-semibold mb-8">
                {t.virtualSeller.subtitle}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {t.virtualSeller.features.map((feature: any, index: number) => {
                const icons = [MessageSquare, Home, Check, Sparkles];
                const Icon = icons[index];

                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003B4A] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE – LIVE AVATAR IFRAME */}
          <div className="order-1 md:order-2 animate-fade-in-right">
            <div className="relative group">

              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#003B4A] to-[#004B5A] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

              {/* Frame Container */}
              <div className="relative bg-gradient-to-br from-[#003B4A] to-[#004B5A] rounded-3xl p-4 shadow-2xl">

                {/* IFRAME */}
                <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D9C18E]/40">
                  <iframe
                    src="https://embed.liveavatar.com/v1/2faf3681-59e8-49e2-8c9e-33f1c9adb867"
                    allow="microphone"
                    title="LiveAvatar Embed"
                    className="w-full"
                    style={{ aspectRatio: "16/9" }}
                  ></iframe>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
