import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// --- تصحيح استيراد الصور: الاستيراد المباشر هو الأضمن لعملية الـ Build في Vite ---
import imageServices from "@/assets/cover.png";
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
      reverse: true, // النص يسبق الصورة في شاشات lg
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
      className="ServicesContent py-5"
      style={{ backgroundColor: "#fdfdfd" }}
    >
      <Container>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-block ${index !== services.length - 1 ? "mb-5 pb-lg-4" : ""}`}
          >
            <Zoom triggerOnce>
              <Row
                className={`align-items-center ${service.reverse ? "flex-lg-row-reverse" : ""}`}
              >
                {/* عمود الصورة */}
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="service-img-wrapper shadow rounded-4 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-100 img-hover-effect"
                      style={{
                        objectFit: "cover",
                        height: "380px",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </Col>

                {/* عمود النص */}
                <Col lg={6}>
                  <div
                    className={`textContent p-lg-5 p-3 text-center ${isAr ? "text-lg-end" : "text-lg-start"}`}
                  >
                    <div
                      className="icon-box mb-3 d-inline-flex align-items-center justify-content-center shadow-sm"
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "#fff",
                        borderRadius: "15px",
                        color: "#fc8b1a",
                      }}
                    >
                      <i className={`fas ${service.icon} fa-2x`}></i>
                    </div>

                    <h3 className="fw-bold mb-3" style={{ color: "#212741" }}>
                      {service.title}
                    </h3>

                    <p
                      className="text-muted"
                      style={{ lineHeight: "1.9", fontSize: "1.1rem" }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </Col>
              </Row>
            </Zoom>
          </div>
        ))}
      </Container>

      <style>{`
        .img-hover-effect:hover {
          transform: scale(1.05);
        }
        .service-img-wrapper {
          border: 1px solid #eee;
        }
        @media (max-width: 991px) {
          .textContent {
            padding-top: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesContent;
