import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import {
  FaWhatsapp,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaCalendarAlt,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import HomeSidler from "@/Components/Home/HomeSidler";
import gmc_yukon_gray from "@/assets/FamilyCars/gmc-yukon-gray.webp";
import gmc_yukon_blabk from "@/assets/FamilyCars/gmc-yukon-blabk.webp";
import gmc_yukon_white from "@/assets/FamilyCars/gmc-yukon-white.webp";
import Jeep_wrangler_Sport_black from "@/assets/FamilyCars/Jeep-wrangler-Sport-black.webp";
import Jeep_wrangler_Sahara from "@/assets/FamilyCars/Jeep-wrangler-Sahara.webp";
import Jeep_wrangler_sport_slaver from "@/assets/FamilyCars/Jeep-wrangler-sport-slaver.webp";
import jeep_wrangle_sport from "@/assets/FamilyCars/jeep-wrangle-sport.webp";
import nissan_safari_black from "@/assets/FamilyCars/nissan-safari-black.webp";
import nissan_safari_salver from "@/assets/FamilyCars/nissan-safari-salver.webp";
import nissan_trail from "@/assets/FamilyCars/nissan-trail.webp";
import nissan_xtrail from "@/assets/FamilyCars/nissan-xtrail.webp";
import nissan_patrol_slaver from "@/assets/FamilyCars/nissan-patrol-slaver.webp";
import nissan_patrol_black from "@/assets/FamilyCars/nissan-patrol-black.webp";
import nissan_patrol_white from "@/assets/FamilyCars/nissan-patrol-white.webp";
import Tahoe_black from "@/assets/FamilyCars/Tahoe-black.webp";
import Tahoe_salver from "@/assets/FamilyCars/Tahoe-salver.webp";
import Tahoe_Gold from "@/assets/FamilyCars/Tahoe-Gold.webp";
import Ford_Territory_black from "@/assets/FamilyCars/Ford-Territory-black.webp";
import prado_Silver from "@/assets/EconomyCars/Prado.webp";
import prado_White from "@/assets/EconomyCars/Prado-white.webp";
import prado_Black from "@/assets/EconomyCars/prado-black.webp";
import jetour_White from "@/assets/EconomyCars/Jetour-white.webp";
import jetour_Black from "@/assets/EconomyCars/Jetour-black.webp";
import jetour_Silver from "@/assets/EconomyCars/JETOUR-salver.webp";

// ── خريطة الألوان ──────────────────────────────────────────
const COLOR_MAP = {
  أبيض: "#FFFFFF",
  فضي: "#C0C0C0",
  رمادي: "#808080",
  أسود: "#1a1a1a",
  أزرق: "#3b82f6",
  ذهبي: "#D4AF37",
  أحمر: "#ef4444",
  بيج: "#F5F5DC",
};

// ── بيانات السيارات المجمّعة ────────────────────────────────
const familyCarsGrouped = [
  {
    id: "gmc-yukon-2024",
    name: "GMC Yukon",
    year: "2024",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
    features: ["مساحة عملاقة", "شاشات خلفية", "نظام صوت متطور"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: gmc_yukon_gray },
      { color: "أسود", image: gmc_yukon_blabk },
      { color: "أبيض", image: gmc_yukon_white },
    ],
  },
  {
    id: "jeep-wrangler-sport-2024",
    name: "Jeep Wrangler Sport",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
    minAge: 21,
    variants: [{ color: "أسود", image: Jeep_wrangler_Sport_black }],
  },
  {
    id: "jeep-wrangler-sahara-2024",
    name: "Jeep Wrangler Sahara",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
    minAge: 21,
    variants: [{ color: "بيج", image: Jeep_wrangler_Sahara }],
  },
  {
    id: "jeep-wrangler-sport-2014",
    name: "Jeep Wrangler Sport",
    year: "2014",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
    minAge: 21,
    variants: [{ color: "فضي", image: Jeep_wrangler_sport_slaver }],
  },
  {
    id: "jeep-wrangler-sport-2018",
    name: "Jeep Wrangler Sport",
    year: "2018",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
    minAge: 21,
    variants: [{ color: "رمادي", image: jeep_wrangle_sport }],
  },
  {
    id: "nissan-patrol-2024",
    name: "Nissan Patrol",
    year: "2024",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
    minAge: 21,
    variants: [
      { color: "أسود", image: nissan_safari_black },
      { color: "أسود", image: nissan_patrol_black },
      { color: "أبيض", image: nissan_patrol_white },
    ],
  },
  {
    id: "nissan-patrol-2010",
    name: "Nissan Patrol",
    year: "2010",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
    features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
    minAge: 21,
    variants: [
      { color: "فضي", image: nissan_safari_salver },
      { color: "فضي", image: nissan_patrol_slaver },
    ],
  },
  {
    id: "nissan-xtrail-2024",
    name: "Nissan X-Trail",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
    features: ["تصميم رياضي", "شاشة لمس", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: nissan_trail },
      { color: "أبيض", image: nissan_xtrail },
    ],
  },
  {
    id: "tahoe-2024",
    name: "Chevrolet Tahoe",
    year: "2024",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
    features: ["مساحة عملاقة", "أداء قوي", "تصميم فاخر"],
    minAge: 21,
    variants: [
      { color: "أسود", image: Tahoe_black },
      { color: "فضي", image: Tahoe_salver },
      { color: "ذهبي", image: Tahoe_Gold },
    ],
  },
  {
    id: "ford-territory-2024",
    name: "Ford Territory",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
    features: ["تصميم عصري", "مساحة عائلية", "اقتصادية في الاستهلاك"],
    minAge: 21,
    variants: [{ color: "أسود", image: Ford_Territory_black }],
  },
  {
    id: "jetour-t2-2025",
    name: "Jetour T2",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
    features: ["تصميم مغامرات", "4x4 قوي", "مظهر عسكري أنيق"],
    minAge: 21,
    variants: [{ color: "أبيض", image: jetour_White }],
  },
  {
    id: "jetour-t2-2026",
    name: "Jetour T2",
    year: "2026",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.5T" },
    features: ["تصميم مغامرات", "4x4 قوي", "مظهر عسكري أنيق"],
    minAge: 21,
    variants: [
      { color: "أسود", image: jetour_Black },
      { color: "فضي", image: jetour_Silver },
    ],
  },
  {
    id: "prado-2025",
    name: "Toyota Land Cruiser Prado",
    year: "2025",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "2.8L Diesel" },
    features: [
      "SUV فاخر 7 مقاعد",
      "قدرة على الطرق الوعرة",
      "تصميم كلاسيكي أيقوني",
    ],
    minAge: 21,
    variants: [
      { color: "فضي", image: prado_Silver },
      { color: "أبيض", image: prado_White },
    ],
  },
  {
    id: "prado-2024",
    name: "Toyota Land Cruiser Prado",
    year: "2024",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "2.8L Diesel" },
    features: [
      "SUV فاخر 7 مقاعد",
      "قدرة على الطرق الوعرة",
      "تصميم كلاسيكي أيقوني",
    ],
    minAge: 21,
    variants: [{ color: "أسود", image: prado_Black }],
  },
];

// ── كومبوننت الكارت الواحد ──────────────────────────────────
const CarCard = ({ car, index }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <Col xs={12} md={6} xl={4}>
      <motion.div
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="shadow-sm border-0 h-100 car-card overflow-hidden bg-white">
          {/* ── صورة السيارة ── */}
          <div
            className="position-relative"
            style={{ height: "230px", background: "#f8f9fa" }}
          >
            <Badge
              pill
              className="position-absolute"
              style={{
                top: "15px",
                right: "15px",
                background: "#fc8b1a",
                zIndex: 5,
                padding: "8px 12px",
              }}
            >
              موديل {car.year}
            </Badge>
            <motion.img
              key={selectedVariant}
              src={car.variants[selectedVariant].image}
              alt={car.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                paddingBottom: "10px",
              }}
            />
          </div>

          <Card.Body className="p-4 text-center">
            <Card.Title
              className="fw-bold mb-2 fs-4"
              style={{ color: "#212741" }}
            >
              {car.name}
            </Card.Title>

            {/* ── بلت الألوان ── */}
            {car.variants.length > 1 && (
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3 flex-wrap">
                <span className="text-muted small ms-1">اللون:</span>
                {car.variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVariant(i)}
                    title={v.color}
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: COLOR_MAP[v.color] || "#ccc",
                      border:
                        selectedVariant === i
                          ? "3px solid #fc8b1a"
                          : "2px solid #ccc",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      boxShadow:
                        selectedVariant === i
                          ? "0 0 0 2px #fff, 0 0 0 4px #fc8b1a"
                          : "none",
                      outline: "none",
                      padding: 0,
                    }}
                  />
                ))}
                <span
                  className="small fw-bold"
                  style={{ color: "#fc8b1a", minWidth: "40px" }}
                >
                  {car.variants[selectedVariant].color}
                </span>
              </div>
            )}

            {/* ── مواصفات ── */}
            <Row className="g-0 bg-light rounded py-3 mb-3 text-secondary border">
              <Col xs={4} className="border-start">
                <FaUsers color="#fc8b1a" size={18} />
                <div className="small mt-1 fw-bold">
                  {car.specs.passengers} ركاب
                </div>
              </Col>
              <Col xs={4} className="border-start">
                <FaCogs color="#fc8b1a" size={18} />
                <div className="small mt-1 fw-bold">
                  {car.specs.transmission}
                </div>
              </Col>
              <Col xs={4}>
                <FaGasPump color="#fc8b1a" size={18} />
                <div className="small mt-1 fw-bold text-truncate px-1">
                  {car.specs.engine}
                </div>
              </Col>
            </Row>

            {/* ── مميزات ── */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
              {car.features.map((f, i) => (
                <Badge
                  key={i}
                  bg="white"
                  text="dark"
                  className="border py-2 px-2 small fw-normal shadow-sm"
                >
                  <FaCheckCircle className="text-warning me-1" /> {f}
                </Badge>
              ))}
            </div>

            {/* ── الحد الأدنى للعمر ── */}
            <div
              className="rental-info-box mb-4 p-2 border rounded text-primary fw-bold small bg-light shadow-sm"
              style={{ borderStyle: "dashed", borderColor: "#0d6efd" }}
            >
              <FaIdCard className="me-1" /> الحد الأدنى للعمر: {car.minAge} سنة
            </div>

            {/* ── زر واتساب ── */}
            <Button
              variant="success"
              href={`https://wa.me/+96590930061?text=أريد استفسار عن حجز ${car.name} موديل ${car.year} - اللون ${car.variants[selectedVariant].color}`}
              target="_blank"
              className="w-100 py-3 fw-bold shadow-sm whatsapp-btn"
            >
              <FaWhatsapp size={22} className="me-2" /> احجز الآن
            </Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

// ── الكومبوننت الرئيسي ──────────────────────────────────────
const FamilyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeSidler />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header text-center my-5 px-3"
      >
        <Container>
          <h2 className="display-5 fw-bold" style={{ color: "#212741" }}>
            السيارات العائلية و SUV
          </h2>
          <div
            className="mx-auto mt-2"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#fc8b1a",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5">
            الخيار الأمثل للرحلات العائلية والمغامرات مع أعلى معايير الراحة
            والأمان
          </p>
        </Container>
      </motion.div>

      <Container className="my-5" dir="rtl">
        <Row className="g-4">
          {familyCarsGrouped.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </Row>
      </Container>

      <style>{`
        .car-card { border-radius: 25px; transition: all 0.3s ease; border: 1px solid #eee !important; }
        .car-card:hover { box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important; }
        .whatsapp-btn { background-color: #25d366; border: none; border-radius: 15px; transition: 0.3s ease; }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
        .section-header h2 { letter-spacing: -1px; }
      `}</style>
    </>
  );
};

export default FamilyCarsDetails;
