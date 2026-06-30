import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

// --- تصحيح استيراد الصور باستخدام الـ Alias المباشر ---
import carRentalImg from "@/assets/carrant.jpg";
import insuranceImg from "@/assets/Insurance.jpg";
import legalImg from "@/assets/convenio.jpg";

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

  return (
    <div className="invest py-5" style={{ backgroundColor: "#fff" }}>
      <Container>
        {/* العناوين الرئيسية */}
        <div className="title text-center mb-5">
          <h6
            className="text-uppercase fw-bold"
            style={{ color: "#fc8b1a", letterSpacing: "1px" }}
          >
            {t("invest.sub_title")}
          </h6>
          <h2 className="display-6 fw-bold" style={{ color: "#212741" }}>
            {t("invest.main_title")}
          </h2>
          <div
            className="mx-auto mt-3"
            style={{ width: "60px", height: "3px", backgroundColor: "#fc8b1a" }}
          ></div>
        </div>

        <div className="content">
          {/* أزرار التبويبات */}
          <div className="allButton d-flex flex-wrap justify-content-center gap-3 mb-5">
            {Object.keys(tabs).map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 border-0 shadow-sm transition-all"
                style={{
                  borderRadius: "50px",
                  fontWeight: "bold",
                  backgroundColor: activeTab === tab ? "#fc8b1a" : "#f0f0f0",
                  color: activeTab === tab ? "#fff" : "#555",
                  transition: "0.3s ease",
                }}
              >
                {t(`invest.tabs.${tab}`)}
              </Button>
            ))}
          </div>

          {/* محتوى التبويب المختار */}
          <div className="tab-details">
            {/* استخدام key={activeTab} مع Zoom يضمن إعادة تشغيل الأنيميشن عند التبديل */}
            <Zoom key={activeTab} duration={600} triggerOnce>
              <Row
                className={`align-items-center ${isAr ? "flex-row-reverse" : ""}`}
              >
                {/* قسم الصورة */}
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div
                    className="imgContent shadow-lg rounded-4 overflow-hidden"
                    style={{ border: "8px solid #f8f9fa" }}
                  >
                    <img
                      src={tabs[activeTab].img}
                      alt={tabs[activeTab].title}
                      className="img-fluid w-100"
                      style={{
                        transition: "0.5s transform",
                        objectFit: "cover",
                        maxHeight: "450px",
                      }}
                    />
                  </div>
                </Col>

                {/* قسم النصوص */}
                <Col
                  lg={6}
                  className={`px-lg-5 ${isAr ? "text-end" : "text-start"}`}
                >
                  <div className="boxText">
                    <h2 className="fw-bold mb-3" style={{ color: "#212741" }}>
                      {tabs[activeTab].title}
                    </h2>
                    <p
                      className="text-muted lh-lg mb-4"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {tabs[activeTab].description}
                    </p>

                    <ul className="list-unstyled mb-4 p-0">
                      {Array.isArray(tabs[activeTab].features) &&
                        tabs[activeTab].features.map((feature, i) => (
                          <li
                            key={i}
                            className={`mb-2 fw-medium d-flex align-items-center gap-2 ${isAr ? "justify-content-start" : "justify-content-start"}`}
                          >
                            <i
                              className="bi bi-patch-check-fill"
                              style={{ color: "#fc8b1a", fontSize: "1.2rem" }}
                            ></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>

                    <Button
                      variant="dark"
                      className="px-5 py-3 fw-bold shadow"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#212741",
                        border: "none",
                      }}
                      onClick={() => {
                        const message = encodeURIComponent(
                          `${t("booking_message")}: ${tabs[activeTab].title}`,
                        );
                        window.open(
                          `https://wa.me/+96590930061?text=${message}`,
                          "_blank",
                        );
                      }}
                    >
                      {t("invest.order_btn")}
                    </Button>
                  </div>
                </Col>
              </Row>
            </Zoom>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InvestMents;
