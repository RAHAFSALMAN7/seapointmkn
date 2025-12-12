import { useState, useRef, useMemo } from "react";

interface Video {
  src: string;
  alt?: string;
}

interface SmartHomeSection {
  title: string;
  description: string;
  videos: Video[];
}

interface VideoSectionProps {
  t: {
    videoSection: {
      video: string;
      text: string;
      button: string;
      title: string;
    };
    smartHomeSection: SmartHomeSection;
  };
}

export default function VideoSection({ t }: VideoSectionProps) {
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const [isMutedSeaPoint, setIsMutedSeaPoint] = useState(true);

  const smartHomeVideos = t.smartHomeSection.videos;
  const totalVideos = smartHomeVideos.length;

  // إنشاء المراجع لكل فيديو في الكروسيل مرة واحدة
  const videoRefs = useMemo(
    () => smartHomeVideos.map(() => useRef<HTMLVideoElement>(null)),
    [totalVideos]
  );

  const [currentVideo, setCurrentVideo] = useState(0);
  const [carouselMuted, setCarouselMuted] = useState<boolean[]>(
    smartHomeVideos.map(() => true)
  );

  const prevVideo = () => {
    stopVideo(currentVideo);
    const newIndex = currentVideo === 0 ? totalVideos - 1 : currentVideo - 1;
    setCurrentVideo(newIndex);
  };

  const nextVideo = () => {
    stopVideo(currentVideo);
    const newIndex = currentVideo === totalVideos - 1 ? 0 : currentVideo + 1;
    setCurrentVideo(newIndex);
  };

  const toggleMainSound = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !mainVideoRef.current.muted;
      setIsMutedSeaPoint(mainVideoRef.current.muted);
    }
  };

  const toggleCarouselSound = (index: number) => {
    const vid = videoRefs[index].current;
    if (vid) {
      vid.muted = !vid.muted;
      setCarouselMuted((prev) => prev.map((m, i) => (i === index ? vid.muted : m)));
    }
  };

  const stopVideo = (index: number) => {
    const vid = videoRefs[index]?.current;
    if (vid) {
      vid.pause();
      vid.currentTime = 0;
    }
  };

  return (
    <>
      {/* Sea Point */}
      <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />
              <video
                ref={mainVideoRef}
                src={`/${t.videoSection.video}`}
                autoPlay
                loop
                muted={isMutedSeaPoint}
                playsInline
                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
              />
              <button
                onClick={toggleMainSound}
                className="absolute bottom-4 right-4 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
              >
                {isMutedSeaPoint ? "🔇" : "🔊"}
              </button>
            </div>

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

      {/* Smart Home Carousel */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[#003B4A] mb-12">{t.smartHomeSection.title}</h3>
          <p className="text-gray-700 text-lg mb-8">{t.smartHomeSection.description}</p>

          <div className="relative">
            {smartHomeVideos.map((video, index) => (
              <video
                key={index}
                ref={videoRefs[index]}
                src={`/${video.src}`}
                autoPlay={index === currentVideo}
                loop
                muted={carouselMuted[index]}
                playsInline
                className={`w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10 transition-opacity duration-500 ${
                  index === currentVideo ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                }`}
              />
            ))}

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

            <button
              onClick={() => toggleCarouselSound(currentVideo)}
              className="absolute bottom-4 right-4 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg"
            >
              {carouselMuted[currentVideo] ? "🔇" : "🔊"}
            </button>
          </div>

          <p className="text-center mt-4 text-gray-600">{smartHomeVideos[currentVideo]?.alt}</p>
        </div>
      </section>
    </>
  );
}
