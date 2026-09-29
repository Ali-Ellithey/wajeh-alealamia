import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import logo from "@/assets/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setExpanded(false);

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    closeMenu();
  };

  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [i18n.language]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  // 🦷 قائمة الخدمات والتخصصات
  const dentalServices = [
    { path: "/dental-implants", key: "dental_implants" },
    { path: "/orthodontics", key: "orthodontics" },
    { path: "/teeth-whitening", key: "teeth_whitening" },
    { path: "/hollywood-smile", key: "hollywood_smile" },
    { path: "/root-canal", key: "root_canal" },
    { path: "/pediatric-dentistry", key: "pediatric_dentistry" },
    { path: "/gum-care", key: "gum_care" },
    { path: "/cosmetic-dentistry", key: "cosmetic_dentistry" },
  ];

  return (
    <>
      <div className={`fixed-top-wrapper ${scrolled ? "is-scrolled" : ""}`}>
        {/* الشريط العلوي (Top Bar) */}
        <div
          className="top-bar bg-dark text-white py-1 border-bottom border-secondary border-opacity-25"
          style={{ fontSize: "0.85rem" }}
        >
          <Container className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="top-bar-contact d-flex align-items-center gap-2 gap-sm-3 py-1">
              <a
                href="mailto:info.dentalclinic@gmail.com"
                className="text-white text-decoration-none d-flex align-items-center gap-1 text-truncate"
                style={{ maxWidth: "230px" }}
              >
                <i className="fas fa-envelope text-primary small"></i>
                <span>info.dentalclinic@gmail.com</span>
              </a>
              <span className="text-muted d-none d-md-inline">|</span>
              <a
                href="tel:+201012345678"
                className="text-white text-decoration-none d-flex align-items-center gap-1"
                style={{ direction: "ltr" }}
              >
                <i className="fas fa-phone text-primary small"></i>
                <span>+20 101 234 5678</span>
              </a>
            </div>

            <div className="top-bar-social d-flex align-items-center gap-3 py-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/+201012345678"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-decoration-none"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Container>
        </div>

        {/* الناف بار الأساسي */}
        <Navbar
          expanded={expanded}
          onToggle={(isOpen) => setExpanded(isOpen)}
          expand="lg"
          className="navBar bg-white shadow-sm"
          style={{ padding: "8px 0" }}
          sticky="top"
        >
          <Container className="d-flex align-items-center justify-content-between">
            {/* اللوجو */}
            <Navbar.Brand
              as={Link}
              to="/"
              onClick={closeMenu}
              className="py-0 d-flex align-items-center"
            >
              <img
                src={logo}
                alt="Villa Dental Clinic"
                className="app-logo img-fluid"
              />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded((prev) => !prev)}
              className="border-0 shadow-none"
            >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="align-items-lg-center mx-lg-auto text-center main-nav-links my-2 my-lg-0">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={closeMenu}
                  className={`py-1 px-2 ${isActive("/")}`}
                >
                  {t("navbar.home")}
                </Nav.Link>

                <Nav.Link
                  as={NavHashLink}
                  smooth
                  to="/#About"
                  onClick={closeMenu}
                  className="py-1 px-2"
                >
                  {t("navbar.about_us")}
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/doctors"
                  onClick={closeMenu}
                  className={`py-1 px-2 ${isActive("/doctors")}`}
                >
                  {t("navbar.our_doctors")}
                </Nav.Link>

                {/* قائمة التخصصات */}
                <NavDropdown
                  title={t("navbar.treatments")}
                  id="dental-dropdown"
                  className="py-1"
                >
                  {dentalServices.map((service, index) => (
                    <NavDropdown.Item
                      key={index}
                      as={Link}
                      to={service.path}
                      onClick={closeMenu}
                      className={isActive(service.path)}
                    >
                      {t(`navbar.services.${service.key}`)}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/contacted"
                  onClick={closeMenu}
                  className={`py-1 px-2 ${isActive("/contacted")}`}
                >
                  {t("navbar.contact_us")}
                </Nav.Link>
              </Nav>

              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 nav-actions my-2 my-lg-0">
                <Button
                  as={Link}
                  to="/business-solutions"
                  variant="primary"
                  size="sm"
                  className="book-btn fw-bold px-3 py-1.5"
                  style={{
                    position: "relative",
                    zIndex: 999999 /* ضمان أن الزر بارز وفوق أي طبقة شفافة في الموبايل */,
                    pointerEvents:
                      "auto" /* ضمان استجابة اللمس على الشاشات الصغيرة */,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                >
                  {t("navbar.book_appointment") || "حجز موعد"}
                </Button>

                {/* أزرار تغيير اللغة */}
                <div className="lang-switch d-flex gap-1">
                  <Button
                    variant={
                      i18n.language === "ar" ? "primary" : "outline-primary"
                    }
                    size="sm"
                    onClick={() => handleLangChange("ar")}
                    className="lang-btn fw-bold px-2 py-1"
                  >
                    عربي
                  </Button>
                  <Button
                    variant={
                      i18n.language === "en" ? "primary" : "outline-primary"
                    }
                    size="sm"
                    onClick={() => handleLangChange("en")}
                    className="lang-btn fw-bold px-2 py-1"
                  >
                    EN
                  </Button>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
