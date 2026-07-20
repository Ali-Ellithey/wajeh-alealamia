import React, { useState } from "react";
import { Col, Card, Row, Button, Badge } from "react-bootstrap";
import {
  FaWhatsapp,
  FaGasPump,
  FaUsers,
  FaCogs,
  FaCheckCircle,
  FaIdCard,
} from "react-icons/fa";
import { motion } from "framer-motion";

// ── خريطة الألوان الموحّدة (مجمّعة من كل الصفحات) ──────────
const COLOR_MAP = {
  أبيض: "#FFFFFF",
  فضي: "#C0C0C0",
  رمادي: "#808080",
  أسود: "#1a1a1a",
  أزرق: "#3b82f6",
  ذهبي: "#D4AF37",
  أحمر: "#ef4444",
  أصفر: "#facc15",
  برتقالي: "#f97316",
  بيج: "#F5F5DC",
};

/**
 * كارت سيارة موحّد يُستخدم في صفحة البراند (BrandCars)
 * نفس المنطق والتصميم المستخدم في الصفحات الأربعة الأصلية
 */
const CarCard = ({ car, index = 0 }) => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <Col xs={12} md={6} xl={4}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -8 }}
      >
        <Card className="shadow-sm border-0 h-100 car-card overflow-hidden">
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

            {/* ── مميزات ── */}
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

            {/* ── الحد الأدنى للعمر ── */}
            <div className="rental-info-box mb-3 p-2 border rounded border-danger text-danger fw-bold small bg-light">
              <FaIdCard className="me-1" /> الحد الأدنى للعمر: {car.minAge} سنة
            </div>

            {/* ── زر واتساب ── */}
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

export default CarCard;
