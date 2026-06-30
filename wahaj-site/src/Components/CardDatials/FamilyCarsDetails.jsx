import React, { useEffect } from "react";
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

// استيراد السلايدر (تأكد من صحة المسار حسب بنية مجلداتك)
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

const FamilyCarsDetails = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const familyCars = [
    {
      id: 1,
      name: "GMC Yukon",
      image: gmc_yukon_gray,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "شاشات خلفية", "نظام صوت متطور"],
      minAge: 21,
    },
    {
      id: 2,
      name: "GMC Yukon",
      image: gmc_yukon_blabk,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "شاشات خلفية", "نظام صوت متطور"],
      minAge: 21,
    },
    {
      id: 3,
      name: "GMC Yukon",
      image: gmc_yukon_white,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "شاشات خلفية", "نظام صوت متطور"],
      minAge: 21,
    },
    {
      id: 4,
      name: "Jeep Wrangler Sport",
      image: Jeep_wrangler_Sport_black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
      minAge: 21,
    },
    {
      id: 5,
      name: "Jeep Wrangler Sahara",
      image: Jeep_wrangler_Sahara,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
      minAge: 21,
    },
    {
      id: 6,
      name: "Jeep Wrangler Sport",
      image: Jeep_wrangler_sport_slaver,
      year: "2014",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
      minAge: 21,
    },
    {
      id: 7,
      name: "Jeep Wrangler Sport",
      image: jeep_wrangle_sport,
      year: "2018",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "سقف قابل للفتح", "تصميم وعر"],
      minAge: 21,
    },
    {
      id: 8,
      name: "Nissan Patrol",
      image: nissan_safari_black,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 9,
      name: "Nissan Patrol",
      image: nissan_safari_salver,
      year: "2010",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 10,
      name: "Nissan X-Trail",
      image: nissan_trail,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["تصميم رياضي", "شاشة لمس", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 11,
      name: "Nissan X-Trail",
      image: nissan_xtrail,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["تصميم رياضي", "شاشة لمس", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
    {
      id: 12,
      name: "Nissan Patrol",
      image: nissan_patrol_slaver,
      year: "2010",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 13,
      name: "Nissan Patrol",
      image: nissan_patrol_black,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 14,
      name: "Nissan Patrol",
      image: nissan_patrol_white,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V6" },
      features: ["دفع رباعي", "أداء صحراوي", "مساحة واسعة"],
      minAge: 21,
    },
    {
      id: 15,
      name: "Chevrolet Tahoe",
      image: Tahoe_black,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "أداء قوي", "تصميم فاخر"],
      minAge: 21,
    },
    {
      id: 16,
      name: "Chevrolet Tahoe",
      image: Tahoe_salver,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "أداء قوي", "تصميم فاخر"],
      minAge: 21,
    },
    {
      id: 17,
      name: "Chevrolet Tahoe",
      image: Tahoe_Gold,
      year: "2024",
      specs: { passengers: 7, transmission: "أتوماتيك", engine: "V8" },
      features: ["مساحة عملاقة", "أداء قوي", "تصميم فاخر"],
      minAge: 21,
    },
    {
      id: 18,
      name: "Ford Territory",
      image: Ford_Territory_black,
      year: "2024",
      specs: { passengers: 5, transmission: "أتوماتيك", engine: "Turbo" },
      features: ["تصميم عصري", "مساحة عائلية", "اقتصادية في الاستهلاك"],
      minAge: 21,
    },
  ];

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
          {familyCars.map((car, index) => (
            <Col key={car.id} xs={12} md={6} xl={4}>
              <motion.div
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-sm border-0 h-100 car-card overflow-hidden bg-white">
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
                    <Card.Img
                      variant="top"
                      src={car.image}
                      style={{ paddingBottom: "10px" }}
                    />
                  </div>

                  <Card.Body className="p-4 text-center">
                    <Card.Title
                      className="fw-bold mb-3 fs-4"
                      style={{ color: "#212741" }}
                    >
                      {car.name}
                    </Card.Title>

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

                    <div
                      className="rental-info-box mb-4 p-2 border rounded text-primary fw-bold small bg-light shadow-sm"
                      style={{ borderStyle: "dashed", borderColor: "#0d6efd" }}
                    >
                      <FaIdCard className="me-1" /> الحد الأدنى للعمر:{" "}
                      {car.minAge} سنة
                    </div>

                    <Button
                      variant="success"
                      href={`https://wa.me/+96590930061?text=أريد استفسار عن حجز ${car.name}`}
                      target="_blank"
                      className="w-100 py-3 fw-bold shadow-sm whatsapp-btn"
                    >
                      <FaWhatsapp size={22} className="me-2" /> احجز الآن
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
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
