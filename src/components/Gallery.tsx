import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface GalleryProps {
    t: any;
    galleryImages: string[];
}

export default function Gallery({ t, galleryImages }: GalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState("");

    const openLightbox = (img: string) => {
        setLightboxImage(img);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    return (
        <section className="py-32 bg-gradient-to-br from-[#003B4A] to-[#004B5A] relative overflow-hidden">

            {/* خلفية زخرفية */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, #D9C18E 0, #D9C18E 1px, transparent 0, transparent 100px)`
                    }}
                />
            </div>

            {/* العنوان */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        {t.gallery.title}
                    </h2>

                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        {t.gallery.subtitle}
                    </p>

                    <div className="w-32 h-1 bg-[#D9C18E] mx-auto mt-8" />
                </div>

                {/* سلايدر Swiper الاحترافي */}
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2800 }}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!pb-16"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="group relative cursor-pointer"
                                onClick={() => openLightbox(image)}
                            >
                                {/* تأثير ذهبي */}
                                <div className="absolute -inset-2 bg-gradient-to-br from-[#D9C18E] to-[#c4a76d] rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                                {/* الصورة */}
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    <img
                                        src={image}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#003B4A]/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Lightbox — عرض الصورة بحجم كامل */}
                {lightboxOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999999] flex items-center justify-center p-6"
                        onClick={closeLightbox}
                    >
                        <img
                            src={lightboxImage}
                            className="max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white object-contain animate-[fadeIn_0.3s_ease]"
                        />
                    </div>
                )}
            </div>

            {/* أنيميشن Lightbox */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
}
