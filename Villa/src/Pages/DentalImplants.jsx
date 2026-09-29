import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const DentalImplants = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  // طلوع أول الصفحة تلقائياً أول ما تفتح
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* هيدر الصفحة */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-header text-center my-5 px-3 pt-4"
      >
        <Container>
          <h2 className="display-5 fw-bold" style={{ color: "#212741" }}>
            {isRtl ? "زراعة الأسنان" : "Dental Implants"}
          </h2>
          <div
            className="mx-auto mt-2"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#0d6efd",
              borderRadius: "10px",
            }}
          ></div>
          <p className="text-muted mt-3 fs-5 fw-light">
            {isRtl
              ? "أحدث تقنيات زراعة الأسنان لتعويض الأسنان المفقودة بأمان تام وبمظهر طبيعي."
              : "Latest dental implant technologies to replace missing teeth safely and naturally."}
          </p>
        </Container>
      </motion.div>

      {/* محتوى الصفحة وزرار الحجز */}
      <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm p-5 rounded-4 text-center bg-white">
              <h3 className="fw-bold text-primary mb-3">
                {isRtl
                  ? "احجز استشارتك لهذه الخدمة الآن"
                  : "Book Your Consultation Now"}
              </h3>
              <p className="text-muted mb-4">
                {isRtl
                  ? "فريقنا الطبي المتميز جاهز لمساعدتك في الحصول على الابتسامة التي تستحقها بكل أمان وبدون أي آلام."
                  : "Our professional medical team is ready to help you get the smile you deserve safely."}
              </p>
              <div>
                <Button
                  as={Link}
                  to="/business-solutions"
                  state={{
                    selectedService: isRtl
                      ? "زراعة الأسنان"
                      : "Dental Implants",
                  }}
                  variant="primary"
                  size="lg"
                  className="rounded-pill px-5 fw-bold shadow-sm"
                >
                  {isRtl ? "احجز موعدك الآن" : "Book Your Appointment"}
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DentalImplants;
