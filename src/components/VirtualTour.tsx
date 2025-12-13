import { useState, useRef } from "react";
import { Maximize2, X, Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VirtualTourProps {
    t: any;
}

export default function VirtualTour({ t }: VirtualTourProps) {
    const [open, setOpen] = useState(false);

    /* ===== Video Controls ===== */
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

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

    return (
        <section className="py-32 bg-gradient-to-br from-[#003B4A] to-[#004B5A] relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, #D9C18E 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* ================= فيديو المشروع الكبير ================= */}
            <div className="relative w-full max-w-7xl mx-auto mb-32 px-4">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">

                    <video
                        ref={videoRef}
                        src="/SEAPOINTPROJECT.mp4"
                        autoPlay
                        loop
                        muted={muted}
                        playsInline
                        preload="metadata"
                        onTimeUpdate={() =>
                            videoRef.current &&
                            setProgress(videoRef.current.currentTime)
                        }
                        onLoadedMetadata={() =>
                            videoRef.current &&
                            setDuration(videoRef.current.duration)
                        }
                        className="w-full h-[60vh] md:h-[75vh] object-cover"
                    />

                    {/* Overlay خفيف */}
                    <div className="absolute inset-0 bg-black/25 pointer-events-none" />

                    {/* ===== Controls ===== */}
                    <div className="absolute bottom-6 left-6 flex gap-3 z-20">
                        <button
                            onClick={togglePlay}
                            className="w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                        >
                            {playing ? (
                                <Pause size={18} className="text-[#003B4A]" />
                            ) : (
                                <Play size={18} className="text-[#003B4A]" />
                            )}
                        </button>

                        <button
                            onClick={toggleMute}
                            className="w-11 h-11 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow"
                        >
                            {muted ? (
                                <VolumeX size={18} className="text-[#003B4A]" />
                            ) : (
                                <Volume2 size={18} className="text-[#003B4A]" />
                            )}
                        </button>
                    </div>

                    {/* ===== Seek Bar ===== */}
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={progress}
                        onChange={(e) =>
                            videoRef.current &&
                            (videoRef.current.currentTime = Number(e.target.value))
                        }
                        className="absolute bottom-3 left-6 right-6 h-[3px] accent-[#D9C18E] cursor-pointer z-20"
                    />
                </div>
            </div>

            {/* ================= محتوى الجولة الافتراضية ================= */}
            <div className="max-w-6xl mx-auto px-4 relative">

                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {t.tour.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                        {t.tour.subtitle}
                    </p>
                </div>

                {/* Preview Box */}
                <div
                    className="relative group cursor-pointer"
                    onClick={() => setOpen(true)}
                >
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-3xl blur opacity-50 group-hover:opacity-70 transition" />

                    <div className="relative bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] p-1.5 rounded-3xl">
                        <div className="bg-[#003B4A] rounded-[1.4rem] p-8 md:p-16">

                            <div className="aspect-video rounded-2xl overflow-hidden relative">
                                <img
                                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920"
                                    className="w-full h-full object-cover opacity-40"
                                />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-[#D9C18E] rounded-full flex items-center justify-center mb-6 mx-auto shadow-2xl">
                                            <Maximize2
                                                className="text-[#003B4A]"
                                                size={40}
                                            />
                                        </div>
                                        <p className="text-white text-2xl font-semibold">
                                            {t.tour.cta}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/70 text-center mt-8 text-lg">
                                {t.tour.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MODAL ================= */}
            {open && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-6 right-6 text-white hover:text-[#D9C18E]"
                    >
                        <X size={40} />
                    </button>

                    <div className="w-full max-w-5xl h-[80vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src="//storage.net-fs.com/hosting/8446401/4/"
                            width="100%"
                            height="100%"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
