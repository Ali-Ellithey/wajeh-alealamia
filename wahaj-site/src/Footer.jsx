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

// --- التصحيح: استيراد اللوجو مباشرة باستخدام الـ Alias الذي عرفناه في vite.config.js ---
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
                alt="Wahaj Logo"
                className="footer-logo-img mb-2"
                whileHover={{ scale: 1.05 }}
              />
              <div className="fw-bold fs-3 text-uppercase">
                WAHAJ <span style={{ color: "#fc8b1a" }}>CAR</span>
              </div>
            </div>
            <p
              className="footer-desc opacity-75"
              style={{
                maxWidth: "350px",
                margin: isAr ? "0 0 0 auto" : "0 auto 0 0",
              }}
            >
              {t("footer_description")}
            </p>
            <div
              className={`social-pills d-flex justify-content-center ${
                isAr ? "justify-content-lg-start" : "justify-content-lg-end"
              } gap-3 mt-4`}
            >
              <a
                href="https://wa.me/+96590930061"
                target="_blank"
                rel="noreferrer"
                className="social-pill whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/wahaj_global?utm_source=qr&igsh=em5lcDFnbThuem92"
                target="_blank"
                rel="noreferrer"
                className="social-pill instagram"
              >
                <FaInstagram />
              </a>
              <a href="tel:+96590930061" className="social-pill phone">
                <FaPhoneAlt />
              </a>
            </div>
          </Col>

          <Col lg={4} md={6} className="text-center">
            <h5 className="section-title mb-4">{t("quick_links")}</h5>
            <ul className="footer-links list-unstyled">
              {[
                { to: "/", label: t("home") },
                { to: "/luxury-cars-details", label: t("luxury_cars") },
                { to: "/suv-cars-details", label: t("suv_cars") },
                { to: "/economy-cars-details", label: t("economy_cars") },
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
            <h5 className="section-title mb-4">{t("contact_info")}</h5>
            <div className="contact-item mb-3">
              <p className="mb-1 fw-bold">{t("our_location")}</p>
              <p className="opacity-75 small">
                <a
                  href="https://maps.app.goo.gl/2iACKBUu4azFAaRs5?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none" // يمكنك تغيير text-white للون المناسب لتصميمك
                  style={{ cursor: "pointer" }}
                >
                  <FaMapMarkerAlt className="text-warning mx-2" />
                  {t("address_details")}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p className="mb-1 fw-bold">{t("working_hours")}</p>
              <p className="opacity-75 small mb-0">{t("open_daily")}</p>
              <p className="opacity-75 small">{t("working_hours_details")}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom py-3">
        <Container className="text-center">
          <p className="mb-0 small opacity-50 text-ltr">
            &copy; {new Date().getFullYear()} Wahaj Al-Alamiah. All Rights
            Reserved.
          </p>
        </Container>
      </div>

      <style>{`
        .new-footer { 
          background: linear-gradient(145deg, #1a1e2e 0%, #0f121d 100%); 
          position: relative; 
          border-radius: 40px 40px 0 0; 
          overflow: hidden; 
        }

        .footer-logo-img { 
          height: 100px; 
          width: auto; 
          object-fit: contain; 
          display: block;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.1));
        }

        @media (max-width: 991px) {
          .footer-logo-img { margin: 0 auto; }
        }

        .footer-route-link { 
          text-decoration: none !important; 
          color: rgba(255,255,255,0.7) !important; 
          display: inline-flex; 
          align-items: center; 
          transition: 0.3s ease; 
        }
        
        .footer-route-link:hover { 
          color: #fc8b1a !important; 
          transform: ${isAr ? "translateX(-5px)" : "translateX(5px)"}; 
        }

        .footer-top-bar { 
          height: 6px; 
          background: linear-gradient(90deg, transparent, #fc8b1a, transparent); 
          width: 80%; 
          margin: 0 auto; 
        }

        .section-title { color: #fc8b1a; font-weight: 700; text-transform: uppercase; }
        .link-arrow { font-size: 0.7rem; color: #fc8b1a; }
        .social-pill { width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.05); display: flex; align-items: center; justify-content: center; color: white; border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
        .whatsapp:hover { background: #25D366; color: #fff; }
        .instagram:hover { background: #E1306C; color: #fff; }
        .phone:hover { background: #fc8b1a; color: #fff; }
        .footer-bottom { background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.05); }
        .text-ltr { direction: ltr; display: inline-block; }
        @media (max-width: 991px) { .new-footer { border-radius: 0; } }
      `}</style>
    </footer>
  );
};

export default Footer;
