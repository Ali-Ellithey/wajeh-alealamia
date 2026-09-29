import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  FaShieldAlt,
  FaHandshake,
  FaGlobe,
  FaHospital,
  FaPlusSquare,
} from "react-icons/fa";

// --- استيراد صور السلندر العلوي الأصلية ---
import imgdint from "@/assets/dint.webp";
import doctter from "@/assets/doctter.webp";

export const HomeSidler = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const marqueeDirection = "left";

  const slides = [
    {
      img: imgdint,
      key: "imgdint",
      titlePart1: "استعد لابتسامة أحلامك",
      titleSpan: "بأحدث تقنيات الأسنان",
      desc: "نستخدم أحدث الأجهزة العالمية لضمان علاج دقيق، مريح، وبدون أي آلام.",
      badge: "استشارة طبية متخصصة",
    },
    {
      img: doctter,
      key: "doctter",
      titlePart1: "نخبة من أهرامات أطباء الأسنان",
      titleSpan: "بين أيدي أمينة",
      desc: "فريق طبي متكامل بخبرات واسعة لتقديم أفضل رعاية صحية لك ولعائلتك.",
      badge: "رعاية صحية معتمدة",
    },
  ];

  // 🏥 قائمة شركات التعاقد والتأمين مع أيقونات معبرة ومضمونة الظهور فوراً
  const insurancePartners = [
    { name: "NextCare", icon: <FaShieldAlt className="partner-svg-icon" /> },
    { name: "MetLife", icon: <FaHospital className="partner-svg-icon" /> },
    { name: "AXA", icon: <FaHandshake className="partner-svg-icon" /> },
    { name: "Allianz", icon: <FaShieldAlt className="partner-svg-icon" /> },
    { name: "Medgulf", icon: <FaPlusSquare className="partner-svg-icon" /> },
    { name: "Bupa", icon: <FaHospital className="partner-svg-icon" /> },
    {
      name: "Global Assistance",
      icon: <FaGlobe className="partner-svg-icon" />,
    },
  ];

  return (
    <div className="home-slider-wrapper">
      <Fade triggerOnce>
        <Carousel
          fade
          interval={6000}
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
                <div className="slider-overlay"></div>
              </div>

              <Carousel.Caption className="custom-caption text-start">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="d-inline-block px-3 py-1 mb-2 rounded-pill text-white fw-bold badge-custom"
                  style={{ fontSize: "0.85rem" }}
                >
                  {item.badge}
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="fw-bold slider-title text-white"
                >
                  {item.titlePart1}{" "}
                  <span className="title-highlight">{item.titleSpan}</span>
                </motion.h1>

                <div className="line"></div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="fs-5 text-light mb-4"
                  style={{ maxWidth: "600px" }}
                >
                  {item.desc}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* زر الحجز مهيأ بالكامل ليعمل في الموبايل والكمبيوتر بدقة */}
                  <Button
                    variant="primary"
                    className="book-btn fw-bold shadow-lg border-0"
                    style={{
                      position: "relative",
                      zIndex: 99999,
                      pointerEvents: "auto",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/business-solutions");
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate("/business-solutions");
                    }}
                  >
                    {t("book_appointment", "احجز موعدك الآن")}
                  </Button>
                </motion.div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>

      {/* 🏥 Insurance & Partners Marquee Section */}
      <section className="bg-white py-3 py-md-4 border-bottom overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mb-2 mb-md-3"
        >
          <h2 className="brand-main-title fw-bold text-center mb-2">
            {t(
              "insurance_section.title",
              "شركات التأمين ووجهات التعاقد المعتمدة",
            )}
          </h2>
          <div className="title-separator mx-auto">
            <span className="dot"></span>
            <span className="line-sep"></span>
            <span className="dot"></span>
          </div>
        </motion.div>

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
            setIsDragging(false);
          }}
        >
          <div className="marquee-shadow-left d-none d-md-block"></div>
          <div className="marquee-shadow-right d-none d-md-block"></div>

          <motion.div
            className={`marquee-content-track d-flex align-items-center ${
              isHovered || isDragging ? "animation-paused" : ""
            }`}
            drag="x"
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            style={{
              display: "flex",
              gap: "20px",
              padding: "5px 0",
              width: "max-content",
              animationName:
                marqueeDirection === "right"
                  ? "marqueeScrollRight"
                  : "marqueeScrollLeft",
              animationDuration: "35s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            {[
              ...insurancePartners,
              ...insurancePartners,
              ...insurancePartners,
            ].map((partner, index) => (
              <div
                key={index}
                className="brand-item-card"
                title={partner.name}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="brand-logo-container">{partner.icon}</div>
                <span className="brand-name-label">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <style>{`
        .home-slider-wrapper {
          background-color: #0d1b2a;
        }

        .slider-container {
          height: 85vh;
          position: relative;
          overflow: hidden;
          width: 100%;
          background-color: #000;
        }

        .slider-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .slider-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(13, 27, 42, 0.55);
          z-index: 1;
        }

        .custom-caption {
          z-index: 10;
          bottom: 15%;
        }

        .slider-title {
          font-size: 3.2rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
        }

        .title-highlight {
          color: #4ea8de;
        }

        .home-slider-wrapper .line {
          width: 80px;
          height: 4px;
          background-color: #4ea8de;
          margin: 15px 0;
          border-radius: 2px;
        }

        .badge-custom {
          background-color: #1d3557 !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .book-btn {
          background-color: #1d3557 !important;
          color: #ffffff !important;
          transition: all 0.3s ease;
        }

        .book-btn:hover {
          background-color: #4ea8de !important;
          color: #0d1b2a !important;
        }

        .brand-main-title { 
          font-size: 1.8rem; 
          color: #1d3557; 
        }
        
        .title-separator { display: flex; align-items: center; justify-content: center; gap: 10px; width: 180px; }
        .title-separator .line-sep { height: 2px; background: #4ea8de; flex-grow: 1; }
        .title-separator .dot { width: 6px; height: 6px; background-color: #4ea8de; border-radius: 50%; }
        
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marqueeScrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        .animation-paused {
          animation-play-state: paused !important;
        }

        .brand-item-card {
          width: 140px; 
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          user-select: none;
        }

        .brand-logo-container {
          width: 100%;
          height: 38px; 
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-svg-icon {
          font-size: 1.8rem;
          color: #1d3557;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .brand-item-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.06);
          border-color: rgba(78, 168, 222, 0.4);
        }

        .brand-item-card:hover .partner-svg-icon {
          color: #4ea8de;
          transform: scale(1.1);
        }

        .brand-name-label {
          margin-top: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #1d3557;
          text-align: center;
          transition: color 0.3s ease;
        }

        .brand-item-card:hover .brand-name-label {
          color: #4ea8de;
        }

        .brands-marquee-wrapper {
          padding: 5px 0;
          touch-action: pan-y;
        }

        .marquee-shadow-left {
          position: absolute;
          left: 0; top: 0; bottom: 0; width: 80px;
          background: linear-gradient(to right, #ffffff, transparent);
          z-index: 2; pointer-events: none;
        }
        .marquee-shadow-right {
          position: absolute;
          right: 0; top: 0; bottom: 0; width: 80px;
          background: linear-gradient(to left, #ffffff, transparent);
          z-index: 2; pointer-events: none;
        }

        /* 📱 إعدادات الموبايل وتأكيد تفعيل اللمس للزر */
        @media (max-width: 768px) {
          .home-slider-wrapper {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }

          .slider-container {
            height: auto !important;
            min-height: auto !important;
            margin-top: 0 !important;
            display: block;
            line-height: 0;
            pointer-events: auto !important;
          }

          .slider-image {
            width: 100% !important;
            height: auto !important;
            object-fit: contain !important;
            object-position: top !important;
          }

          .custom-caption {
            position: absolute !important;
            bottom: 5% !important;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
            padding: 0 15px !important;
            z-index: 9999 !important;
            pointer-events: auto !important;
          }

          .slider-title {
            font-size: 1.2rem !important;
            line-height: 1.3 !important;
            margin-bottom: 5px !important;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          }

          .home-slider-wrapper .line {
            width: 40px !important;
            height: 2px !important;
            margin: 6px 0 !important;
          }

          .book-btn {
            padding: 6px 18px !important;
            font-size: 0.8rem !important;
            height: auto !important;
            width: auto !important;
            min-width: 110px;
            border-radius: 5px !important;
            pointer-events: auto !important;
            z-index: 99999 !important;
          }

          .custom-caption p {
            display: none !important;
          }

          .brand-main-title { 
            font-size: 1.3rem; 
          }
          
          .brand-item-card {
            width: 110px; 
            padding: 8px;
          }
          
          .brand-logo-container { 
            height: 30px; 
          }

          .partner-svg-icon {
            font-size: 1.4rem;
          }

          .brand-name-label {
            font-size: 0.7rem;
            margin-top: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSidler;
