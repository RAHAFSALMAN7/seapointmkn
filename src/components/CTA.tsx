import { Phone, Mail, User, MessageSquare } from "lucide-react";

interface CTAProps {
  t: any;
}

export default function CTA({ t }: CTAProps) {

  /* ===== WIDGET ACTIONS ===== */
  const openChatWidget = () => {
    const chatBtn = document.getElementById("chat-widget-button");
    chatBtn?.click();
  };

  const openCallWidget = () => {
    const callBtn = document.getElementById("chat-widget-call-button");
    callBtn?.click();
  };

  return (
    <section className="py-32 bg-gradient-to-br from-[#f8f6f3] via-[#ede7dd] to-[#f8f6f3] relative overflow-hidden">

      {/* DECORATION */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9C18E]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <div className="animate-fade-in-up text-center lg:text-start">

            <h2 className="text-5xl md:text-6xl font-bold text-[#003B4A] mb-8 leading-tight">
              {t.cta.title}
            </h2>

            <p className="text-2xl text-gray-700 mb-10 leading-relaxed">
              {t.cta.subtitle}
            </p>

            {/* ===== CONTACT TITLE ===== */}
            <h4 className="text-xl font-bold text-[#003B4A] mb-2">
              {t.cta.contactTitle}
            </h4>

            <p className="text-gray-600 mb-10">
              {t.cta.contactDescription}
            </p>

            {/* ===== CONTACT METHODS ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14">

              {/* CALL */}
              <button
                onClick={openCallWidget}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-[#003B4A]
                                flex items-center justify-center
                                shadow-xl mb-4 group-hover:scale-110 transition">
                  <Phone size={32} className="text-white" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.cta.contactMethods.call}
                </p>
              </button>

              {/* CHAT */}
              <button
                onClick={openChatWidget}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-[#D9C18E]
                                flex items-center justify-center
                                shadow-xl mb-4 group-hover:scale-110 transition">
                  <Mail size={30} className="text-[#003B4A]" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.cta.contactMethods.chat}
                </p>
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/972595036932"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-[#25D366]
                                flex items-center justify-center
                                shadow-xl mb-4 group-hover:scale-110 transition">
                  <MessageSquare size={30} className="text-white" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.cta.contactMethods.whatsapp}
                </p>
              </a>

            </div>

            {/* NOTE */}
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              {t.cta.note}
            </p>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className="animate-fade-in-up bg-white/70 backdrop-blur rounded-3xl p-10 shadow-2xl border border-[#D9C18E]/30">

            <h3 className="text-3xl font-bold text-[#003B4A] mb-8 text-center">
              {t.cta.formTitle}
            </h3>

            <form className="grid gap-6">

              {/* NAME */}
              <div className="relative">
                <User className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="text"
                  placeholder={t.cta.name}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="tel"
                  placeholder={t.cta.phone}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute top-1/2 -translate-y-1/2 left-4 text-[#D9C18E]" />
                <input
                  type="email"
                  placeholder={t.cta.email}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <MessageSquare className="absolute top-5 left-4 text-[#D9C18E]" />
                <textarea
                  rows={4}
                  placeholder={t.cta.message}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#D9C18E]/30
                             focus:outline-none focus:ring-2 focus:ring-[#D9C18E]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d]
                           text-[#003B4A] font-bold text-xl
                           py-4 rounded-xl shadow-xl
                           hover:shadow-2xl hover:scale-105 transition"
              >
                {t.cta.send}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
