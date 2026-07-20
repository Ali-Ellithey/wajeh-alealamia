import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// --- استيراد الصور مباشرة باستخدام الـ Alias ---
import imgSlider1 from "@/assets/cover.webp";
import imgSlider2 from "@/assets/Lux.webp";
import imgSlider3 from "@/assets/sport1.webp";

// --- دالة تحويل اسم البراند لـ slug صالح للرابط ---
import { toSlug } from "@/utils/brandUtils";

export const HomeSidler = () => {
  const { t } = useTranslation();

  // حالة لمعرفة ما إذا كان المستخدم يقوم بسحب الشريط حالياً لمنع أي تداخل
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 👈 اختر اتجاه حركة شريط اللوجوهات التلقائي هنا:
  // "left" للحركة جهة اليسار ◀️
  // "right" للحركة جهة اليمين ▶️
  const marqueeDirection = "left";

  const slides = [
    { img: imgSlider1, key: "slide1" },
    { img: imgSlider2, key: "slide2" },
    { img: imgSlider3, key: "slide3" },
  ];

  const brands = [
    {
      name: "Bentley",
      logo: "https://www.carlogos.org/car-logos/bentley-logo-2002-download.png",
    },
    {
      name: "Rolls Royce",
      logo: "https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png",
    },
    {
      name: "Mercedes",
      logo: "https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png",
    },
    {
      name: "BMW",
      logo: "https://www.carlogos.org/car-logos/bmw-logo-1997-download.png",
    },
    {
      name: "cadillac",
      logo: "https://www.carlogos.org/car-logos/cadillac-logo-2021-full-download.png",
    },
    {
      name: "ferrari",
      logo: "https://www.carlogos.org/car-logos/ferrari-logo-2002-download.png",
    },
    {
      name: "Land Rover",
      logo: "https://www.carlogos.org/logo/Land-Rover-logo-2011-1920x1080.png",
    },
    {
      name: "porsche",
      logo: "https://www.carlogos.org/car-logos/porsche-logo-2014-full-download.png",
    },
    {
      name: "Lexus",
      logo: "https://www.carlogos.org/logo/Lexus-logo-1988-1920x1080.png",
    },
    {
      name: "nissan",
      logo: "https://www.carlogos.org/car-logos/nissan-logo-2020-black.png",
    },
    {
      name: "Toyota",
      logo: "https://www.carlogos.org/car-logos/toyota-logo-2020-europe-download.png",
    },
    {
      name: "jeep",
      logo: "https://www.carlogos.org/car-logos/jeep-logo-1993-download.png",
    },
    {
      name: "Lamborghini",
      logo: "https://upload.wikimedia.org/wikipedia/nah/5/5c/Lamborghini_logo.png",
    },
    {
      name: "Hyundai",
      logo: "https://www.carlogos.org/car-logos/hyundai-logo-2011.png",
    },
    {
      name: "Jetour",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jetour_Logo.png",
    },
    {
      name: "Honda",
      logo: "https://www.carlogos.org/car-logos/honda-logo-2000.png",
    },
    {
      name: "Chrysler",
      logo: "https://www.carlogos.org/car-logos/chrysler-logo-2009.png",
    },
    {
      name: "Chery",
      logo: "https://www.carlogos.org/logo/Chery-logo-2013-3840x2160.png",
    },
    {
      name: "Changan",
      logo: "https://www.carlogos.org/logo/Changan-logo-2010-2560x1440.png",
    },
    {
      name: "Mini Cooper",
      logo: "https://www.carlogos.org/logo/Mini-logo-2001-1920x1080.png",
    },
    {
      name: "Chevrolet",
      logo: "https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png",
    },
    {
      name: "ROX",
      logo: "https://www.rox.qa/wp-content/uploads/2024/12/ROX-OG-Images.png",
    },
    {
      name: "KIA",
      logo: "https://www.carlogos.org/logo/Kia-logo-2560x1440.png",
    },
    {
      name: "Ford",
      logo: "https://www.carlogos.org/car-logos/ford-logo-2017.png",
    },
    {
      name: "GMC",
      logo: "https://www.carlogos.org/logo/GMC-logo-2200x600.png",
    },
    {
      name: "Fiat",
      logo: "https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png",
    },
    {
      name: "Mitsubishi",
      logo: "https://www.carlogos.org/logo/Mitsubishi-logo-2000x2500.png",
    },
    {
      name: "Dodge",
      logo: "https://www.carlogos.org/car-logos/dodge-logo-2010.png",
    },
    {
      name: "Suzuki",
      logo: "https://www.carlogos.org/logo/Suzuki-logo-5000x2500.png",
    },
  ];

  return (
    <div className="home-slider-wrapper">
      <Fade triggerOnce>
        <Carousel
          fade
          interval={5000}
          pause={false}
          controls={true}
          indicators={true}
          className="main-hero-carousel"
        >
          {slides.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="slider-container">
                <img
                  src={item.img}
                  className="slider-image"
                  alt={`Slide ${index}`}
                />
              </div>
              <Carousel.Caption className="custom-caption">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="fw-bold slider-title"
                >
                  {t(`slider.${item.key}.title_part1`)}{" "}
                  <span style={{ color: "#fc8b1a" }}>
                    {t(`slider.${item.key}.title_span`)}
                  </span>{" "}
                  {t(`slider.${item.key}.title_part2`)}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="d-none d-md-block fs-5 mt-3"
                >
                  {t(`slider.${item.key}.desc`)}
                </motion.p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>

      {/* 🏎️ Brands Logo Slider */}
      <section className="bg-white py-4 py-md-5 border-bottom overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mb-3 mb-md-4"
        >
          <h2 className="brand-main-title fw-bold text-center mb-2 mb-md-3">
            {t("brands_section.title")}
          </h2>
          <div className="title-separator mx-auto">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </motion.div>

        {/* الحاوية الخارجية */}
        <div
          className="brands-marquee-wrapper position-relative"
          style={{
            direction: "ltr",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false); // إعادة التصفير عند خروج المؤشر بالكامل
          }}
        >
          <div className="marquee-shadow-left d-none d-md-block"></div>
          <div className="marquee-shadow-right d-none d-md-block"></div>

          {/* شريط اللوجوهات التفاعلي */}
          <motion.div
            className={`marquee-content-track d-flex align-items-center ${
              isHovered || isDragging ? "animation-paused" : ""
            }`}
            drag="x" // تفعيل إمكانية السحب اليدوي لليمين واليسار ↔️
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            style={{
              display: "flex",
              gap: "25px",
              padding: "10px 0",
              width: "max-content",
              // نطبق الأنيميشن التلقائي بسلاسة تامة عبر الـ CSS المتجاوب مع الاتجاه
              animationName:
                marqueeDirection === "right"
                  ? "marqueeScrollRight"
                  : "marqueeScrollLeft",
              animationDuration: "45s", // يمكنك زيادة الرقم لإبطاء الحركة أو تقليله لتسريعها
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {/* نكرر المصفوفة لضمان استمرارية الدوران اللانهائي (Infinite Loop) */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <Link
                key={index}
                to={`/brand-cars?brand=${toSlug(brand.name)}`}
                className="brand-item-card"
                title={brand.name}
                onDragStart={(e) => e.preventDefault()} // تمنع المتصفح من سحب الكارت كصورة عشوائية أثناء السحب اليدوي
              >
                <div className="brand-logo-container">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="brand-logo-img"
                    draggable="false"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <span className="brand-name-label">{brand.name}</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        .slider-container { position: relative; width: 100%; height: 85vh; overflow: hidden; background-color: #000; }
        .slider-image { width: 100%; height: 100%; object-fit: cover; opacity: 0.65; }
        .overlay-gradient { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)); }
        
        .slider-title { font-size: 3.5rem; text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
        .brand-main-title { font-size: 2.2rem; color: #212741; }
        
        .title-separator { display: flex; align-items: center; justify-content: center; gap: 12px; width: 200px; }
        .title-separator .line { height: 2px; background: #fc8b1a; flex-grow: 1; }
        .title-separator .dot { width: 8px; height: 8px; background-color: #fc8b1a; border-radius: 50%; }
        
        /* ⚙️ أنيميشن الحركة التلقائية بالـ CSS لضمان عدم القفز والثبات التام عند الإيقاف المؤقت */
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); } /* الثلث لأننا كررنا المصفوفة 3 مرات لثبات السحب */
        }

        @keyframes marqueeScrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        /* الفئة السحرية لإيقاف الحركة فوراً في نفس موضعها الحالي */
        .animation-paused {
          animation-play-state: paused !important;
        }

        /* 📱 تصميم كارت الماركة المرن */
        .brand-item-card {
          width: 140px; 
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          /* ⚡ تم حذف الفلتر الـ grayscale والشفافية لتبدو الصور ملونة وواضحة جداً */
          filter: none; 
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          text-decoration: none;
          user-select: none;
        }

        .brand-logo-container {
          width: 100%;
          height: 55px; 
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .brand-logo-img {
          max-width: 85%;
          max-height: 100%;
          object-fit: contain;
          pointer-events: none;
          transition: transform 0.3s ease;
        }

        .brand-item-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          border-color: rgba(252, 139, 26, 0.4);
        }

        .brand-item-card:hover .brand-logo-img {
          transform: scale(1.06);
        }

        .brand-name-label {
          margin-top: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #212741;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          direction: ltr;
          transition: color 0.3s ease;
        }

        .brand-item-card:hover .brand-name-label {
          color: #fc8b1a;
        }

        .brands-marquee-wrapper {
          padding: 10px 0;
          touch-action: pan-y; /* لتجنب تعليق التمرير الرأسي للصفحة على الموبايل أثناء لمس اللوجوهات */
        }

        .marquee-shadow-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to right, #ffffff, transparent);
          z-index: 2;
          pointer-events: none;
        }
        .marquee-shadow-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to left, #ffffff, transparent);
          z-index: 2;
          pointer-events: none;
        }
        
        /* 📱 تحسين المظهر لشاشات الموبايل */
        @media (max-width: 767px) {
          .slider-container { height: 70vh; }
          .slider-title { font-size: 2rem; }
          .brand-main-title { font-size: 1.6rem; }
          
          .brand-item-card {
            width: 105px; 
            padding: 8px;
            border-radius: 12px;
          }
          
          .brand-logo-container { 
            height: 40px; 
          }

          .brand-name-label {
            font-size: 0.7rem;
            margin-top: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSidler;
