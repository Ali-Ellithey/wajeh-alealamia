import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
// تعديل الاستيراد لاستخدام الـ Alias
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const closeMenu = () => setExpanded(false);

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    // تم تحسين الكود ليتغير الاتجاه فوراً
    closeMenu();
  };

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [i18n.language]);

  // دالة مساعدة لتحديد الرابط النشط
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <Navbar expanded={expanded} expand="lg" className="navBar" sticky="top">
        <Container>
          {/* اللوجو */}
          <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
            <img src={logo} alt="Al-Wahaj" className="app-logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-center mx-auto text-center">
              <Nav.Link
                as={Link}
                to="/"
                onClick={closeMenu}
                className={isActive("/")}
              >
                {t("home")}
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                smooth
                to="/#About"
                onClick={closeMenu}
              >
                {t("about_us")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/HomeServices"
                onClick={closeMenu}
                className={isActive("/HomeServices")}
              >
                {t("services")}
              </Nav.Link>
              <Nav.Link
                as={NavHashLink}
                smooth
                to="/#Services"
                onClick={closeMenu}
              >
                {t("our_fleet")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contacted"
                onClick={closeMenu}
                className={isActive("/contacted")}
              >
                {t("contact_us")}
              </Nav.Link>
            </Nav>

            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 py-2 py-lg-0">
              {/* أيقونات السوشيال ميديا */}
              <div className="d-flex align-items-center gap-2">
                <a
                  href="tel:+96590930061"
                  className="nav-social-icon phone-icon"
                  title="Call Us"
                >
                  <i className="fas fa-phone"></i>
                </a>
                <a
                  href="https://www.instagram.com/wahajcar2/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-social-icon instagram-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://wa.me/+96590930061"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-social-icon whatsapp-icon"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>

              {/* تبديل اللغة */}
              <div
                className="d-flex bg-dark p-1"
                style={{
                  borderRadius: "25px",
                  border: "1px solid #fc8b1a",
                  marginLeft: i18n.language === "en" ? "10px" : "0",
                  marginRight: i18n.language === "ar" ? "10px" : "0",
                }}
              >
                <Button
                  variant={i18n.language === "ar" ? "warning" : "outline-light"}
                  size="sm"
                  onClick={() => handleLangChange("ar")}
                  style={{
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    minWidth: "55px",
                    border: "none",
                  }}
                  className="fw-bold"
                >
                  عربي
                </Button>
                <Button
                  variant={i18n.language === "en" ? "warning" : "outline-light"}
                  size="sm"
                  onClick={() => handleLangChange("en")}
                  style={{
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    minWidth: "55px",
                    border: "none",
                  }}
                  className="fw-bold"
                >
                  EN
                </Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
        {/* الخط المتدرج في الأسفل */}
        <div
          className="footer-top-bar"
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, #fc8b1a, transparent)",
            width: "100%",
          }}
        ></div>
      </Navbar>
    </>
  );
};

export default NavBar;
