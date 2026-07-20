import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import {
  FaWhatsapp,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import HomeSidler from "@/Components/Home/HomeSidler";

import fiat500 from "@/assets/SportsCars/fiat500.webp";
import fiat500_Black from "@/assets/SportsCars/fiat500-black.webp";
import fiat500_White from "@/assets/SportsCars/fiat500-white.webp";
import suzukiJimny_Silver from "@/assets/SportsCars/suzukijimny-Salver.webp";
import suzukiJimny_Gray from "@/assets/SportsCars/suzukijimny-Gray.webp";
import suzukiJimny_Black from "@/assets/SportsCars/suzukijimny-Black.webp";
import chevroletCorvette_Blue from "@/assets/SportsCars/Chevrolet-Chevrolet-Blue.webp";
import chevroletCorvette_Red from "@/assets/SportsCars/Chevrolet-Chevrolet-Rade.webp";
import chevroletSilverado_Black from "@/assets/SportsCars/ChevroletSilverado-Black.webp";
import chevroletSilverado_Blue from "@/assets/SportsCars/ChevroletSilverado-Blua.webp";
import ferrariF8Spider_Red from "@/assets/SportsCars/Ferrari_F8_Spider-Rade.webp";
import ferrariF8Spider_White from "@/assets/SportsCars/Ferrari_F8_Spider-white.webp";
import mclaren from "@/assets/SportsCars/McLaren.webp";
import miniCooper_Black from "@/assets/SportsCars/minicooper-Black.webp";
import miniCooper_Red from "@/assets/SportsCars/minicooper-Rade.webp";
import miniCooper_White from "@/assets/SportsCars/minicooper-white.webp";
import mustang_Black from "@/assets/SportsCars/Mustang_Black.webp";
import mustangDarkHorse_Black from "@/assets/SportsCars/Mustang_Dark_Horse-black.webp";
import mustangDarkHorse_Blue from "@/assets/SportsCars/Mustang_Dark_Horse-blue.webp";
import mustang_Gray from "@/assets/SportsCars/Mustang-Gray.webp";
import mustang_Red from "@/assets/SportsCars/Mustang-Read.webp";
import porsche911_Black from "@/assets/SportsCars/porschecarrera911-Black.webp";
import porsche911_Blue from "@/assets/SportsCars/porschecarrera911-Blue.webp";
import porsche911_White from "@/assets/SportsCars/porschecarrera911-white.webp";
import chrysler300s_White from "@/assets/EconomyCars/Chrysler300-white.webp";
import mercedesAMG_Cla from "@/assets/LuxCars/mercedesAMG-Cla.webp";
import porschecarrera from "@/assets/SportsCars/porschecarrera911-2026white.webp";

import GMCSierra from "@/assets/SportsCars/GMCSierra23.webp";
import PolarisSlingshoW23 from "@/assets/SportsCars/PolarisSlingshoW23.webp";
import PolarisSlingshoB23 from "@/assets/SportsCars/PolarisSlingshoB23.webp";
// ── خريطة الألوان ──────────────────────────────────────────
const COLOR_MAP = {
  أبيض: "#FFFFFF",
  فضي: "#C0C0C0",
  رمادي: "#808080",
  أسود: "#1a1a1a",
  أزرق: "#3b82f6",
  أحمر: "#ef4444",
  أصفر: "#facc15",
  برتقالي: "#f97316",
};

// ── بيانات السيارات المجمّعة ────────────────────────────────
// ✅ تم تصديرها (export) عشان تُستخدم في صفحة البراند الموحّدة BrandCars.jsx
export const sportsCarsGrouped = [
  {
    id: "mercedes-cla-2023",
    name: "Mercedes CLA-45s AMG",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "AMG Turbo" },
    features: ["تصميم كوبيه", "جنوط AMG", "أداء رياضي"],
    minAge: 21,
    variants: [{ color: "أسود", image: mercedesAMG_Cla }],
  },
  {
    id: "fiat500c-2023",
    name: "Fiat 500C",
    year: "2023",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.0 Hybrid" },
    features: ["تصميم كلاسيكي", "خفيفة وسهلة القيادة", "اقتصادية جدًا"],
    minAge: 21,
    variants: [
      { color: "أحمر", image: fiat500 },
      { color: "أسود", image: fiat500_Black },
      { color: "أبيض", image: fiat500_White },
    ],
  },
  {
    id: "polaris-slingshot-2023",
    name: "Polaris Slingshot",
    year: "2023",
    specs: {
      passengers: 2,
      transmission: "أتوماتيك / عادي",
      engine: "2.0L ProStar",
    },
    features: [
      "تصميم رياضي مكشوف بثلاث عجلات",
      "أداء قوي وتسارع مذهل",
      "تجربة قيادة فريدة ومثيرة",
    ],
    minAge: 25,
    variants: [
      { color: "أبيض", image: PolarisSlingshoW23 },
      { color: "أسود", image: PolarisSlingshoB23 },
    ],
  },
  {
    id: "suzuki-jimny-2025",
    name: "Suzuki Jimny",
    year: "2025",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
    features: ["دفع رباعي حقيقي", "حجم مدمج", "مناسبة للطرق الوعرة"],
    minAge: 21,
    variants: [{ color: "فضي", image: suzukiJimny_Silver }],
  },
  {
    id: "suzuki-jimny-2023",
    name: "Suzuki Jimny",
    year: "2023",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
    features: ["دفع رباعي حقيقي", "حجم مدمج", "مناسبة للطرق الوعرة"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: suzukiJimny_Gray },
      { color: "أسود", image: suzukiJimny_Black },
    ],
  },
  {
    id: "corvette-2024",
    name: "Chevrolet Corvette",
    year: "2024",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
    features: ["تسارع فائق", "تصميم رياضي خالص", "مقصورة قيادة منخفضة"],
    minAge: 25,
    variants: [
      { color: "أزرق", image: chevroletCorvette_Blue },
      { color: "أحمر", image: chevroletCorvette_Red },
    ],
  },
  {
    id: "silverado-2023",
    name: "Chevrolet Silverado",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
    features: ["قوة سحب عالية", "مساحة شحن واسعة", "دفع رباعي"],
    minAge: 21,
    variants: [{ color: "أسود", image: chevroletSilverado_Black }],
  },
  {
    id: "gmc-sierra-2023",
    name: "GMC Sierra",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "6.2L V8" },
    features: [
      "فخامة مطلقة وتصميم هجومي باللون الأسود",
      "قوة سحب جبارة مخصصة للمهمات الصعبة",
      "مقاطير داخلية فاخرة وتقنيات قيادة متطورة",
    ],
    minAge: 21,
    variants: [{ color: "أسود", image: GMCSierra }],
  },
  {
    id: "silverado-2024",
    name: "Chevrolet Silverado",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
    features: ["قوة سحب عالية", "مساحة شحن واسعة", "دفع رباعي"],
    minAge: 21,
    variants: [{ color: "أزرق", image: chevroletSilverado_Blue }],
  },
  {
    id: "ferrari-f8-2021",
    name: "Ferrari F8 Spider",
    year: "2021",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
    features: ["سقف مكشوف", "أداء خارق", "تصميم إيطالي فاخر"],
    minAge: 25,
    variants: [
      { color: "أحمر", image: ferrariF8Spider_Red },
      { color: "أبيض", image: ferrariF8Spider_White },
    ],
  },
  {
    id: "mclaren-2022",
    name: "McLaren Artura",
    year: "2022",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
    features: ["سوبر كار", "أداء سباقات", "تصميم مستقبلي"],
    minAge: 25,
    variants: [{ color: "برتقالي", image: mclaren }],
  },
  {
    id: "mini-cooper-2023",
    name: "Mini Cooper",
    year: "2023",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "4 سلندر" },
    features: ["تصميم كلاسيكي", "سهل القيادة", "اقتصادي"],
    minAge: 21,
    variants: [
      { color: "أسود", image: miniCooper_Black },
      { color: "أحمر", image: miniCooper_Red },
    ],
  },
  {
    id: "mini-cooper-2025",
    name: "Mini Cooper",
    year: "2025",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "4 سلندر" },
    features: ["تصميم كلاسيكي", "سهل القيادة", "اقتصادي"],
    minAge: 21,
    variants: [{ color: "أبيض", image: miniCooper_White }],
  },
  {
    id: "mustang-2023",
    name: "Ford Mustang 5.0",
    year: "2023",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
    features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
    minAge: 21,
    variants: [
      { color: "أسود", image: mustang_Black },
      { color: "رمادي", image: mustang_Gray },
      { color: "أحمر", image: mustang_Red },
    ],
  },
  {
    id: "mustang-dark-horse-2024",
    name: "Ford Mustang Dark Horse",
    year: "2024",
    specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
    features: ["إصدار محدود", "أداء متطور", "تصميم حصري"],
    minAge: 21,
    variants: [
      { color: "أسود", image: mustangDarkHorse_Black },
      { color: "أزرق", image: mustangDarkHorse_Blue },
    ],
  },
  {
    id: "porsche-911-2026",
    name: "Porsche Carrera 911",
    year: "2026",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
    features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
    minAge: 25,
    variants: [{ color: "أبيض", image: porschecarrera }],
  },
  {
    id: "porsche-911-2025",
    name: "Porsche Carrera 911",
    year: "2025",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
    features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
    minAge: 25,
    variants: [
      { color: "أسود", image: porsche911_Black },
      { color: "أبيض", image: porsche911_White },
    ],
  },
  {
    id: "porsche-911-2023",
    name: "Porsche Carrera 911",
    year: "2023",
    specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
    features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
    minAge: 25,
    variants: [{ color: "أزرق", image: porsche911_Blue }],
  },

  {
    id: "chrysler300-2022",
    name: "Chrysler 300s",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
    features: ["سيدان فارهة", "تصميم أمريكي كلاسيكي", "محرك قوي"],
    minAge: 21,
    variants: [{ color: "أبيض", image: chrysler300s_White }],
  },
];

// ── كومبوننت الكارت الواحد ──────────────────────────────────
const CarCard = ({ car }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <Col xs={12} lg={6} xl={4}>
      <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
        <Card className="shadow-sm border-0 h-100 car-card">
          {/* ── صورة السيارة ── */}
          <div
            className="position-relative overflow-hidden"
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
                padding: "8px 15px",
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

          <Card.Body className="p-4">
            <Card.Title className="fw-bold fs-4 mb-2 text-center">
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
                  style={{ color: "#fc8b1a", minWidth: "50px" }}
                >
                  {car.variants[selectedVariant].color}
                </span>
              </div>
            )}

            {/* ── مواصفات ── */}
            <Row className="text-center g-0 bg-light rounded py-3 mb-3">
              <Col xs={4} className="border-end">
                <FaUsers color="#fc8b1a" className="mb-1" />
                <div className="small fw-bold">{car.specs.passengers} ركاب</div>
              </Col>
              <Col xs={4} className="border-end">
                <FaCogs color="#fc8b1a" className="mb-1" />
                <div className="small fw-bold">{car.specs.transmission}</div>
              </Col>
              <Col xs={4}>
                <FaGasPump color="#fc8b1a" className="mb-1" />
                <div className="small fw-bold">{car.specs.engine}</div>
              </Col>
            </Row>

            {/* ── مميزات ── */}
            <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
              {car.features.map((feature, idx) => (
                <Badge
                  key={idx}
                  bg="white"
                  text="dark"
                  className="border font-weight-normal py-2 px-3"
                >
                  <FaCheckCircle className="text-warning me-1" /> {feature}
                </Badge>
              ))}
            </div>

            {/* ── الحد الأدنى للعمر ── */}
            <div
              className="age-limit-box text-center mb-3 py-2 border rounded"
              style={{ color: "#d9534f" }}
            >
              <FaIdCard className="me-2" /> الحد الأدنى للعمر: {car.minAge} سنة
            </div>

            {/* ── زر واتساب ── */}
            <Button
              href={`https://wa.me/+96590930061?text=استفسار عن حجز: ${car.name} موديل ${car.year} - اللون ${car.variants[selectedVariant].color}`}
              target="_blank"
              className="whatsapp-btn w-100 border-0 py-3 fw-bold"
            >
              <FaWhatsapp size={22} className="me-2" /> احجز الآن عبر واتساب
            </Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

// ── الكومبوننت الرئيسي ──────────────────────────────────────
const SportsCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeSidler />
      <Container className="my-5 py-4" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h1 className="display-5 fw-bold" style={{ color: "#212741" }}>
            السيارات الرياضية والخاصة
          </h1>
          <div className="title-line mx-auto"></div>
          <p className="text-muted mt-3 fs-5">
            تجربة قيادة استثنائية تجمع بين القوة والفخامة
          </p>
        </motion.div>

        <Row className="g-4">
          {sportsCarsGrouped.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </Row>
      </Container>

      <style>{`
        .title-line { width: 80px; height: 4px; background: #fc8b1a; border-radius: 2px; margin-top: 10px; }
        .car-card { border-radius: 20px; transition: 0.3s; }
        .whatsapp-btn {
          background-color: #25d366;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          color: white;
        }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
        .age-limit-box { background-color: #fff5f5; border-color: #feb2b2 !important; font-size: 0.9rem; font-weight: bold; }
      `}</style>
    </>
  );
};

export default SportsCarsDetails;
