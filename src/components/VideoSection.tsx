import { useState } from "react";
import { content } from "../data/content"; // عدّل المسار حسب مشروعك

interface VideoSectionProps {
  t: any;
}

export default function VideoSection({ t }: VideoSectionProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMutedSeaPoint, setIsMutedSeaPoint] = useState(true);
  const [isMutedSmartHome, setIsMutedSmartHome] = useState(true);

  // فيديوهات سكشن Smart Home
  const smartHomeVideos = t.smartHomeSection.videos;
  const totalVideos = smartHomeVideos.length;

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? totalVideos - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === totalVideos - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* سكشن Sea Point */}
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
                muted={isMutedSeaPoint}
                playsInline
                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
              />

              {/* زر التحكم بالصوت */}
              <button
                onClick={() => setIsMutedSeaPoint(!isMutedSeaPoint)}
                className="absolute bottom-4 right-4 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
              >
                {isMutedSeaPoint ? "🔇" : "🔊"}
              </button>
            </div>

            {/* 📝 النص */}
            <div className="space-y-6 animate-fade-in-right">
              <h3 className="text-xl font-bold text-[#003B4A]">{t.videoSection.title}</h3>
              <p className="text-gray-600 text-2xl leading-relaxed">{t.videoSection.text}</p>
              <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                {t.videoSection.button}
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* سكشن Smart Home */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#003B4A] mb-12">{t.smartHomeSection.title}</h3>
          <p className="text-gray-700 text-lg mb-8">{t.smartHomeSection.description}</p>

          <div className="relative">
            <video
              src={`/${smartHomeVideos[currentVideo].src}`}
              autoPlay
              loop
              muted={isMutedSmartHome}
              playsInline
              className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
            />

            {/* أزرار الأسهم */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg"
            >
              &#8592;
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-3 rounded-full shadow-lg"
            >
              &#8594;
            </button>

            {/* زر التحكم بالصوت */}
            <button
              onClick={() => setIsMutedSmartHome(!isMutedSmartHome)}
              className="absolute bottom-4 right-4 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
            >
              {isMutedSmartHome ? "🔇" : "🔊"}
            </button>
          </div>

          {/* اسم الفيديو الحالي */}
          <p className="text-center mt-4 text-gray-600">{smartHomeVideos[currentVideo].alt}</p>
        </div>
      </section>
    </>
  );
}
