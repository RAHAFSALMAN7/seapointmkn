interface InteriorSectionProps {
  t: any;
}

export default function InteriorSection({ t }: InteriorSectionProps) {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group animate-float">
          <div className="absolute -inset-6 bg-gradient-to-br from-[#003B4A] via-[#004B5A] to-[#003B4A] rounded-[3rem] transform rotate-1 group-hover:rotate-0 transition duration-700 shadow-2xl" />
          <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl">
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Luxury Interior"
                className="w-full h-[700px] object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white px-8 py-4 rounded-full shadow-2xl">
            <p className="text-lg font-semibold">{t.interior.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
