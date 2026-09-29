import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function BusinessSolutions() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    membershipType: "نقابة",
    membershipName: "",
  });

  useEffect(() => {
    if (location.state && location.state.selectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        doctor: location.state.selectedDoctor,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbytBRyU45ab_bNF3YZl-L3evrWhxrHGy-EbrKpo4DFDbZ4fJaR3UBB6nnC2pi0hWVQ/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      alert("تم تسجيل حجز الموعد وإرساله بنجاح!");
      setFormData({
        name: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        membershipType: "نقابة",
        membershipName: "",
      });
      setShowModal(false);
    } catch (error) {
      console.error("خطأ في الإرسال:", error);
      alert("حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="businessSolutions d-none d-lg-block"
        style={{ padding: "60px 0", backgroundAttachment: "scroll" }}
      >
        <Container>
          <div className="text-center mb-4">
            <h4
              style={{
                fontWeight: "bold",
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "1.8rem",
                textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {t("business.launch_today") || "احجز موعدك الآن مع"} <br />
              <span style={{ color: "#1d4ed8" }}>
                {t("business.brand_name") || "عياداتنا المتميزة"}
              </span>
            </h4>
          </div>

          <div
            className="p-4 rounded-4 shadow-lg mx-auto"
            style={{
              maxWidth: "700px",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(29, 78, 216, 0.2)",
            }}
          >
            <BookingForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </Container>
      </div>

      <div className="d-block d-lg-none py-4 px-3">
        <div className="text-center mb-3">
          <h5 className="fw-bold text-dark">
            {t("business.launch_today") || "احجز موعدك الآن"}
          </h5>
        </div>
        <div className="p-3 rounded-4 shadow-sm bg-white border">
          <BookingForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>

      <div
        className="d-block d-lg-none fixed-bottom p-2 bg-white shadow-lg border-top text-center"
        style={{ zIndex: 1050 }}
      >
        <Button
          onClick={() => setShowModal(true)}
          className="w-100 py-2 fw-bold shadow"
          style={{
            backgroundColor: "#1d4ed8",
            borderColor: "#1d4ed8",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        >
          📅 احجز موعدك الآن
        </Button>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        dir={isRtl ? "rtl" : "ltr"}
      >
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-dark fs-6">
            حجز موعد جديد
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-2">
          <BookingForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

function BookingForm({ formData, handleChange, handleSubmit, loading }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={6} className="mb-2">
          <Form.Group controlId="patientName">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              اسمك الكريم
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="أدخل اسمك"
              required
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </Form.Group>
        </Col>

        <Col md={6} className="mb-2">
          <Form.Group controlId="patientPhone">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              رقم الهاتف
            </Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010xxxxxxxx"
              required
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="mb-2">
          <Form.Group controlId="doctorSelect">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              اختر الطبيب المعالج
            </Form.Label>
            <Form.Select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            >
              <option value="">-- اختر الطبيب --</option>
              <option value="د. أحمد">د. أحمد</option>
              <option value="د. محمد">د. محمد</option>
              <option value="د. نانسي">د. نانسي</option>
              <option value="د. خالد">د. خالد</option>
              <option value="د. كريم">د. كريم</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-2">
          <Form.Group controlId="bookingDate">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              تاريخ الحجز
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </Form.Group>
        </Col>

        <Col md={6} className="mb-2">
          <Form.Group controlId="bookingTime">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              الميعاد (الساعة)
            </Form.Label>
            <Form.Control
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="مثال: 01:20 مساءً"
              required
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-2">
          <Form.Group controlId="membershipType">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              تابعة لـ (نقابة / تأمين)
            </Form.Label>
            <Form.Select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            >
              <option value="نقابة">نقابة</option>
              <option value="تأمين">تأمين</option>
              <option value="لا يوجد">لا يوجد</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={6} className="mb-3">
          <Form.Group controlId="membershipName">
            <Form.Label
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "0.9rem" }}
            >
              اسم النقابة أو جهة التأمين
            </Form.Label>
            <Form.Select
              name="membershipName"
              value={formData.membershipName}
              onChange={handleChange}
              style={{
                height: "38px",
                fontSize: "0.9rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            >
              <option value="">-- اختر الجهة (نقابة أو تأمين) --</option>
              <option value="NextCare (نكست كير)">NextCare (نكست كير)</option>
              <option value="AXA (أكسا)">AXA (أكسا)</option>
              <option value="MetLife (ميتلايف)">MetLife (ميتلايف)</option>
              <option value="Allianz (أليانز)">Allianz (أليانز)</option>
              <option value="Bupa (بوبا)">Bupa (بوبا)</option>
              <option value="مصر للتأمين الطبي">مصر للتأمين الطبي</option>
              <option value="نقابة الصحفيين">نقابة الصحفيين</option>
              <option value="نقابة الأطباء">نقابة الأطباء</option>
              <option value="نقابة المحامين">نقابة المحامين</option>
              <option value="نقابة المهندسين">نقابة المهندسين</option>
              <option value="نقابة التجاريين">نقابة التجاريين</option>
              <option value="نقابة المعلمين">نقابة المعلمين</option>
              <option value="أخرى / جهة أخرى">أخرى / جهة أخرى</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <div className="text-center mt-2">
        <Button
          type="submit"
          disabled={loading}
          className="w-100 py-2 fw-bold shadow-sm"
          style={{
            backgroundColor: "#1d4ed8",
            borderColor: "#1d4ed8",
            borderRadius: "6px",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "جاري الإرسال..." : "تأكيد حجز الموعد"}
        </Button>
      </div>
    </Form>
  );
}

export default BusinessSolutions;
