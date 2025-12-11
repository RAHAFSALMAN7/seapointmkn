import { Phone } from "lucide-react";

interface FooterProps {
    t: any;
}

export default function Footer({ t }: FooterProps) {
    return (
        <footer className="bg-[#003B4A] text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-4 gap-12 mb-12">

                    {/* LOGO + DESCRIPTION */}
                    <div className="md:col-span-2">
                        <img
                            src="/untitled_design_(47).png"
                            alt="Sea Point Logo"
                            className="h-20 w-auto mb-6"
                        />

                        <p className="text-white/70 leading-relaxed text-lg mb-6">
                            {t.footer.description}
                        </p>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#D9C18E] rounded-full flex items-center justify-center hover:bg-[#c4a76d] transition-colors cursor-pointer">
                                <span className="text-[#003B4A] font-bold">X</span>
                            </div>

                            <div className="w-12 h-12 bg-[#D9C18E] rounded-full flex items-center justify-center hover:bg-[#c4a76d] transition-colors cursor-pointer">
                                <span className="text-[#003B4A] font-bold">IN</span>
                            </div>

                            <div className="w-12 h-12 bg-[#D9C18E] rounded-full flex items-center justify-center hover:bg-[#c4a76d] transition-colors cursor-pointer">
                                <span className="text-[#003B4A] font-bold">IG</span>
                            </div>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#D9C18E]">
                            {t.footer.quickLinks}
                        </h3>

                        <div className="space-y-3">
                            {t.footer.links.map((link: string, index: number) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block text-white/70 hover:text-[#D9C18E] transition-colors text-lg"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#D9C18E]">
                            {t.footer.contact}
                        </h3>

                        <div className="space-y-3 text-white/70 text-lg">
                            <p>{t.footer.location}</p>

                            <p className="flex items-center gap-2">
                                <Phone size={18} />
                                +966 50 000 0000
                            </p>

                            <p>info@mkn-sa.net</p>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        <p className="text-white/50 text-center">
                            {t.footer.copyright}
                        </p>

                        <div className="flex gap-6 text-white/50 text-sm">
                            <a href="#" className="hover:text-[#D9C18E] transition-colors">
                                {t.footer.privacy}
                            </a>
                            <a href="#" className="hover:text-[#D9C18E] transition-colors">
                                {t.footer.terms}
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}
