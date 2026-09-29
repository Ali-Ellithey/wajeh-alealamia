import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import aboutClinicImg from "@/assets/doctter.webp";

export const AboutUS = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="AboutUS py-5 my-4"
      id="About"
      style={{ overflow: "hidden", backgroundColor: "#f8fafc" }}
    >
      <Container>
        <Row className="align-items-center g-5">
          {/* عمود الصورة التعبيرية للعيادة بتصميم انسيابي وفخم */}
          <Col lg={6} xs={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="image-container shadow-sm position-relative"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                }}
              >
                <img
                  src={aboutClinicImg}
                  alt="About Our Dental Clinic"
                  className="img-fluid w-100"
                  style={{
                    height: "450px",
                    objectFit: "cover",
                    borderRadius: "24px",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
            </motion.div>
          </Col>

          {/* عمود النصوص والنبذة القوية عن البراند */}
          <Col lg={6} xs={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={
                i18n.language === "ar"
                  ? "text-lg-end text-center"
                  : "text-lg-start text-center"
              }
            >
              <h6
                className="text-uppercase mb-3"
                style={{
                  color: "#0f766e",
                  letterSpacing: "2.5px",
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                }}
              >
                {t("about.sub_title")}
              </h6>

              <h2
                className="display-6 fw-bold mb-4"
                style={{ color: "#0f172a", lineHeight: "1.3" }}
              >
                {t("about.main_intro_title")}
              </h2>

              <p
                className="text-muted mb-3"
                style={{ lineHeight: "1.9", fontSize: "1.05rem" }}
              >
                {t("about.company_description_1")}
              </p>

              <p
                className="text-muted mb-4"
                style={{ lineHeight: "1.9", fontSize: "1.02rem" }}
              >
                {t("about.company_description_2")}
              </p>

              {/* إحصائيات البراند السريعة */}
              <div className="row g-3 mb-4 text-center text-lg-start">
                <div className="col-4">
                  <div className="p-2 border-end">
                    <h3 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                      +15
                    </h3>
                    <small className="text-muted">{t("about.years_exp")}</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2 border-end">
                    <h3 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                      +10k
                    </h3>
                    <small className="text-muted">{t("about.clients")}</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-2">
                    <h3 className="fw-bold mb-0" style={{ color: "#0f766e" }}>
                      100%
                    </h3>
                    <small className="text-muted">{t("about.support")}</small>
                  </div>
                </div>
              </div>

              {/* زر اتخاذ القرار / التواصل */}
              <Button
                variant="primary"
                className="border-0 px-5 py-3 fw-bold shadow-sm text-white"
                style={{
                  backgroundColor: "#0f766e",
                  borderRadius: "12px",
                  transition: "all 0.3s ease",
                }}
                onClick={() => {
                  const message = encodeURIComponent(
                    "مرحباً، أود حجز موعد استشارة في عيادة الأسنان.",
                  );
                  window.open(
                    `https://wa.me/+201000000000?text=${message}`,
                    "_blank",
                  );
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.backgroundColor = "#115e59";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "#0f766e";
                }}
              >
                {t("about.cta")}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUS;
