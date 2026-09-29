import React, { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next"; // استيراد الهوك

export const FormContact = () => {
  const { t } = useTranslation(); // تفعيل دالة الترجمة
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_hw1539f";
    const TEMPLATE_ID = "template_zhnentg";
    const PUBLIC_KEY = "-s_05NCXl-xosVJD0";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        // استخدام الترجمة في التنبيهات
        alert(t("form.success_msg"));
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert(t("form.error_msg"));
      },
    );
  };

  return (
    <div
      className="FormContact py-5"
      id="ContactUs"
      style={{ backgroundColor: "#f9f9f9" }} // أزلنا direction: rtl لتعتمد على النظام العالمي
    >
      <Container>
        <div className="title text-center mb-5">
          <h5 style={{ color: "#fc8b1a", fontWeight: "bold" }}>
            {t("contact_us")}
          </h5>
          <h1 className="fw-bold" style={{ color: "#212741" }}>
            {t("form.title")}
          </h1>
          <div
            className="mx-auto mt-2"
            style={{ width: "60px", height: "4px", backgroundColor: "#fc8b1a" }}
          ></div>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white p-4 p-md-5 shadow rounded-4"
            >
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-start d-block">
                      {t("form.name_label")}
                    </Form.Label>
                    <Form.Control
                      name="user_name"
                      type="text"
                      placeholder={t("form.name_placeholder")}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-start d-block">
                      {t("form.phone_label")}
                    </Form.Label>
                    <Form.Control
                      name="user_phone"
                      type="text"
                      placeholder={t("form.phone_placeholder")}
                      required
                      className="py-2"
                    />
                  </Form.Group>
                </Col>
                <Col lg={12}>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-start d-block">
                      {t("form.email_label")}
                    </Form.Label>
                    <Form.Control
                      name="user_email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="py-2"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold text-start d-block">
                  {t("form.message_label")}
                </Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  placeholder={t("form.message_placeholder")}
                  rows={4}
                  required
                />
              </Form.Group>
              <div className="text-center">
                <Button
                  className="px-5 py-3 fw-bold shadow-sm"
                  type="submit"
                  style={{
                    backgroundColor: "#212741",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                  }}
                >
                  {t("form.submit_btn")}
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContact;
