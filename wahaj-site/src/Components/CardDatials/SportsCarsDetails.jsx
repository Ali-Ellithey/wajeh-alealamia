import React, { useEffect } from "react";
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

// ── Dodge Charger ─────────────────────────────────────
import dodgecharger_Black from "@/assets/SportsCars/dodgecharger-Black.webp";
import dodgecharger_Gray from "@/assets/SportsCars/dodgecharger-Gray.webp";
import dodgecharger_White from "@/assets/SportsCars/dodgecharger-white.webp";

// ── Fiat 500X ─────────────────────────────────────────
import fiat500x_Black from "@/assets/SportsCars/fiat500x-black.webp";
import fiat500x_Blue from "@/assets/SportsCars/fiat500x-blue.webp";
import fiat500x_White from "@/assets/SportsCars/fiat500x-white.webp";

// ── Fiat 500 ──────────────────────────────────────────
import fiat500 from "@/assets/SportsCars/fiat500.webp";
import fiat500_Black from "@/assets/SportsCars/fiat500-black.webp";
import fiat500_White from "@/assets/SportsCars/fiat500-white.webp";

// ── Suzuki Jimny ──────────────────────────────────────
import suzukiJimny_Silver from "@/assets/SportsCars/suzukijimny-Salver.webp";
import suzukiJimny_Gray from "@/assets/SportsCars/suzukijimny-Gray.webp";
import suzukiJimny_Black from "@/assets/SportsCars/suzukijimny-Black.webp";

// ── Chevrolet Corvette ────────────────────────────────
import chevroletCorvette_Blue from "@/assets/SportsCars/Chevrolet-Chevrolet-Blue.webp";
import chevroletCorvette_Red from "@/assets/SportsCars/Chevrolet-Chevrolet-Rade.webp";

// ── Chevrolet Silverado ───────────────────────────────
import chevroletSilverado_Black from "@/assets/SportsCars/ChevroletSilverado-Black.webp";
import chevroletSilverado_Blue from "@/assets/SportsCars/ChevroletSilverado-Blua.webp";

// ── Ferrari F8 Spider ─────────────────────────────────
import ferrariF8Spider_Red from "@/assets/SportsCars/Ferrari_F8_Spider-Rade.webp";
import ferrariF8Spider_White from "@/assets/SportsCars/Ferrari_F8_Spider-white.webp";

// ── McLaren ───────────────────────────────────────────
import mclaren from "@/assets/SportsCars/McLaren.webp";

// ── Mini Cooper ───────────────────────────────────────
import miniCooper_Black from "@/assets/SportsCars/minicooper-Black.webp";
import miniCooper_Red from "@/assets/SportsCars/minicooper-Rade.webp";
import miniCooper_White from "@/assets/SportsCars/minicooper-white.webp";

// ── Ford Mustang ──────────────────────────────────────
import mustang_Black from "@/assets/SportsCars/Mustang_Black.webp";
import mustangDarkHorse_Black from "@/assets/SportsCars/Mustang_Dark_Horse-black.webp";
import mustangDarkHorse_Blue from "@/assets/SportsCars/Mustang_Dark_Horse-blue.webp";
import mustang_Gray from "@/assets/SportsCars/Mustang-Gray.webp";
import mustang_Red from "@/assets/SportsCars/Mustang-Read.webp";

// ── Porsche 911 Carrera ───────────────────────────────
import porsche911_Black from "@/assets/SportsCars/porschecarrera911-Black.webp";
import porsche911_Blue from "@/assets/SportsCars/porschecarrera911-Blue.webp";
import porsche911_White from "@/assets/SportsCars/porschecarrera911-white.webp";

const SportsCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sportsCars = [
    {
      id: 1,
      name: "Dodge Charger",
      image: dodgecharger_Black,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 2,
      name: "Dodge Charger",
      image: dodgecharger_Gray,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 3,
      name: "Dodge Charger",
      image: dodgecharger_White,
      year: "2023",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6/V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 4,
      name: "Fiat 500X",
      image: fiat500x_Black,
      year: "2018",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4 Turbo" },
      features: ["تصميم إيطالي", "حجم عملي", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 5,
      name: "Fiat 500X",
      image: fiat500x_Blue,
      year: "2018",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4 Turbo" },
      features: ["تصميم إيطالي", "حجم عملي", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 6,
      name: "Fiat 500X",
      image: fiat500x_White,
      year: "2018",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "1.4 Turbo" },
      features: ["تصميم إيطالي", "حجم عملي", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 7,
      name: "Fiat 500",
      image: fiat500,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.0 Hybrid" },
      features: ["تصميم كلاسيكي", "خفيفة وسهلة القيادة", "اقتصادية جدًا"],
      minAge: 21,
    },
    {
      id: 8,
      name: "Fiat 500",
      image: fiat500_Black,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.0 Hybrid" },
      features: ["تصميم كلاسيكي", "خفيفة وسهلة القيادة", "اقتصادية جدًا"],
      minAge: 21,
    },
    {
      id: 9,
      name: "Fiat 500",
      image: fiat500_White,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.0 Hybrid" },
      features: ["تصميم كلاسيكي", "خفيفة وسهلة القيادة", "اقتصادية جدًا"],
      minAge: 21,
    },
    {
      id: 10,
      name: "Suzuki Jimny",
      image: suzukiJimny_Silver,
      year: "2024",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["دفع رباعي حقيقي", "حجم مدمج", "مناسبة للطرق الوعرة"],
      minAge: 21,
    },
    {
      id: 11,
      name: "Suzuki Jimny",
      image: suzukiJimny_Gray,
      year: "2024",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["دفع رباعي حقيقي", "حجم مدمج", "مناسبة للطرق الوعرة"],
      minAge: 21,
    },
    {
      id: 12,
      name: "Suzuki Jimny",
      image: suzukiJimny_Black,
      year: "2024",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "1.5L" },
      features: ["دفع رباعي حقيقي", "حجم مدمج", "مناسبة للطرق الوعرة"],
      minAge: 21,
    },
    {
      id: 13,
      name: "Chevrolet Corvette",
      image: chevroletCorvette_Blue,
      year: "2024",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
      features: ["تسارع فائق", "تصميم رياضي خالص", "مقصورة قيادة منخفضة"],
      minAge: 25,
    },
    {
      id: 14,
      name: "Chevrolet Corvette",
      image: chevroletCorvette_Red,
      year: "2024",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
      features: ["تسارع فائق", "تصميم رياضي خالص", "مقصورة قيادة منخفضة"],
      minAge: 25,
    },
    {
      id: 15,
      name: "Chevrolet Silverado",
      image: chevroletSilverado_Black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["قوة سحب عالية", "مساحة شحن واسعة", "دفع رباعي"],
      minAge: 21,
    },
    {
      id: 16,
      name: "Chevrolet Silverado",
      image: chevroletSilverado_Blue,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V8" },
      features: ["قوة سحب عالية", "مساحة شحن واسعة", "دفع رباعي"],
      minAge: 21,
    },
    {
      id: 17,
      name: "Ferrari F8 Spider",
      image: ferrariF8Spider_Red,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
      features: ["سقف مكشوف", "أداء خارق", "تصميم إيطالي فاخر"],
      minAge: 25,
    },
    {
      id: 18,
      name: "Ferrari F8 Spider",
      image: ferrariF8Spider_White,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
      features: ["سقف مكشوف", "أداء خارق", "تصميم إيطالي فاخر"],
      minAge: 25,
    },
    {
      id: 19,
      name: "McLaren",
      image: mclaren,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "V8" },
      features: ["سوبر كار", "أداء سباقات", "تصميم مستقبلي"],
      minAge: 25,
    },
    {
      id: 20,
      name: "Mini Cooper",
      image: miniCooper_Black,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "4 سلندر" },
      features: ["تصميم كلاسيكي", "سهل القيادة", "اقتصادي"],
      minAge: 21,
    },
    {
      id: 21,
      name: "Mini Cooper",
      image: miniCooper_Red,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "4 سلندر" },
      features: ["تصميم كلاسيكي", "سهل القيادة", "اقتصادي"],
      minAge: 21,
    },
    {
      id: 22,
      name: "Mini Cooper",
      image: miniCooper_White,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "4 سلندر" },
      features: ["تصميم كلاسيكي", "سهل القيادة", "اقتصادي"],
      minAge: 21,
    },
    {
      id: 23,
      name: "Ford Mustang",
      image: mustang_Black,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 24,
      name: "Ford Mustang Dark Horse",
      image: mustangDarkHorse_Black,
      year: "2024",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["إصدار محدود", "أداء متطور", "تصميم حصري"],
      minAge: 21,
    },
    {
      id: 25,
      name: "Ford Mustang Dark Horse",
      image: mustangDarkHorse_Blue,
      year: "2024",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["إصدار محدود", "أداء متطور", "تصميم حصري"],
      minAge: 21,
    },
    {
      id: 26,
      name: "Ford Mustang",
      image: mustang_Gray,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 27,
      name: "Ford Mustang",
      image: mustang_Red,
      year: "2023",
      specs: { passengers: 4, transmission: "أتوماتيك", engine: "V8" },
      features: ["تصميم عضلي", "أداء قوي", "صوت عادم رياضي"],
      minAge: 21,
    },
    {
      id: 28,
      name: "Porsche 911 Carrera",
      image: porsche911_Black,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
      features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
      minAge: 25,
    },
    {
      id: 29,
      name: "Porsche 911 Carrera",
      image: porsche911_Blue,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
      features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
      minAge: 25,
    },
    {
      id: 30,
      name: "Porsche 911 Carrera",
      image: porsche911_White,
      year: "2023",
      specs: { passengers: 2, transmission: "أتوماتيك", engine: "6 سلندر" },
      features: ["أيقونة السيارات الرياضية", "أداء ألماني دقيق", "تصميم خالد"],
      minAge: 25,
    },
  ];

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
          {sportsCars.map((car) => (
            <Col key={car.id} xs={12} lg={6} xl={4}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-sm border-0 h-100 car-card">
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
                    <Card.Img
                      variant="top"
                      src={car.image}
                      style={{ paddingBottom: "10px" }}
                    />
                  </div>

                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold fs-4 mb-3 text-center">
                      {car.name}
                    </Card.Title>

                    <Row className="text-center g-0 bg-light rounded py-3 mb-3">
                      <Col xs={4} className="border-end">
                        <FaUsers color="#fc8b1a" className="mb-1" />
                        <div className="small fw-bold">
                          {car.specs.passengers} ركاب
                        </div>
                      </Col>
                      <Col xs={4} className="border-end">
                        <FaCogs color="#fc8b1a" className="mb-1" />
                        <div className="small fw-bold">
                          {car.specs.transmission}
                        </div>
                      </Col>
                      <Col xs={4}>
                        <FaGasPump color="#fc8b1a" className="mb-1" />
                        <div className="small fw-bold">{car.specs.engine}</div>
                      </Col>
                    </Row>

                    <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
                      {car.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          bg="white"
                          text="dark"
                          className="border font-weight-normal py-2 px-3"
                        >
                          <FaCheckCircle className="text-warning me-1" />{" "}
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div
                      className="age-limit-box text-center mb-3 py-2 border rounded"
                      style={{ color: "#d9534f" }}
                    >
                      <FaIdCard className="me-2" /> الحد الأدنى للعمر:{" "}
                      {car.minAge} سنة
                    </div>

                    <Button
                      href={`https://wa.me/+96590930061?text=استفسار عن حجز: ${car.name}`}
                      target="_blank"
                      className="whatsapp-btn w-100 border-0 py-3 fw-bold"
                    >
                      <FaWhatsapp size={22} className="me-2" /> احجز الآن عبر
                      واتساب
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .title-line { width: 80px; height: 4px; background: #fc8b1a; border-radius: 2px; }
        .car-card { border-radius: 20px; transition: 0.3s; }
        .whatsapp-btn { 
          background-color: #25d366; 
          border-radius: 15px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          transition: 0.3s;
        }
        .whatsapp-btn:hover { background-color: #128c7e; transform: scale(1.02); }
        .age-limit-box { background-color: #fff5f5; border-color: #feb2b2 !important; font-size: 0.9rem; font-weight: bold; }
      `}</style>
    </>
  );
};

export default SportsCarsDetails;
