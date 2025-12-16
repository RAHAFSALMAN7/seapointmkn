import { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";

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
    smartHomeSection: SmartHomeSection;
  };
}

export default function VideoSection({ t }: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const prevVideo = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? t.smartHomeSection.videos.length - 1 : prev - 1
    );
    setPlaying(true);
  };

  const nextVideo = () => {
    setCurrentIndex((prev) =>
      prev === t.smartHomeSection.videos.length - 1 ? 0 : prev + 1
    );
    setPlaying(true);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003B4A] leading-tight">
              {t.smartHomeSection.title}
            </h2>

            <p className="text-lg text-[#003B4A]/70 mt-6 leading-relaxed max-w-md">
              {t.smartHomeSection.description}
            </p>
          </div>

          {/* VIDEO */}
          <div className="flex justify-center">
            <div className="relative group w-full max-w-[380px]">

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#D9C18E]/40 to-transparent rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition" />

              <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl">

                <video
                  key={currentIndex}
                  ref={videoRef}
                  src={`/${t.smartHomeSection.videos[currentIndex].src}`}
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* CONTROLS */}
                <div
                  className="
                    absolute bottom-4 left-1/2 -translate-x-1/2
                    bg-black/40 backdrop-blur-lg
                    rounded-full px-4 py-2
                    flex items-center gap-4
                  "
                >
                  <button onClick={togglePlay}>
                    {playing ? (
                      <Pause size={16} className="text-white" />
                    ) : (
                      <Play size={16} className="text-white" />
                    )}
                  </button>

                  <button onClick={toggleMute}>
                    {muted ? (
                      <VolumeX size={16} className="text-white" />
                    ) : (
                      <Volume2 size={16} className="text-white" />
                    )}
                  </button>

                  {/* FULLSCREEN */}
                  <button onClick={toggleFullscreen}>
                    <Maximize size={16} className="text-white" />
                  </button>
                </div>

                {/* ARROWS */}
                <button
                  onClick={prevVideo}
                  className="
                    absolute left-3 top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-full bg-white/80 backdrop-blur
                    flex items-center justify-center
                    shadow hover:bg-white transition
                  "
                >
                  <span className="text-[#003B4A] text-xl">‹</span>
                </button>

                <button
                  onClick={nextVideo}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-full bg-white/80 backdrop-blur
                    flex items-center justify-center
                    shadow hover:bg-white transition
                  "
                >
                  <span className="text-[#003B4A] text-xl">›</span>
                </button>
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-3 mt-6">
                {t.smartHomeSection.videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setPlaying(true);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      currentIndex === index
                        ? "bg-[#D9C18E] shadow-[0_0_10px_#D9C18E]"
                        : "bg-[#003B4A]/30 hover:bg-[#003B4A]/50"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
