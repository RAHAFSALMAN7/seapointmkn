import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Video {
  src: string;
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
  const carouselVideoRef = useRef<HTMLVideoElement>(null);

  /* ===== Main Video ===== */
  const [mainPlaying, setMainPlaying] = useState(true);
  const [mainMuted, setMainMuted] = useState(true);
  const [mainProgress, setMainProgress] = useState(0);
  const [mainDuration, setMainDuration] = useState(0);

  /* ===== Carousel Video ===== */
  const [carouselPlaying, setCarouselPlaying] = useState(true);
  const [carouselMuted, setCarouselMuted] = useState(true);
  const [carouselProgress, setCarouselProgress] = useState(0);
  const [carouselDuration, setCarouselDuration] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  /* ===== Helpers ===== */
  const togglePlay = (
    ref: React.RefObject<HTMLVideoElement>,
    playing: boolean,
    setPlaying: (v: boolean) => void
  ) => {
    if (!ref.current) return;
    playing ? ref.current.pause() : ref.current.play();
    setPlaying(!playing);
  };

  const toggleMute = (
    ref: React.RefObject<HTMLVideoElement>,
    muted: boolean,
    setMuted: (v: boolean) => void
  ) => {
    if (!ref.current) return;
    ref.current.muted = !muted;
    setMuted(!muted);
  };

  const changeVideo = (index: number) => {
    setCurrentIndex(index);
    setCarouselPlaying(true);
    setCarouselProgress(0);
  };

  const prevVideo = () => {
    changeVideo(
      currentIndex === 0
        ? t.smartHomeSection.videos.length - 1
        : currentIndex - 1
    );
  };

  const nextVideo = () => {
    changeVideo(
      currentIndex === t.smartHomeSection.videos.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  return (
    <>
      {/* ================= Main Video ================= */}
      <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* VIDEO */}
            <div className="relative">
              <video
                ref={mainVideoRef}
                src={`/${t.videoSection.video}`}
                autoPlay
                loop
                muted={mainMuted}
                playsInline
                onTimeUpdate={() =>
                  mainVideoRef.current &&
                  setMainProgress(mainVideoRef.current.currentTime)
                }
                onLoadedMetadata={() =>
                  mainVideoRef.current &&
                  setMainDuration(mainVideoRef.current.duration)
                }
                className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
              />

              {/* CONTROLS */}
              <div className="absolute bottom-6 left-6 flex gap-3 z-20">
                <button
                  onClick={() =>
                    togglePlay(mainVideoRef, mainPlaying, setMainPlaying)
                  }
                  className="w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                >
                  {mainPlaying ? (
                    <Pause size={18} className="text-[#003B4A]" />
                  ) : (
                    <Play size={18} className="text-[#003B4A]" />
                  )}
                </button>

                <button
                  onClick={() =>
                    toggleMute(mainVideoRef, mainMuted, setMainMuted)
                  }
                  className="w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                >
                  {mainMuted ? (
                    <VolumeX size={18} className="text-[#003B4A]" />
                  ) : (
                    <Volume2 size={18} className="text-[#003B4A]" />
                  )}
                </button>
              </div>

              {/* SEEK BAR */}
              <input
                type="range"
                min={0}
                max={mainDuration}
                value={mainProgress}
                onChange={(e) =>
                  mainVideoRef.current &&
                  (mainVideoRef.current.currentTime = Number(e.target.value))
                }
                className="absolute bottom-2 left-6 right-6 h-[3px] accent-[#D9C18E] cursor-pointer"
              />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-xl font-bold text-[#003B4A]">
                {t.videoSection.title}
              </h3>
              <p className="text-gray-600 text-2xl mt-4 leading-relaxed">
                {t.videoSection.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Smart Home (9:16) ================= */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold text-[#003B4A]">
                {t.smartHomeSection.title}
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {t.smartHomeSection.description}
              </p>
            </div>

            {/* VIDEO + DOTS */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl shadow-xl overflow-hidden">

                <video
                  key={currentIndex}
                  ref={carouselVideoRef}
                  src={`/${t.smartHomeSection.videos[currentIndex].src}`}
                  autoPlay
                  loop
                  muted={carouselMuted}
                  playsInline
                  onTimeUpdate={() =>
                    carouselVideoRef.current &&
                    setCarouselProgress(
                      carouselVideoRef.current.currentTime
                    )
                  }
                  onLoadedMetadata={() =>
                    carouselVideoRef.current &&
                    setCarouselDuration(
                      carouselVideoRef.current.duration
                    )
                  }
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* CONTROLS */}
                <div className="absolute bottom-6 left-4 flex gap-3 z-20">
                  <button
                    onClick={() =>
                      togglePlay(
                        carouselVideoRef,
                        carouselPlaying,
                        setCarouselPlaying
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                  >
                    {carouselPlaying ? (
                      <Pause size={16} className="text-[#003B4A]" />
                    ) : (
                      <Play size={16} className="text-[#003B4A]" />
                    )}
                  </button>

                  <button
                    onClick={() =>
                      toggleMute(
                        carouselVideoRef,
                        carouselMuted,
                        setCarouselMuted
                      )
                    }
                    className="w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                  >
                    {carouselMuted ? (
                      <VolumeX size={16} className="text-[#003B4A]" />
                    ) : (
                      <Volume2 size={16} className="text-[#003B4A]" />
                    )}
                  </button>
                </div>

                {/* SEEK BAR */}
                <input
                  type="range"
                  min={0}
                  max={carouselDuration}
                  value={carouselProgress}
                  onChange={(e) =>
                    carouselVideoRef.current &&
                    (carouselVideoRef.current.currentTime = Number(e.target.value))
                  }
                  className="absolute bottom-2 left-4 right-4 h-[3px] accent-[#D9C18E] cursor-pointer"
                />

                {/* ARROWS */}
                <button
                  onClick={prevVideo}
                  className="absolute left-3 top-1/2 -translate-y-1/2
                             w-10 h-10 rounded-full bg-white/70 backdrop-blur
                             flex items-center justify-center shadow-md hover:bg-white transition z-20"
                >
                  <span className="text-[#003B4A] text-2xl">‹</span>
                </button>

                <button
                  onClick={nextVideo}
                  className="absolute right-3 top-1/2 -translate-y-1/2
                             w-10 h-10 rounded-full bg-white/70 backdrop-blur
                             flex items-center justify-center shadow-md hover:bg-white transition z-20"
                >
                  <span className="text-[#003B4A] text-2xl">›</span>
                </button>
              </div>

              {/* DOTS */}
              <div className="flex gap-3 mt-6">
                {t.smartHomeSection.videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeVideo(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentIndex === index
                        ? "bg-[#D9C18E]"
                        : "bg-[#003B4A]/30 hover:bg-[#003B4A]/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
