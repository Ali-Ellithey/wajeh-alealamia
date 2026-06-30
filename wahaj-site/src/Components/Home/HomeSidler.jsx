import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// --- استيراد الصور مباشرة باستخدام الـ Alias ---
import imgSlider1 from "@/assets/cover.png";
import imgSlider2 from "@/assets/Lux.png";
import imgSlider3 from "@/assets/sport1.png";

export const HomeSidler = () => {
  const { t } = useTranslation();

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
      <section className="bg-white py-5 border-bottom overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mb-5"
        >
          <h2 className="brand-main-title fw-bold text-center mb-3">
            {t("brands_section.title")}
          </h2>
          <div className="title-separator mx-auto">
            <span className="dot"></span>
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </motion.div>

        <div
          className="brands-marquee position-relative"
          style={{ direction: "ltr", overflow: "hidden" }}
        >
          <motion.div
            className="d-flex align-items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            style={{ width: "fit-content", display: "flex", gap: "60px" }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="brand-item"
                style={{
                  width: "140px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  filter: "grayscale(100%) opacity(0.6)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-logo-img"
                  style={{ maxHeight: "100px", width: "auto" }}
                />
              </div>
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
        
        .brand-item:hover { filter: grayscale(0%) opacity(1) !important; transform: scale(1.15); }
        
        /* تحسينات الشاشات الصغيرة */
        @media (max-width: 767px) {
          .slider-container { height: 70vh; }
          .slider-title { font-size: 2rem; }
          .brand-main-title { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
};

export default HomeSidler;
