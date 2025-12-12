interface VideoSectionProps {
    t: any;
}

export default function VideoSection({ t }: VideoSectionProps) {
    return (
        <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* 🎥 الفيديو */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />

                        <video
                            src={`/${t.videoSection.video}`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
                        />
                    </div>

                    {/* 📝 النص */}
                    <div className="space-y-6 animate-fade-in-right">

                        {/* تغيير الاسم إلى Sea Point */}
                        <h3 className="text-xl font-bold text-[#003B4A]">
                            Sea Point
                        </h3>

                        <p className="text-gray-600 text-2xl leading-relaxed">
                            {t.videoSection.text}
                        </p>

                        <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            {t.videoSection.button}
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
