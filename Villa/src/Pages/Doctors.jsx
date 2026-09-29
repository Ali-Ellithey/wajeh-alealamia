import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Doctors() {
  const { t } = useTranslation();

  const doctorsList = [
    {
      id: 1,
      name: "د. أحمد",
      specialty: "استشاري زراعة الأسنان وابتسامة هوليوود",
      experience: "10 سنوات خبرة",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "د. محمد",
      specialty: "أخصائي تقويم الأسنان والفكين",
      experience: "8 سنوات خبرة",
      image:
        "https://images.unsplash.com/photo-1594824813596-f9463c267035?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "د. نانسي",
      specialty: "استشاري علاج العصب وتجميل الأسنان",
      experience: "12 سنة خبرة",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      name: "د. خالد",
      specialty: "أخصائي جراحة الفم والأسنان",
      experience: "7 سنوات خبرة",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "د. كريم",
      specialty: "استشاري طب أسنان الأطفال",
      experience: "9 سنوات خبرة",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div
      className="doctors-page py-5"
      style={{ backgroundColor: "#f8fafc", minHeight: "80vh" }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{ color: "#1e293b", fontSize: "2.3rem" }}
          >
            نخبة من أفضل أطباء الأسنان
          </h2>
          <p
            className="text-muted mt-2"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            نمتلك فريقاً طبياً متكاملاً من ذوي الكفاءات العالية والخبرات الطويلة
            لضمان حصولك على أفضل رعاية صحية لابتسامتك.
          </p>
        </div>

        <Row className="g-4">
          {doctorsList.map((doc) => (
            <Col lg={4} md={6} key={doc.id}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center">
                <div style={{ height: "280px", overflow: "hidden" }}>
                  <Card.Img
                    variant="top"
                    src={doc.image}
                    alt={doc.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column">
                  <Card.Title className="fw-bold text-dark fs-4 mb-1">
                    {doc.name}
                  </Card.Title>
                  <Card.Text className="text-primary fw-semibold small mb-2">
                    {doc.specialty}
                  </Card.Text>
                  <span
                    className="badge bg-light text-secondary align-self-center px-3 py-2 rounded-pill mb-4"
                    style={{ fontSize: "0.85rem" }}
                  >
                    ⭐ {doc.experience}
                  </span>
                  <div className="mt-auto">
                    <Button
                      as={Link}
                      to="/business-solutions"
                      state={{ selectedDoctor: doc.name }}
                      variant="primary"
                      className="w-100 rounded-pill fw-bold py-2"
                      style={{ backgroundColor: "#1d4ed8", border: "none" }}
                    >
                      احجز موعد مع الطبيب
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
