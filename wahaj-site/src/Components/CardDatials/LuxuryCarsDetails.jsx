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
import FordBronco_blue from "@/assets/LuxCars/FordBronco_blue.webp";
import FordBronco_white from "@/assets/LuxCars/FordBronco_white.webp";
import CadillacEscalade600 from "@/assets/LuxCars/CadillacEscalade600.webp";
import CadillacEscalade600_black from "@/assets/LuxCars/CadillacEscalade600_black.webp";
import BentleyBentayga from "@/assets/LuxCars/Bentley-Bentayga.webp";
import lamborghiniurus_gray from "@/assets/LuxCars/lamborghiniurus-gray.webp";
import lamborghiniurus from "@/assets/LuxCars/lamborghiniurus.webp";
import ROX01 from "@/assets/LuxCars/ROX01.webp";
import LandRoverDefender_white from "@/assets/LuxCars/LandRoverDefender_white.webp";
import LandRoverDefender_Grey from "@/assets/LuxCars/LandRoverDefender_Grey.webp";
import LandRoverDefender_Black from "@/assets/LuxCars/LandRoverDefender_Black.webp";

import LandRoverDefender25B from "@/assets/LuxCars/LandRoverDefender25B.webp";
import LandRoverDefender25G from "@/assets/LuxCars/LandRoverDefender25G.webp";
import LandRoverDefender25W from "@/assets/LuxCars/LandRoverDefender25w.webp";

import mercedesS500_white from "@/assets/LuxCars/mercedesS500-white.webp";
import mercedesS500_black from "@/assets/LuxCars/mercedesS500-black.webp";

import RangeRoverSport_Read from "@/assets/LuxCars/RangeRoverSport_Read.webp";
import RangeRoverSport_White from "@/assets/LuxCars/RangeRoverSport_White.webp";
import RangeRoverSport_Black from "@/assets/LuxCars/RangeRoverSport_Black.webp";
import g63_White from "@/assets/LuxCars/MercedesG63ClassW22.webp";
import g63_Gray from "@/assets/LuxCars/MercedesG63ClassG22.webp";
import g63_Black from "@/assets/LuxCars/MercedesG63ClassB22.webp";
import g63_Blue from "@/assets/LuxCars/MercedesG63ClassBlue22.webp";

import MercedesGClass50024Blue from "@/assets/LuxCars/MercedesG-Class50024Blue.webp";
import MercedesGClass50024Black from "@/assets/LuxCars/MercedesG-Class50024Black.webp";

import RangeRoverVogue_black from "@/assets/LuxCars/Range-Rover-Vogue_black.webp";

import RangeRoverAutobiography from "@/assets/LuxCars/RangeRoverAutobiography.webp";
import RangeRoverVogue_white from "@/assets/LuxCars/Range-Rover-Vogue_white.webp";
import RangeRoverAutobiography_Black from "@/assets/LuxCars/RangeRoverAutobiography-Black.webp";
import RollsRoyceCullinan_Black from "@/assets/LuxCars/Rolls-RoyceCullinan-Black.webp";
import RollsRoyceCullinan_White from "@/assets/LuxCars/Rolls-RoyceCullinan-White.webp";
import BMWx6Mpower from "@/assets/LuxCars/BMWx6Mpower.webp";
import BMW740I from "@/assets/LuxCars/BMW740I-Blck.webp";
import BMW740I_white from "@/assets/LuxCars/BMW740I-white.webp";
import BMW735IBlack from "@/assets/LuxCars/BMW735I-black2025.webp";
import BMW735I_white from "@/assets/LuxCars/BMW735-whitei2025.webp";

// ── خريطة الألوان ──────────────────────────────────────────
const COLOR_MAP = {
  أبيض: "#FFFFFF",
  فضي: "#C0C0C0",
  رمادي: "#808080",
  أسود: "#1a1a1a",
  أزرق: "#3b82f6",
  ذهبي: "#D4AF37",
  أحمر: "#ef4444",
  أصفر: "#facc15",
  بيج: "#F5F5DC",
};

// ── بيانات السيارات المجمّعة ────────────────────────────────
export const luxuryCarsGrouped = [
  {
    id: "ford-bronco-2024",
    name: "Ford Bronco",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "EcoBoost" },
    features: ["سقف مكشوف", "نظام GOAT", "أداء صحراوي"],
    minAge: 21,
    variants: [
      { color: "أزرق", image: FordBronco_blue },
      { color: "أبيض", image: FordBronco_white },
    ],
  },
  {
    id: "cadillac-escalade-2025",
    name: "Cadillac Escalade 600",
    year: "2025",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
    features: ["صوت AKG", "شاشة OLED منحنية", "مساحة ضخمة"],
    minAge: 21,
    variants: [
      { color: "فضي", image: CadillacEscalade600 },
      { color: "أسود", image: CadillacEscalade600_black },
    ],
  },
  {
    id: "bentley-bentayga-2022",
    name: "Bentley Bentayga",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
    features: ["فخامة بريطانية", "مقاعد جلد طبيعي", "نظام صوت Naim"],
    minAge: 25,
    variants: [{ color: "بيج", image: BentleyBentayga }],
  },
  {
    id: "lamborghini-urus-2022",
    name: "Lamborghini Urus",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Biturbo" },
    features: ["تسارع رياضي", "تصميم عدواني", "أداء فائق"],
    minAge: 25,
    variants: [
      { color: "رمادي", image: lamborghiniurus_gray },
      { color: "أسود", image: lamborghiniurus },
    ],
  },
  {
    id: "rox01-2026",
    name: "Rox 01",
    year: "2026",
    specs: { passengers: 7, transmission: "أتوماتيك", engine: "Hybrid" },
    features: ["تكنولوجيا ذكية", "مساحة واسعة", "شاشات لمس"],
    minAge: 21,
    variants: [{ color: "أبيض", image: ROX01 }],
  },
  {
    id: "defender-2024",
    name: "Land Rover Defender",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
    features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: LandRoverDefender_Grey },
      { color: "أسود", image: LandRoverDefender_Black },
      { color: "أبيض", image: LandRoverDefender_white },
    ],
  },
  {
    id: "mercedes-g63-2024",
    name: "Mercedes G-Class500 AMG",
    year: "2024",
    specs: {
      passengers: 5,
      transmission: "أتوماتيك",
      engine: "4.0L V8 Twin-Turbo",
    },
    features: [
      "أيقونة الفخامة والقوة بتصميم صندوقي كلاسيكي",
      "أداء جبار على الطرق الوعرة والتضاريس الصعبة",
      "مقصورة داخلية فائقة الرفاهية بنظام صوتي محيطي",
    ],
    minAge: 25,
    variants: [
      { color: "أزرق", image: MercedesGClass50024Blue },
      { color: "أسود", image: MercedesGClass50024Black },
    ],
  },
  {
    id: "defender-2025",
    name: "Land Rover Defender",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "P400" },
    features: ["قدرات وعرة", "تصميم عصري", "دفع رباعي"],
    minAge: 21,
    variants: [
      { color: "رمادي", image: LandRoverDefender25G },
      { color: "أسود", image: LandRoverDefender25B },
      { color: "أبيض", image: LandRoverDefender25W },
    ],
  },
  {
    id: "bmw-740i-2024",
    name: "BMW 740i",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "I6 TwinPower" },
    features: [
      "شاشة ترفيه خلفية عملاقة",
      "أبواب شفط ذكية",
      "إضاءة سقف الكريستال Panorama",
    ],
    minAge: 25,
    variants: [
      { color: "أبيض", image: BMW740I_white },
      { color: "أسود", image: BMW740I },
    ],
  },
  {
    id: "mercedes-s500-2022",
    name: "Mercedes S500",
    year: "2022",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6 Turbo" },
    features: ["فخامة الصالون", "مقاعد مساج", "شاشة MBUX"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: mercedesS500_white },
      { color: "أسود", image: mercedesS500_black },
    ],
  },
  {
    id: "bmw-735i-2025",
    name: "BMW 735i",
    year: "2025",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "I6 TwinPower" },
    features: [
      "شاشة مسرح خلفية (Theater Screen)",
      "تحكم ذكي باللمس في الأبواب",
      "نظام صوتي Bowers & Wilkins",
    ],
    minAge: 25,
    variants: [
      { color: "أبيض", image: BMW735I_white },
      { color: "أسود", image: BMW735IBlack },
    ],
  },
  {
    id: "rr-sport-2023",
    name: "Range Rover Sport",
    year: "2023",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 Dynamic" },
    features: ["ثبات عالي", "كاميرات 360", "هيدروليك"],
    minAge: 21,
    variants: [
      { color: "أحمر", image: RangeRoverSport_Read },
      { color: "أبيض", image: RangeRoverSport_White },
      { color: "أسود", image: RangeRoverSport_Black },
    ],
  },
  {
    id: "bmw-x6m-2024",
    name: "BMW X6 M Power",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8 TwinPower" },
    features: ["نظام دفع M xDrive", "مقاعد رياضية جلد", "شاشة عرض ملونة"],
    minAge: 25,
    variants: [{ color: "فضي", image: BMWx6Mpower }],
  },
  {
    id: "mercedes-g63-2022",
    name: "Mercedes G-Class63 AMG",
    year: "2022",
    specs: {
      passengers: 5,
      transmission: "أتوماتيك",
      engine: "4.0L V8 Twin-Turbo",
    },
    features: [
      "أيقونة الفخامة والقوة بتصميم صندوقي كلاسيكي",
      "أداء جبار على الطرق الوعرة والتضاريس الصعبة",
      "مقصورة داخلية فائقة الرفاهية بنظام صوتي محيطي",
    ],
    minAge: 25,
    variants: [
      { color: "أزرق", image: g63_Blue },
      { color: "أسود", image: g63_Black },
      { color: "رمادي", image: g63_Gray },
      { color: "أبيض", image: g63_White },
    ],
  },
  {
    id: "rr-vogue-2024",
    name: "Range Rover Vogue",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
    features: ["ثلاجة", "نظام ميريديان", "فتحة سقف"],
    minAge: 21,
    variants: [
      { color: "أسود", image: RangeRoverVogue_black },
      { color: "أبيض", image: RangeRoverVogue_white },
    ],
  },
  {
    id: "rr-autobiography-2024",
    name: "Range Rover Autobiography",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
    features: ["فخامة قصوى", "مقاعد تنفيذية", "عزل صوتي فائق"],
    minAge: 21,
    variants: [
      { color: "أبيض", image: RangeRoverAutobiography },
      { color: "أسود", image: RangeRoverAutobiography_Black },
    ],
  },
  {
    id: "rolls-cullinan-2024",
    name: "Rolls-Royce Cullinan",
    year: "2024",
    specs: { passengers: 5, transmission: "أتوماتيك", engine: "V12" },
    features: ["فخامة مطلقة", "مقاعد مساج", "سقف نجوم"],
    minAge: 25,
    variants: [
      { color: "أسود", image: RollsRoyceCullinan_Black },
      { color: "أبيض", image: RollsRoyceCullinan_White },
    ],
  },
];

// ── كومبوننت الكارت الواحد ──────────────────────────────────
const CarCard = ({ car, index }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <Col xs={12} md={6} xl={4}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      >
        <Card className="shadow-sm border-0 h-100 car-card overflow-hidden">
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
            <Card.Title className="fw-bold mb-2 fs-4">{car.name}</Card.Title>

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

            <Row className="g-0 bg-light rounded py-3 mb-3 text-secondary">
              <Col xs={4} className="border-end">
                <FaUsers color="#fc8b1a" />
                <div className="small mt-1 fw-bold">
                  {car.specs.passengers} ركاب
                </div>
              </Col>
              <Col xs={4} className="border-end">
                <FaCogs color="#fc8b1a" />
                <div className="small mt-1 fw-bold">
                  {car.specs.transmission}
                </div>
              </Col>
              <Col xs={4}>
                <FaGasPump color="#fc8b1a" />
                <div className="small mt-1 fw-bold text-truncate px-1">
                  {car.specs.engine}
                </div>
              </Col>
            </Row>

            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
              {car.features.map((f, i) => (
                <Badge
                  key={i}
                  bg="white"
                  text="dark"
                  className="border py-2 px-2 small fw-normal"
                >
                  <FaCheckCircle className="text-warning me-1" /> {f}
                </Badge>
              ))}
            </div>

            <div className="rental-info-box mb-3 p-2 border rounded border-danger text-danger fw-bold small bg-light">
              <FaIdCard className="me-1" /> الحد الأدنى للعمر: {car.minAge} سنة
            </div>

            <Button
              variant="success"
              href={`https://wa.me/+96590930061?text=استفسار عن حجز ${car.name} موديل ${car.year} - اللون ${car.variants[selectedVariant].color}`}
              target="_blank"
              className="w-100 py-2 fw-bold whatsapp-btn"
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
const LuxuryCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeSidler />

      <div className="section-header text-center my-5 px-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="display-5 fw-bold" style={{ color: "#212741" }}>
            السيارات الفارهة
          </h1>
          <div
            className="mx-auto mt-2"
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#fc8b1a",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5">
            انطلق بفخامة لا تضاهى مع أسطولنا المميز في الكويت
          </p>
        </motion.div>
      </div>

      <Container className="my-5" dir="rtl">
        <Row className="g-4">
          {luxuryCarsGrouped.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </Row>
      </Container>

      <style>{`
        .car-card { border-radius: 20px; transition: all 0.3s ease-in-out; }
        .car-card:hover { transform: translateY(-10px); box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important; }
        .whatsapp-btn { background-color: #25d366; border: none; border-radius: 12px; transition: 0.3s; }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
      `}</style>
    </>
  );
};

export default LuxuryCarsDetails;
