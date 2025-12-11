import { ChevronDown, Languages } from "lucide-react";

interface HeroProps {
    t: any;
    language: "ar" | "en";
    setLanguage: (lang: "ar" | "en") => void;
}

export default function Hero({ t, language, setLanguage }: HeroProps) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="fixed top-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label="Toggle Language"
            >
                <Languages
                    className="text-[#003B4A] group-hover:rotate-12 transition-transform duration-300"
                    size={24}
                />
            </button>

            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Sea Point Community"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#003B4A]/90 via-[#003B4A]/70 to-[#003B4A]/90 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#D9C18E]/20 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 text-center px-4 w-full pointer-events-auto">
                <div className="flex justify-center mb-12 animate-fade-in-down">
                    <img
                        src="/untitled_design_(47).png"
                        alt="Sea Point Logo"
                        className="h-24 w-auto md:h-32 drop-shadow-2xl"
                    />
                </div>

                <div className="animate-fade-in-up-delay">
                    <div className="mb-8">
                        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D9C18E] to-transparent mx-auto mb-8" />
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
                        {t.hero.title.split('—')[0]}—<br />
                        {t.hero.title.split('—')[1] || t.hero.title.split('—')[0]}
                    </h1>

                    <p className="text-xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                        {t.hero.subtitle}
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D9C18E] to-transparent mx-auto" />
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow pointer-events-none">
                <ChevronDown className="text-[#D9C18E]" size={48} strokeWidth={1.5} />
            </div>
        </section>
    );
}
