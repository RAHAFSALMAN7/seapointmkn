import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f5f1ea]">

      {/* BEIGE OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* VIDEO COLUMN */}
          <div className="relative flex justify-center">

            <div
              className="
                relative
                w-[280px] md:w-[340px]
                aspect-[9/16]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border border-black/10
                bg-black
              "
            >
              <video
                key={currentIndex}
                ref={videoRef}
                src={`/${t.smartHomeSection.videos[currentIndex].src}`}
                autoPlay
                loop
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* VIDEO OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* CONTROLS */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:scale-110 transition"
                >
                  {playing ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:scale-110 transition"
                >
                  {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>

            {/* ARROWS */}
            <button
              onClick={prevVideo}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 backdrop-blur flex items-center justify-center text-black hover:scale-110 transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextVideo}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/10 backdrop-blur flex items-center justify-center text-black hover:scale-110 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* TEXT COLUMN */}
          <div
            className="
              bg-black/70 backdrop-blur-2xl
              border border-white/20
              rounded-3xl
              p-8 md:p-10
              text-white
              shadow-2xl
              max-w-md
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {t.smartHomeSection.title}
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed">
              {t.smartHomeSection.description}
            </p>

            {/* DOTS */}
            <div className="mt-10 flex gap-4">
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
          </div>

        </div>
      </div>
    </section>
  );
}
