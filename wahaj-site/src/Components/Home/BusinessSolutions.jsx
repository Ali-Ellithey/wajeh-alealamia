import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function BusinessSolutions() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div className="businessSolutions">
      <Container>
        <div className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap">
          <h4
            className={isRtl ? "text-lg-end" : "text-lg-start"}
            style={{
              margin: "0",
              fontWeight: "bold",
              color: "#ffffff",
              width: "100%",
            }}
          >
            {t("business.launch_today")}
            <br />
            <span style={{ color: "#fc8b1a" }}>{t("business.brand_name")}</span>
            <br />
            {t("business.tagline")}
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default BusinessSolutions;
