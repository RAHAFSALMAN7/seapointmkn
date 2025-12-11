import { Phone, MapPin, DollarSign, MessageSquare } from "lucide-react";

interface CTAProps {
    t: any;
}

export default function CTA({ t }: CTAProps) {
    return (
        <section className="py-32 bg-gradient-to-br from-[#f8f6f3] via-[#ede7dd] to-[#f8f6f3] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#D9C18E] via-[#c4a76d] to-[#D9C18E]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D9C18E]/10 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
                <div className="animate-fade-in-up">
                    <h2 className="text-5xl md:text-7xl font-bold text-[#003B4A] mb-8 leading-tight">
                        {t.cta.title}
                    </h2>

                    <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed">
                        {t.cta.subtitle}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                        <a
                            href="https://wa.me/972595036932?text=Start"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#c4a76d] to-[#D9C18E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Phone className="relative z-10" size={28} />
                            <span className="relative z-10">{t.cta.whatsapp}</span>
                        </a>

                        <a
                            href="tel:+972595036932"
                            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#003B4A] text-white text-2xl font-bold rounded-2xl shadow-2xl hover:bg-[#004B5A] transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <Phone size={28} />
                            <span>{t.cta.call}</span>
                        </a>
                    </div>

                    {/* NOTE */}
                    <div className="space-y-4">
                        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#D9C18E] to-transparent mx-auto mb-6" />
                        <p className="text-xl text-gray-600">{t.cta.note}</p>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {t.cta.services.map((service: any, index: number) => {
                        const icons = [MapPin, DollarSign, MessageSquare];
                        const Icon = icons[index];

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-xl border border-[#D9C18E]/20 transform hover:-translate-y-2 transition duration-300"
                            >
                                <Icon className="text-[#D9C18E] mx-auto mb-4" size={40} />
                                <h3 className="text-xl font-bold text-[#003B4A] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
