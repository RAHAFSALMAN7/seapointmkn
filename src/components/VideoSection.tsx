import { useRef, useState } from "react";

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
        };
        smartHomeSection: SmartHomeSection;
    };
}

export default function VideoSection({ t }: VideoSectionProps) {
    // Reference للفيديو الرئيسي
    const mainVideoRef = useRef<HTMLVideoElement>(null);

    // References لكل فيديو في الكروسيل
    const videoRefs: React.RefObject<HTMLVideoElement>[] =
        t.smartHomeSection?.videos?.map(() => useRef<HTMLVideoElement>(null)) || [];

    // حالة كتم الصوت
    const [mainMuted, setMainMuted] = useState<boolean>(true);
    const [carouselMuted, setCarouselMuted] = useState<boolean[]>(
        t.smartHomeSection?.videos?.map(() => true) || []
    );

    // Carousel state
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // الدوال لتغيير الفيديو الحالي
    const next = () =>
        setCurrentIndex((prev: number) => (prev + 1) % videoRefs.length);
    const prev = () =>
        setCurrentIndex((prev: number) => (prev - 1 + videoRefs.length) % videoRefs.length);

    // كتم/تشغيل الصوت للفيديو الرئيسي
    const toggleMainSound = () => {
        if (mainVideoRef.current) {
            mainVideoRef.current.muted = !mainVideoRef.current.muted;
            setMainMuted(mainVideoRef.current.muted);
        }
    };

    // كتم/تشغيل الصوت للفيديو الحالي في الكروسيل
    const toggleCarouselSound = (index: number) => {
        const vid = videoRefs[index].current;
        if (vid) {
            vid.muted = !vid.muted;
            setCarouselMuted((prev: boolean[]) =>
                prev.map((m: boolean, i: number) => (i === index ? vid.muted : m))
            );
        }
    };

    const carouselVideos = t.smartHomeSection?.videos || [];

    return (
        <>
            {/* ========================= */}
            {/* سكشن الفيديو الأساسي */}
            {/* ========================= */}
            <section className="py-32 bg-gradient-to-br from-[#f8f6f3] to-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        {/* 🎥 الفيديو الأساسي */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#D9C18E]/30 to-transparent rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500" />

                            <video
                                ref={mainVideoRef}
                                src={`/${t.videoSection.video}`}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-[520px] md:h-[600px] object-cover rounded-3xl shadow-2xl relative z-10"
                            />

                            {/* زر الصوت للفيديو الرئيسي */}
                            <button
                                onClick={toggleMainSound}
                                className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition"
                            >
                                {mainMuted ? "Unmute" : "Mute"}
                            </button>
                        </div>

                        {/* النص */}
                        <div className="space-y-6 animate-fade-in-right">
                            <h3 className="text-xl font-bold text-[#003B4A]">Sea Point</h3>
                            <p className="text-gray-600 text-2xl leading-relaxed">
                                {t.videoSection.text}
                            </p>
                            <button className="mt-6 px-10 py-4 bg-gradient-to-r from-[#D9C18E] to-[#c4a76d] text-white font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300">
                                {t.videoSection.button}
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================= */}
            {/* سكشن Smart Home System */}
            {/* ========================= */}
            <section className="py-28 bg-white">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold text-[#003B4A] mb-4">
                        {t.smartHomeSection.title}
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        {t.smartHomeSection.description}
                    </p>

                    {/* 🎥 كروسل الفيديو */}
                    <div className="relative w-full h-[500px] mx-auto overflow-hidden rounded-3xl shadow-xl">
                        {carouselVideos[currentIndex] && (
                            <>
                                <video
                                    ref={videoRefs[currentIndex]}
                                    src={carouselVideos[currentIndex].src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-all duration-700"
                                />

                                {/* زر الصوت للفيديو الحالي */}
                                <button
                                    onClick={() => toggleCarouselSound(currentIndex)}
                                    className="absolute bottom-6 left-6 bg-black/50 text-white px-4 py-2 rounded-xl hover:bg-black/70 transition"
                                >
                                    {carouselMuted[currentIndex] ? "Unmute" : "Mute"}
                                </button>
                            </>
                        )}

                        {/* سهم يسار */}
                        <button
                            onClick={prev}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                        >
                            ‹
                        </button>

                        {/* سهم يمين */}
                        <button
                            onClick={next}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
                        >
                            ›
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}
