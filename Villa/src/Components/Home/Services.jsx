import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// --- استيراد الصور بمسارات صحيحة ---
import implantImg from "@/assets/serves/implant.webp";
import bracesImg from "@/assets/serves/braces.webp";
import whiteningImg from "@/assets/serves/whitening.webp";
import hollywoodImg from "@/assets/serves/hollywood.webp";
import rootCanalImg from "@/assets/serves/root_canal.webp";
import kidsImg from "@/assets/serves/dental_prostheses.webp";
import gumsImg from "@/assets/serves/gums.webp";
import cosmeticImg from "@/assets/serves/cosmetic.webp";

export const Services = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // بيانات الخدمات مع ربط العناوين والأوصاف بملف الترجمة
  const dentalServicesData = [
    {
      id: "1",
      title: t("services_page.items.1.title"),
      description: t("services_page.items.1.description"),
      image: implantImg,
      path: "/services/dental-implant",
    },
    {
      id: "2",
      title: t("services_page.items.2.title"),
      description: t("services_page.items.2.description"),
      image: bracesImg,
      path: "/services/dental-braces",
    },
    {
      id: "3",
      title: t("services_page.items.3.title"),
      description: t("services_page.items.3.description"),
      image: whiteningImg,
      path: "/services/teeth-whitening",
    },
    {
      id: "4",
      title: t("services_page.items.4.title"),
      description: t("services_page.items.4.description"),
      image: hollywoodImg,
      path: "/services/hollywood-smile",
    },
    {
      id: "5",
      title: t("services_page.items.5.title"),
      description: t("services_page.items.5.description"),
      image: rootCanalImg,
      path: "/services/root-canal",
    },
    {
      id: "6",
      title: t("services_page.items.6.title"),
      description: t("services_page.items.6.description"),
      image: kidsImg,
      path: "/services/dental-prostheses",
    },
    {
      id: "7",
      title: t("services_page.items.7.title"),
      description: t("services_page.items.7.description"),
      image: gumsImg,
      path: "/services/gums-care",
    },
    {
      id: "8",
      title: t("services_page.items.8.title"),
      description: t("services_page.items.8.description"),
      image: cosmeticImg,
      path: "/services/dental-cosmetics",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div
      className="services-section py-5"
      id="Services"
      style={{ backgroundColor: "#f4f8fb", overflow: "hidden" }}
    >
      <Container>
        {/* عنوان القسم */}
        <div className="title text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fw-bold display-6 mb-3"
            style={{ color: "#0f172a" }}
          >
            {t("services_page.main_title")}
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-3"
            style={{
              height: "4px",
              backgroundColor: "#0ea5e9",
              borderRadius: "2px",
            }}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted mx-auto fs-6"
            style={{ maxWidth: "700px", lineHeight: "1.8" }}
          >
            {t("services_page.main_desc")}
          </motion.p>
        </div>

        {/* شبكة عرض الخدمات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Row className="gx-4 gy-4 justify-content-center">
            {dentalServicesData.map((service) => (
              <Col key={service.id} xs={12} sm={6} lg={4} xl={3}>
                <motion.div variants={itemVariants} className="h-100">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    className="h-100"
                  >
                    <Card className="h-100 border-0 dental-service-card d-flex flex-column shadow-sm">
                      {/* صورة بـ Border Radius انسيابي وبدون حواف مربعة حادة */}
                      <div className="card-img-wrapper text-center">
                        <motion.div
                          className="service-img-container mx-auto"
                          whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="service-icon-img"
                          />
                        </motion.div>
                      </div>

                      <Card.Body className="d-flex flex-column text-center px-4 pt-2 pb-4">
                        <Card.Title
                          className="fw-bold fs-5 mb-2"
                          style={{ color: "#1e293b" }}
                        >
                          {service.title}
                        </Card.Title>

                        <Card.Text
                          className="text-muted flex-grow-1 mb-4"
                          style={{ fontSize: "0.875rem", lineHeight: "1.6" }}
                        >
                          {service.description}
                        </Card.Text>

                        <div className="mt-auto">
                          <motion.div whileTap={{ scale: 0.95 }}>
                            <Button
                              as={Link}
                              to={service.path}
                              className="w-100 fw-bold py-2 service-more-btn border-0 d-flex align-items-center justify-content-center gap-2"
                            >
                              <span>{t("services_page.more_btn")}</span>
                              <motion.i
                                className="bi bi-arrow-left"
                                whileHover={{ x: -4 }}
                                transition={{
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  duration: 0.3,
                                }}
                              ></motion.i>
                            </Button>
                          </motion.div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Services;
