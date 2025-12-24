import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  ChevronLeft,
  ChevronRight,
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

  useEffect(() => {
    if (!videoRef.current) return;
    playing ? videoRef.current.play() : videoRef.current.pause();
  }, [playing, currentIndex]);

  const togglePlay = () => setPlaying((p) => !p);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current as any;
    if (!video) return;

    if (video.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
      return;
    }

    if (!document.fullscreenElement) {
      video.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
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
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        key={currentIndex}
        ref={videoRef}
        src={`/${t.smartHomeSection.videos[currentIndex].src}`}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-105
          transition-all duration-700
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 w-full items-center">

          {/* TEXT GLASS CARD */}
          <div className="
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            rounded-3xl
            p-8 md:p-10
            text-white
            shadow-2xl
            max-w-md
          ">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {t.smartHomeSection.title}
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed">
              {t.smartHomeSection.description}
            </p>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevVideo}
        className="
          absolute left-4 md:left-8
          top-[65%] md:top-1/2 -translate-y-1/2
          z-20
          w-14 h-14
          rounded-full
          bg-white/20 backdrop-blur
          flex items-center justify-center
          text-white
          hover:scale-110 transition
        "
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextVideo}
        className="
          absolute right-4 md:right-8
          top-[65%] md:top-1/2 -translate-y-1/2
          z-20
          w-14 h-14
          rounded-full
          bg-white/20 backdrop-blur
          flex items-center justify-center
          text-white
          hover:scale-110 transition
        "
      >
        <ChevronRight size={28} />
      </button>

      {/* CONTROLS */}
      <div
        className="
          absolute
          bottom-6 md:bottom-auto
          left-1/2 md:left-auto
          -translate-x-1/2 md:translate-x-0
          md:right-20
          md:top-1/2 md:-translate-y-1/2
          z-20
          flex flex-row md:flex-col
          gap-4 md:gap-5
        "
      >
        <button
          onClick={togglePlay}
          className="
            w-11 h-11 md:w-14 md:h-14
            rounded-full
            bg-white/20 backdrop-blur
            flex items-center justify-center
            text-white
            hover:scale-110 transition
          "
        >
          {playing ? <Pause size={22} /> : <Play size={22} />}
        </button>

        <button
          onClick={toggleMute}
          className="
            w-11 h-11 md:w-12 md:h-12
            rounded-full
            bg-white/20 backdrop-blur
            flex items-center justify-center
            text-white
            hover:scale-110 transition
          "
        >
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <button
          onClick={toggleFullscreen}
          className="
            w-11 h-11 md:w-12 md:h-12
            rounded-full
            bg-white/20 backdrop-blur
            flex items-center justify-center
            text-white
            hover:scale-110 transition
          "
        >
          <Maximize size={20} />
        </button>
      </div>

      {/* DOTS */}
      <div className="
        absolute bottom-20 md:bottom-10
        left-1/2 -translate-x-1/2
        z-20
        flex gap-4
      ">
        {t.smartHomeSection.videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setPlaying(true);
            }}
            className={`
              w-3 h-3 rounded-full transition
              ${currentIndex === index
                ? "bg-white scale-125 shadow-[0_0_15px_white]"
                : "bg-white/40 hover:bg-white/70"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
