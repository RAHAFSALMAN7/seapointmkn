import { Phone } from "lucide-react";

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  const partners = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.jpg",
  ];

  return (
    <>
      {/* ===== PARTNERS SECTION ===== */}
      <section className="py-20 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#003B4A] mb-6">
            {t.partners.title}
          </h2>

          <div className="w-24 h-1 bg-[#D9C18E] mx-auto mb-12" />

          <div className="flex flex-wrap justify-center gap-10">
            {partners.map((img, index) => (
              <div
                key={index}
                className="
                  w-28 h-28 md:w-32 md:h-32
                  rounded-full bg-white
                  flex items-center justify-center
                  shadow-lg
                  overflow-hidden
                  transition-transform duration-300
                  hover:scale-110
                "
              >
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#f8f6f3] text-[#003B4A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* TOP GRID */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">

            {/* LOGO + DESCRIPTION */}
            <div className="md:col-span-2">
              <img
                src="/Untitled-2.png"
                alt="Sea Point Logo"
                className="h-20 w-auto mb-6"
              />

              <p className="text-[#003B4A]/70 leading-relaxed text-lg mb-6">
                {t.footer.description}
              </p>

              <div className="flex gap-4">
                {["X", "IN", "IG"].map((icon) => (
                  <div
                    key={icon}
                    className="w-12 h-12 bg-[#D9C18E] rounded-full flex items-center justify-center hover:bg-[#c4a76d] transition-colors cursor-pointer"
                  >
                    <span className="text-[#003B4A] font-bold">{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#003B4A]">
                {t.footer.quickLinks}
              </h3>

              <div className="space-y-3">
                {t.footer.links.map((link: string, index: number) => {
                  const isAbout =
                    link === "من نحن" || link === "About Us";

                  return (
                    <a
                      key={index}
                      href={isAbout ? "https://www.mkn-sa.net/" : "#"}
                      target={isAbout ? "_blank" : "_self"}
                      rel={isAbout ? "noopener noreferrer" : undefined}
                      className="block text-[#003B4A]/70 hover:text-[#D9C18E] transition-colors text-lg"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#003B4A]">
                {t.footer.contact}
              </h3>

              <div className="space-y-3 text-[#003B4A]/70 text-lg">
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
          <div className="border-t border-[#003B4A]/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              <p className="text-[#003B4A]/50 text-center">
                {t.footer.copyright}
              </p>

              <div className="flex gap-6 text-[#003B4A]/50 text-sm">
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
    </>
  );
}
