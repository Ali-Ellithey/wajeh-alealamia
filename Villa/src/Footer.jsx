import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.webp";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="new-footer text-white">
      <div className="footer-top-bar"></div>

      <Container className="py-5">
        <Row className="gy-4">
          <Col
            lg={4}
            md={12}
            className={`text-center ${isAr ? "text-lg-end" : "text-lg-start"}`}
          >
            <div className="footer-brand mb-3">
              <motion.img
                src={Logo}
                alt="Al-Massa Dental Clinic Logo"
                className="footer-logo-img mb-2"
                whileHover={{ scale: 1.05 }}
              />
              <div className="fw-bold fs-3 text-uppercase brand-text-glow">
                فيلا <span style={{ color: "#38bdf8" }}>للأسنان</span>
              </div>
            </div>
            <p
              className="footer-desc opacity-75"
              style={{
                maxWidth: "350px",
                margin: isAr ? "0 0 0 auto" : "0 auto 0 0",
              }}
            >
              {t(
                "footer_description",
                "نبتت لأجل ابتسامتك المشرقة. نقدم أحدث تقنيات طب وتجميل الأسنان بأعلى معايير الجودة والرعاية الطبية.",
              )}
            </p>
            <div
              className={`social-pills d-flex justify-content-center ${
                isAr ? "justify-content-lg-start" : "justify-content-lg-end"
              } gap-3 mt-4`}
            >
              <a
                href="https://wa.me/+201000000000"
                target="_blank"
                rel="noreferrer"
                className="social-pill whatsapp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-pill instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="tel:+201000000000"
                className="social-pill phone"
                title="Call Us"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="text-center">
            <h5 className="section-title mb-4">
              {t("quick_links", "روابط سريعة")}
            </h5>
            <ul className="footer-links list-unstyled">
              {[
                { to: "/", label: t("home", "الرئيسية") },
                {
                  to: "/dental-implants",
                  label: t("dental_implants", "زراعة الأسنان"),
                },
                {
                  to: "/orthodontics",
                  label: t("orthodontics", "تقويم الأسنان"),
                },
                {
                  to: "/teeth-whitening",
                  label: t("teeth_whitening", "تبييض الأسنان"),
                },
              ].map((link, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    to={link.to}
                    className="footer-route-link"
                    onClick={scrollToTop}
                  >
                    {isAr ? (
                      <FaChevronRight className="link-arrow ms-2" />
                    ) : (
                      <FaChevronLeft className="link-arrow me-2" />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col
            lg={4}
            md={6}
            className={`text-center ${isAr ? "text-lg-start" : "text-lg-end"}`}
          >
            <h5 className="section-title mb-4">
              {t("contact_info", "معلومات التواصل")}
            </h5>
            <div className="contact-item mb-3">
              <p className="mb-1 fw-bold">
                {t("our_location", "موقع العيادة")}
              </p>
              <p className="opacity-75 small">
                <a
                  href="https://maps.app.goo.gl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none location-link"
                  style={{ cursor: "pointer" }}
                >
                  <FaMapMarkerAlt
                    className="mx-2"
                    style={{ color: "#38bdf8" }}
                  />
                  {t("address_details", " - اول جمال جسر السويس، القاهرة، مصر")}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p className="mb-1 fw-bold">
                {t("working_hours", "ساعات العمل")}
              </p>
              <p className="opacity-75 small mb-0">
                {t("open_daily", "طوال أيام الأسبوع")}
              </p>
              <p className="opacity-75 small">
                {t("working_hours_details", "10:00 ص - 10:00 م")}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom py-3">
        <Container className="text-center">
          <p className="mb-0 small opacity-50 text-ltr">
            &copy; {new Date().getFullYear()} Al-Massa Dental Clinic. All Rights
            Reserved.
          </p>
        </Container>
      </div>

      <style>{`
        .new-footer { 
          background: linear-gradient(135deg, #0b1f36 0%, #06111e 50%, #03080f 100%); 
          position: relative; 
          border-radius: 40px 40px 0 0; 
          overflow: hidden; 
          border-top: 1px solid rgba(56, 189, 248, 0.2);
        }

        .footer-logo-img { 
          height: 75px; 
          width: auto; 
          object-fit: contain; 
          display: block;
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.3));
        }

        @media (max-width: 991px) {
          .footer-logo-img { margin: 0 auto; }
        }

        .footer-route-link { 
          text-decoration: none !important; 
          color: rgba(255,255,255,0.75) !important; 
          display: inline-flex; 
          align-items: center; 
          transition: 0.3s ease; 
        }
        
        .footer-route-link:hover { 
          color: #38bdf8 !important; 
          transform: ${isAr ? "translateX(-5px)" : "translateX(5px)"}; 
        }

        .footer-top-bar { 
          height: 5px; 
          background: linear-gradient(90deg, transparent, #38bdf8, #0284c7, transparent); 
          width: 85%; 
          margin: 0 auto; 
        }

        .section-title { 
          color: #38bdf8; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.5px;
        }

        .link-arrow { font-size: 0.7rem; color: #38bdf8; }
        
        .social-pill { 
          width: 42px; 
          height: 42px; 
          border-radius: 50%; 
          background: rgba(56, 189, 248, 0.05); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: #38bdf8; 
          border: 1px solid rgba(56, 189, 248, 0.2); 
          transition: all 0.3s ease; 
          text-decoration: none;
        }

        .social-pill:hover {
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
          transform: translateY(-3px);
        }

        .location-link:hover {
          color: #38bdf8 !important;
          transition: color 0.3s ease;
        }

        .footer-bottom { 
          background: rgba(2, 6, 23, 0.5); 
          border-top: 1px solid rgba(56, 189, 248, 0.1); 
        }

        .text-ltr { direction: ltr; display: inline-block; }

        @media (max-width: 991px) { .new-footer { border-radius: 0; } }
      `}</style>
    </footer>
  );
};

export default Footer;
