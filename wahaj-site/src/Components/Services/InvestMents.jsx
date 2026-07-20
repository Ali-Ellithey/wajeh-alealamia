import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaCar,
  FaShieldAlt,
  FaGavel,
} from "react-icons/fa";

import carRentalImg from "@/assets/carrant.webp";
import insuranceImg from "@/assets/Insurance.webp";
import legalImg from "@/assets/convenio.webp";

const TAB_ICONS = {
  rental: <FaCar size={18} />,
  insurance: <FaShieldAlt size={18} />,
  legal: <FaGavel size={18} />,
};

export const InvestMents = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("rental");

  const isAr = i18n.language === "ar";

  const tabs = {
    rental: {
      img: carRentalImg,
      title: t("invest.rental.title"),
      description: t("invest.rental.desc"),
      features: t("invest.rental.features", { returnObjects: true }),
    },
    insurance: {
      img: insuranceImg,
      title: t("invest.insurance.title"),
      description: t("invest.insurance.desc"),
      features: t("invest.insurance.features", { returnObjects: true }),
    },
    legal: {
      img: legalImg,
      title: t("invest.legal.title"),
      description: t("invest.legal.desc"),
      features: t("invest.legal.features", { returnObjects: true }),
    },
  };

  const current = tabs[activeTab];

  return (
    <div
      className="invest-section py-4 py-lg-5"
      style={{ backgroundColor: "#f8f9fb" }}
    >
      <Container>
        {/* ── العنوان ── */}
        <motion.div
          className="text-center mb-4 mb-lg-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-uppercase fw-bold d-inline-block mb-2 px-3 py-1 rounded-pill"
            style={{
              color: "#fc8b1a",
              backgroundColor: "rgba(252,139,26,0.1)",
              fontSize: "0.75rem",
              letterSpacing: "2px",
            }}
          >
            {t("invest.sub_title")}
          </span>
          <h2
            className="fw-bold mt-2"
            style={{ color: "#212741", fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
          >
            {t("invest.main_title")}
          </h2>
          <div
            className="mx-auto mt-3"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #fc8b1a, #ffb347)",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        {/* ── أزرار التبويبات ── */}
        <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-4 mb-lg-5">
          {Object.keys(tabs).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.97 }}
              style={{
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
                padding: "8px 18px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.3s ease",
                backgroundColor: activeTab === tab ? "#212741" : "#fff",
                color: activeTab === tab ? "#fff" : "#555",
                boxShadow:
                  activeTab === tab
                    ? "0 4px 15px rgba(33,39,65,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
                borderBottom:
                  activeTab === tab
                    ? "3px solid #fc8b1a"
                    : "3px solid transparent",
              }}
            >
              <span style={{ color: activeTab === tab ? "#fc8b1a" : "#aaa" }}>
                {TAB_ICONS[tab]}
              </span>
              {t(`invest.tabs.${tab}`)}
            </motion.button>
          ))}
        </div>

        {/* ── المحتوى ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="invest-card p-3 p-md-4 p-lg-5"
              style={{
                backgroundColor: "#fff",
                borderRadius: "24px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.07)",
                border: "1px solid #f0f0f0",
              }}
            >
              <Row
                className={`align-items-center g-3 g-lg-5 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {/* ── الصورة ── */}
                <Col xs={12} lg={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-8px",
                        left: "16px",
                        right: "16px",
                        height: "4px",
                        background: "linear-gradient(90deg, #fc8b1a, #ffb347)",
                        borderRadius: "4px",
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      }}
                    >
                      <img
                        src={current.img}
                        alt={current.title}
                        style={{
                          width: "100%",
                          height: "clamp(200px, 40vw, 360px)",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  </motion.div>
                </Col>

                {/* ── النصوص ── */}
                <Col xs={12} lg={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={isAr ? "text-end" : "text-start"}
                  >
                    {/* الأيقونة والعنوان */}
                    <div
                      className={`d-flex align-items-center gap-3 mb-3 ${isAr ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(252,139,26,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fc8b1a",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        {TAB_ICONS[activeTab]}
                      </div>
                      <h3
                        className="fw-bold mb-0"
                        style={{
                          color: "#212741",
                          fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                        }}
                      >
                        {current.title}
                      </h3>
                    </div>

                    {/* الوصف */}
                    <p
                      className="text-muted mb-3"
                      style={{
                        lineHeight: "1.8",
                        fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                      }}
                    >
                      {current.description}
                    </p>

                    {/* الميزات */}
                    <ul className="list-unstyled mb-4 p-0">
                      {Array.isArray(current.features) &&
                        current.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: isAr ? 10 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`mb-2 d-flex align-items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}
                          >
                            <FaCheckCircle
                              style={{ color: "#fc8b1a", flexShrink: 0 }}
                              size={15}
                            />
                            <span
                              className="fw-medium"
                              style={{
                                color: "#444",
                                fontSize: "clamp(0.82rem, 2.5vw, 0.95rem)",
                              }}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                    </ul>

                    {/* زر واتساب */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        className="d-flex align-items-center justify-content-center gap-2 fw-bold border-0 w-100 w-md-auto"
                        style={{
                          borderRadius: "14px",
                          background:
                            "linear-gradient(135deg, #25d366, #128c7e)",
                          color: "#fff",
                          fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                          padding: "12px 32px",
                          boxShadow: "0 6px 20px rgba(37,211,102,0.35)",
                          maxWidth: "300px",
                        }}
                        onClick={() => {
                          const message = encodeURIComponent(
                            `${t("booking_message")}: ${current.title}`,
                          );
                          window.open(
                            `https://wa.me/+96590930061?text=${message}`,
                            "_blank",
                          );
                        }}
                      >
                        <FaWhatsapp size={18} />
                        {t("invest.order_btn")}
                      </Button>
                    </motion.div>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>

      <style>{`
        .invest-section { min-height: auto; }
        .invest-card { transition: box-shadow 0.3s ease; }
        .invest-card:hover { box-shadow: 0 15px 50px rgba(0,0,0,0.1); }

        @media (max-width: 768px) {
          .invest-section { padding-top: 2rem !important; padding-bottom: 2rem !important; }
          .invest-card { border-radius: 16px !important; }
        }

        @media (min-width: 768px) {
          .w-md-auto { width: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default InvestMents;
