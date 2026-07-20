import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
// تعديل الاستيراد لاستخدام الـ Alias
import logo from "@/assets/logo.webp";
import { Link, useLocation } from "react-router-dom";
import { HashLink as NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import { toSlug } from "@/utils/brandUtils";

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

  // ظل خفيف يظهر بس بعد ما المستخدم يعمل سكرول، عشان النافبار
  // يفضل نضيف ومسطح فوق الهيرو، ويبقى له عمق لما المحتوى يتحرك تحته
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // دالة مساعدة لتحديد الرابط النشط
  const isActive = (path) => (location.pathname === path ? "active" : "");

  // مسارات صفحات السيارات
  const carsPaths = [
    "/luxury-cars-details",
    "/suv-cars-details",
    "/family-cars-details",
    "/economy-cars-details",
  ];
  const isCarsActive = carsPaths.includes(location.pathname) ? "active" : "";

  // 🏎️ المصفوفة الكاملة لجميع موديلات وبراندات سيارات شركة الوهج
  const allBrands = [
    { id: "Mercedes-Benz", en: "Mercedes", ar: "مرسيدس" },
    { id: "BMW", en: "BMW", ar: "بي إم دبليو" },
    { id: "Bentley", en: "Bentley", ar: "بنتلي" },
    { id: "Rolls-Royce", en: "Rolls-Royce", ar: "رولز رويس" },
    { id: "porsche", en: "Porsche", ar: "بورش" },
    { id: "Range Rover", en: "Range Rover", ar: "رنج روفر" },
    { id: "Lexus", en: "Lexus", ar: "لكزس" },
    { id: "cadillac", en: "Cadillac", ar: "كاديلاك" },
    { id: "Chevrolet", en: "Chevrolet", ar: "شيفروليه" },
    { id: "jeep", en: "Jeep", ar: "جيب" },
    { id: "nissan", en: "Nissan", ar: "نيسان" },
    { id: "Toyota", en: "Toyota", ar: "تويوتا" },
  ];

  return (
    <>
      <div className={`fixed-top-wrapper ${scrolled ? "is-scrolled" : ""}`}>
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
              <Nav className="align-items-lg-center mx-lg-auto text-center main-nav-links">
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

                {/* قائمة الفئات المنسدلة */}
                <NavDropdown
                  title={t("categories")}
                  id="cars-dropdown"
                  className={isCarsActive}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/luxury-cars-details"
                    onClick={closeMenu}
                    className={isActive("/luxury-cars-details")}
                  >
                    {t("luxury_cars")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/suv-cars-details"
                    onClick={closeMenu}
                    className={isActive("/suv-cars-details")}
                  >
                    {t("super_sport")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/family-cars-details"
                    onClick={closeMenu}
                    className={isActive("/family-cars-details")}
                  >
                    {t("large_family")}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/economy-cars-details"
                    onClick={closeMenu}
                    className={isActive("/economy-cars-details")}
                  >
                    {t("economy_cars")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/contacted"
                  onClick={closeMenu}
                  className={isActive("/contacted")}
                >
                  {t("contact_us")}
                </Nav.Link>
              </Nav>

              <div className="d-flex flex-column flex-lg-row align-items-center gap-3 nav-actions">
                {/* أيقونات السوشيال ميديا */}
                <div className="d-flex align-items-center gap-2 social-icons-group">
                  <a
                    href="tel:+96590930061"
                    className="nav-social-icon phone-icon"
                    title="Call Us"
                  >
                    <i className="fas fa-phone"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/wahaj_global?utm_source=qr&igsh=em5lcDFnbThuem92"
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
                <div className="lang-switch">
                  <Button
                    variant={
                      i18n.language === "ar" ? "warning" : "outline-light"
                    }
                    size="sm"
                    onClick={() => handleLangChange("ar")}
                    className="lang-btn fw-bold"
                  >
                    عربي
                  </Button>
                  <Button
                    variant={
                      i18n.language === "en" ? "warning" : "outline-light"
                    }
                    size="sm"
                    onClick={() => handleLangChange("en")}
                    className="lang-btn fw-bold"
                  >
                    EN
                  </Button>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ⚡ شريط الموديلات السريع والاحترافي المتاح دائماً للموبايل والـ Desktop */}
        <div className="brands-quick-bar">
          <Container className="quick-bar-inner">
            <span className="quick-title d-none d-md-inline-flex">
              {i18n.language === "ar" ? "الموديلات" : "Models"}
            </span>
            <div className="quick-links-track-wrapper">
              <div className="quick-links-track">
                {allBrands.map((brand, idx) => {
                  // يعرض الاسم العربي لو الموقع عربي، والإنجليزي لو الموقع إنجليزي
                  const displayName =
                    i18n.language === "ar" ? brand.ar : brand.en;
                  // ✅ نفس دالة الـ slug المستخدمة في صفحة BrandCars،
                  // عشان الرابط يتطابق بالظبط (مثال: "rolls-royce" مش "rolls%20royce")
                  const brandSlug = toSlug(brand.en);
                  const isBrandActive = location.search.includes(
                    `brand=${brandSlug}`,
                  );

                  return (
                    <Link
                      key={idx}
                      to={`/brand-cars?brand=${brandSlug}`}
                      className={`quick-brand-link ${
                        isBrandActive ? "is-active" : ""
                      }`}
                    >
                      {displayName}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </div>

      <style>{`
        :root {
          --wahaj-navy: #212741;
          --wahaj-navy-deep: #171b30;
          --wahaj-orange: #fc8b1a;
          --wahaj-orange-soft: rgba(252, 139, 26, 0.14);
          --nav-height: 88px;
          --quickbar-height: 46px;
          --nav-gap: 6px;
          --nav-radius-sm: 8px;
          --nav-radius-pill: 999px;
        }

        /* ── الحاوية الثابتة فوق الصفحة ─────────────────────── */
        .fixed-top-wrapper {
          position: sticky;
          top: 0;
          z-index: 1030;
          background: var(--wahaj-navy);
          transition: box-shadow 0.3s ease;
        }
        .fixed-top-wrapper.is-scrolled {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
        }

        /* ── النافبار الرئيسي ────────────────────────────────── */
        .navBar {
          background: var(--wahaj-navy) !important;
          min-height: var(--nav-height);
          padding-top: 0;
          padding-bottom: 0;
        }
        .navBar .container {
          min-height: var(--nav-height);
          display: flex;
          align-items: center;
        }

        .app-logo {
          height: 90px;
          width: auto;
          display: block;
        }

        .navbar-toggler-icon {
          filter: invert(1);
        }
        .navBar .navbar-toggler {
          border-color: rgba(255, 255, 255, 0.25);
        }
        .navBar .navbar-toggler:focus {
          box-shadow: 0 0 0 3px var(--wahaj-orange-soft);
        }

        /* ── روابط النافبار الرئيسية ────────────────────────── */
        .main-nav-links {
          gap: 4px;
        }
        .main-nav-links .nav-link,
        .main-nav-links .dropdown-toggle {
          color: rgba(255, 255, 255, 0.82) !important;
          font-weight: 600;
          font-size: 0.92rem;
          letter-spacing: 0.02em;
          padding: 10px 16px !important;
          border-radius: var(--nav-radius-sm);
          transition: color 0.2s ease, background-color 0.2s ease;
          position: relative;
        }
        .main-nav-links .nav-link:hover,
        .main-nav-links .dropdown-toggle:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.06);
        }
        .main-nav-links .nav-link.active,
        .main-nav-links .dropdown-toggle.active {
          color: #ffffff !important;
        }
        .main-nav-links .nav-link.active::after,
        .main-nav-links .dropdown-toggle.active::after {
          content: "";
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 4px;
          height: 2px;
          background: var(--wahaj-orange);
          border-radius: 2px;
        }
        .main-nav-links .nav-link:focus-visible,
        .main-nav-links .dropdown-toggle:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--wahaj-orange-soft);
        }

        /* قائمة الفئات المنسدلة */
        .main-nav-links .dropdown-menu {
          background: var(--wahaj-navy-deep);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 8px;
          margin-top: 10px;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
        }
        .main-nav-links .dropdown-item {
          color: rgba(255, 255, 255, 0.78);
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: 8px;
          padding: 10px 14px;
          transition: 0.2s ease;
        }
        .main-nav-links .dropdown-item:hover,
        .main-nav-links .dropdown-item:focus {
          background: var(--wahaj-orange-soft);
          color: #ffffff;
        }
        .main-nav-links .dropdown-item.active {
          background: var(--wahaj-orange);
          color: #1a1a1a;
        }

        /* ── منطقة الأيقونات وتبديل اللغة ───────────────────── */
        .nav-actions {
          padding: 12px 0 16px;
        }
        @media (min-width: 992px) {
          .nav-actions {
            padding: 0;
          }
        }

        .social-icons-group {
          gap: 8px !important;
        }
        .nav-social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.95rem;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .nav-social-icon:hover {
          transform: translateY(-2px);
          color: #ffffff;
        }
        .phone-icon:hover { background-color: #4caf50; }
        .instagram-icon:hover { background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4); }
        .whatsapp-icon:hover { background-color: #25d366; }

        .lang-switch {
          display: flex;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--wahaj-orange);
          border-radius: var(--nav-radius-pill);
          padding: 3px;
          gap: 2px;
        }
        .lang-btn {
          border-radius: var(--nav-radius-pill) !important;
          font-size: 0.75rem !important;
          min-width: 56px;
          border: none !important;
          padding: 6px 12px !important;
        }

        /* ── شريط الموديلات السريع ──────────────────────────── */
        .brands-quick-bar {
          background: var(--wahaj-navy-deep);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          height: var(--quickbar-height);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .quick-bar-inner {
          display: flex;
          align-items: center;
          gap: 14px;
          height: 100%;
        }
        .quick-title {
          align-items: center;
          color: var(--wahaj-orange);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .quick-links-track-wrapper {
          position: relative;
          flex: 1;
          height: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 24px,
            #000 calc(100% - 24px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 24px,
            #000 calc(100% - 24px),
            transparent 100%
          );
        }
        .quick-links-track {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 100%;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 0 4px;
        }
        .quick-links-track::-webkit-scrollbar {
          display: none;
        }

        .quick-brand-link {
          flex-shrink: 0;
          white-space: nowrap;
          color: rgba(255, 255, 255, 0.68);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: var(--nav-radius-pill);
          border: 1px solid transparent;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .quick-brand-link:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
        }
        .quick-brand-link.is-active {
          color: #1a1a1a;
          background: var(--wahaj-orange);
          border-color: var(--wahaj-orange);
        }

        /* ── الاستجابة للشاشات الصغيرة ───────────────────────── */
        @media (max-width: 767px) {
          .app-logo { height: 90px; }
          :root { --nav-height: 72px; }
          .quick-title { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .fixed-top-wrapper,
          .main-nav-links .nav-link,
          .nav-social-icon,
          .quick-brand-link {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;
