import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import imageServices from "@/assets/cover.webp";
import servicesImage from "@/assets/servies.jpg";
import imegEnd from "@/assets/personVip.jpg";

export const ServicesContent = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const services = [
    {
      id: "rental",
      img: imageServices,
      icon: "fa-car",
      title: t("services_content.rental.title"),
      desc: t("services_content.rental.desc"),
      reverse: false,
    },
    {
      id: "maintenance",
      img: servicesImage,
      icon: "fa-shield-alt",
      title: t("services_content.maintenance.title"),
      desc: t("services_content.maintenance.desc"),
      reverse: true,
    },
    {
      id: "driver",
      img: imegEnd,
      icon: "fa-user-tie",
      title: t("services_content.driver.title"),
      desc: t("services_content.driver.desc"),
      reverse: false,
    },
  ];

  return (
    <div
      className="ServicesContent py-4 py-lg-5"
      style={{ backgroundColor: "#fdfdfd" }}
    >
      <Container>
        {services.map((service, index) => {
          const isReversed = isAr ? !service.reverse : service.reverse;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={
                index !== services.length - 1 ? "mb-4 mb-lg-5 pb-lg-3" : ""
              }
            >
              {/* فاصل بين الأقسام */}
              {index !== 0 && (
                <div
                  className="mx-auto mb-4 mb-lg-5"
                  style={{
                    width: "80px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #fc8b1a, transparent)",
                  }}
                />
              )}

              <div
                className="service-card p-3 p-md-4"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                }}
              >
                <Row
                  className={`align-items-center g-3 g-lg-4 ${isReversed ? "flex-lg-row-reverse" : ""}`}
                >
                  {/* ── الصورة ── */}
                  <Col xs={12} lg={6}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      style={{ position: "relative" }}
                    >
                      {/* شريط علوي */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-6px",
                          left: "16px",
                          right: "16px",
                          height: "4px",
                          background:
                            "linear-gradient(90deg, #fc8b1a, #ffb347)",
                          borderRadius: "4px",
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                          border: "1px solid #eee",
                        }}
                      >
                        <img
                          src={service.img}
                          alt={service.title}
                          style={{
                            width: "100%",
                            height: "clamp(200px, 40vw, 380px)",
                            objectFit: "cover",
                            display: "block",
                            transition: "transform 0.5s ease",
                          }}
                          className="service-img"
                        />
                      </div>
                    </motion.div>
                  </Col>

                  {/* ── النص ── */}
                  <Col xs={12} lg={6}>
                    <div
                      className={`p-2 p-lg-4 text-center ${isAr ? "text-lg-end" : "text-lg-start"}`}
                    >
                      {/* الأيقونة */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: "64px",
                          height: "64px",
                          backgroundColor: "rgba(252,139,26,0.1)",
                          borderRadius: "16px",
                          color: "#fc8b1a",
                        }}
                      >
                        <i className={`fas ${service.icon} fa-xl`}></i>
                      </motion.div>

                      {/* رقم القسم */}
                      <div
                        className="fw-bold mb-1"
                        style={{
                          color: "rgba(252,139,26,0.3)",
                          fontSize: "clamp(2rem, 6vw, 3rem)",
                          lineHeight: 1,
                          fontFamily: "monospace",
                        }}
                      >
                        0{index + 1}
                      </div>

                      {/* العنوان */}
                      <h3
                        className="fw-bold mb-3"
                        style={{
                          color: "#212741",
                          fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* خط فاصل */}
                      <div
                        className={`mb-3 ${isAr ? "me-auto me-lg-0 ms-lg-auto" : "mx-auto mx-lg-0"}`}
                        style={{
                          width: "50px",
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #fc8b1a, #ffb347)",
                          borderRadius: "2px",
                        }}
                      />

                      {/* الوصف */}
                      <p
                        className="text-muted mb-0"
                        style={{
                          lineHeight: "1.9",
                          fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
                        }}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          );
        })}
      </Container>

      <style>{`
        .service-img:hover { transform: scale(1.04); }
        .service-card { transition: box-shadow 0.3s ease; }
        .service-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important; }

        @media (max-width: 768px) {
          .ServicesContent { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
          .service-card { border-radius: 14px !important; }
        }
      `}</style>
    </div>
  );
};

export default ServicesContent;
