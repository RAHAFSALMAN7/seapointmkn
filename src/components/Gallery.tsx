import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

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

    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-[#003B4A] to-[#004B5A] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-14 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">
                        {t.gallery.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                        {t.gallery.subtitle}
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Navigation]}
                    centeredSlides
                    loop
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={40}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                    }}
                    className="gallery-swiper"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-slide">
                                <img
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    onClick={() => {
                                        setLightboxImage(image);
                                        setLightboxOpen(true);
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Lightbox */}
                {lightboxOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <img
                            src={lightboxImage}
                            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
                        />
                    </div>
                )}
            </div>

            {/* ===== CSS ===== */}
            <style>{`
        .gallery-swiper {
          padding-top: 30px;
          padding-bottom: 60px;
          --swiper-navigation-color: #CBB279;
          --swiper-pagination-color: #CBB279;
        }

        .gallery-slide {
          transition: all 0.5s ease;
          transform: scale(0.85);
          opacity: 0.5;
          display: flex;
          justify-content: center;
        }

        .gallery-slide img {
          width: 100%;
          max-width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 22px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          transition: all 0.5s ease;
          cursor: pointer;
        }

        /* ⭐ الصورة النشطة */
        .swiper-slide-active .gallery-slide {
          transform: scale(1.1) translateY(-18px);
          opacity: 1;
          z-index: 10;
        }

        .swiper-slide-active img {
          box-shadow: 0 30px 80px rgba(203,178,121,0.55);
        }

        /* الأسهم */
        .swiper-button-next,
        .swiper-button-prev {
          width: 28px;
          height: 28px;
          opacity: 0.8;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.15);
          opacity: 1;
        }

        /* pagination dots */
        .swiper-pagination-bullet {
          background: #ffffff80;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #CBB279;
        }

        /* 📱 موبايل */
        @media (max-width: 767px) {
          .gallery-slide {
            transform: scale(1);
            opacity: 1;
          }

          .gallery-slide img {
            height: auto;
            aspect-ratio: 4 / 3;
          }

          .swiper-slide-active .gallery-slide {
            transform: scale(1);
          }
        }
      `}</style>
        </section>
    );
}
