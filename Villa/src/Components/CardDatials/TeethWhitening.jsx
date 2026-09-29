import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TeethWhitening = () => {
  const { i18n } = useTranslation();
  return (
    <div className="py-5 bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm p-5 rounded-4 text-center bg-white">
              <h1 className="fw-bold text-primary mb-4">
                {i18n.language === "ar" ? "تبييض الأسنان" : "Teeth Whitening"}
              </h1>
              <p className="text-muted fs-5 mb-5 lh-lg">
                {i18n.language === "ar"
                  ? "تقنية التبييض بالليزر الحديثة للحصول على أسنان ناصعة البياض ولامعة خلال جلسة واحدة فقط."
                  : "Modern laser whitening technology for bright, shiny teeth in a single session."}
              </p>
              <div>
                <Button
                  as={Link}
                  to="/business-solutions"
                  state={{ selectedService: "تبييض الأسنان" }}
                  variant="primary"
                  size="lg"
                  className="rounded-pill px-5 fw-bold shadow-sm"
                >
                  {i18n.language === "ar"
                    ? "احجز موعد لهذه الخدمة"
                    : "Book This Service"}
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default TeethWhitening;
