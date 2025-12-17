import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface GalleryProps {
  t: any;
}

export default function Gallery({ t }: GalleryProps) {
  // 🛑 Guard مهم
  if (!t?.gallery?.sections) return null;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  /* 🏡 صور شقة العرض */
  const showApartmentImages = [
    "/1seapoint.jpg",
    "/2seapoint.jpg",
    "/3seapoint.jpg",
    "/4seapoint.jpg",
    "/6seapoint.jpg",
    "/7seapoint.jpg",
    "/8seapoint.jpg",
    "/9seapoint.jpg",
    "/10seapoint.jpg",
    "/11seapoint.jpg",
    "/12seapoint.jpg",
    "/13seapoint.jpg",
    "/14seapoint.jpg",
  ];

  /* 🛎️ صور الخدمات */
  const servicesImages = [
    "/services1.jpg",
    "/services2.jpg",
    "/services3.jpg",
    "/services4.jpg",
    "/services5.jpg",
    "/services6.jpg",
  ];

  const GallerySection = ({
    title,
    subtitle,
    images,
  }: {
    title: string;
    subtitle: string;
    images: string[];
  }) => (
    <div className="mb-32">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h3>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Navigation]}
        centeredSlides
        loop={false}
        speed={900}
        grabCursor
        navigation
        pagination={{ clickable: true }}
        spaceBetween={40}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 60 },
        }}
        className="gallery-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-slide">
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="gallery-img"
                onClick={() => {
                  setLightboxImage(image);
                  setLightboxOpen(true);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-gradient-to-br from-[#003B4A] to-[#004B5A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* MAIN TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* 🏡 SHOW APARTMENT */}
        <GallerySection
          title={t.gallery.sections.showApartment.title}
          subtitle={t.gallery.sections.showApartment.subtitle}
          images={showApartmentImages}
        />

        {/* 🛎️ SERVICES */}
        <GallerySection
          title={t.gallery.sections.services.title}
          subtitle={t.gallery.sections.services.subtitle}
          images={servicesImages}
        />
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <img
            src={lightboxImage}
            alt="Gallery Preview"
            decoding="async"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* ===== STYLES ===== */}
      <style>{`
        .gallery-swiper {
          padding-top: 30px;
          padding-bottom: 60px;
          --swiper-navigation-color: #CBB279;
          --swiper-pagination-color: #CBB279;
        }

        .gallery-slide {
          transform: scale(0.85);
          opacity: 0.5;
          display: flex;
          justify-content: center;
          transition: transform 0.8s ease, opacity 0.6s ease;
        }

        .gallery-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 22px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
          cursor: pointer;
        }

        .swiper-slide-active .gallery-slide {
          transform: scale(1.1) translateY(-18px);
          opacity: 1;
          z-index: 10;
        }

        .swiper-pagination-bullet {
          background: #ffffff80;
        }

        .swiper-pagination-bullet-active {
          background: #CBB279;
        }

        @media (max-width: 767px) {
          .gallery-slide {
            transform: scale(1);
            opacity: 1;
          }

          .gallery-img {
            height: auto;
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
}
